"use strict"

function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    html += '<td>' + coffee.id + '</td>';
    html += '<td>' + coffee.name + '</td>';
    html += '<td>' + coffee.roast + '</td>';
    html += '</tr>';

    return html;
}
// ascending order//
function renderCoffees(coffees) {
    var html = '';
    for(var i= 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    console.log(e.target.value);
    var toFilter = e.target.value.toLowerCase()
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast.toLowerCase() === toFilter || coffee.name.toLowerCase().includes(toFilter)) {
               filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

/*function customerCoffeeSearch (e) {
    e.preventDefault();
    let customerInput = customerSearch.value;
    let coffeeSelections = [];
    coffees.forEach(function (coffee) {
        if (coffee.name.toLowerCase().includes(customerInput.toLowerCase()))
        {
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}*/


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: "", name: 'Light City', roast: 'light'},
    {id: "", name: 'Half City', roast: 'light'},
    {id: "", name: 'Cinnamon', roast: 'light'},
    {id: "", name: 'City', roast: 'medium'},
    {id: "", name: 'American', roast: 'medium'},
    {id: "", name: 'Breakfast', roast: 'medium'},
    {id: "", name: 'High', roast: 'dark'},
    {id: "", name: 'Continental', roast: 'dark'},
    {id: "", name: 'New Orleans', roast: 'dark'},
    {id: "", name: 'European', roast: 'dark'},
    {id: "", name: 'Espresso', roast: 'dark'},
    {id: "", name: 'Viennese', roast: 'dark'},
    {id: "", name: 'Italian', roast: 'dark'},
    {id: "", name: 'French', roast: 'dark'},
    {id: "", name: 'Vagetas Revenge', roast: 'dark'},
    {id: "", name: 'Aizawa Knockout Special', roast: 'dark'},
    {id: "", name: 'Lights Roast', roast: 'Light'},
    {id: "", name: 'Kamado Blend', roast: 'Medium'},

];

var tbody = document.querySelector('#coffees');
//var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

//toggle down//
roastSelection.addEventListener('change', updateCoffees);

//type in search//

let customerSearch = document.querySelector('#userInput');

customerSearch. addEventListener("input", updateCoffees);



