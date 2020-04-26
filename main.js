"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee h3 p-3 col-6">' + coffee.name + ' '+  '<p class="d-inline-block h6">' + coffee.roast + '</p>' + '</div>'
    // html += '<div hidden>' + coffee.id + ' </div>';
    // html += '<div><h1>' + coffee.name + '</h1></div>';
    // html += '<div><p>' + coffee.roast + '</p></div>';
    // html += '</div>';

    return html;
}



function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}



function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var selectedName = coffeeSearch.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast || selectedRoast === "all" && coffee.name.toLowerCase().includes(selectedName.toLowerCase())) {

            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},

];


// ADD YOUR OWN COFFEE FUNCTION

function addCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var newCoffee = addCoffeeToList.value;
    var newCoffeeArray = "";
    coffees.forEach(function(coffee) {
        console.log(newCoffee)
        if (coffee.roast === selectedRoast || selectedRoast === 'all' && newCoffee === "string") {
            console.log(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(newCoffeeArray);
}





var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var coffeeSearch = document.querySelector('#search-bar');

// GRABBING THE ADD COFFEE INPUT AND BUTTON
var addCoffeeToList = document.querySelector('#add-coffee');
var addButton = document.getElementById('submit-btn');



tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
coffeeSearch.addEventListener('keyup', updateCoffees);
// addCoffeeToList.addEventListener('keyup', updateCoffees);
addButton.addEventListener('click', updateCoffees);






