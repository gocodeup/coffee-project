"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    console.log('submit clicked')
    var selectedRoast = roastSelection.value;
    var inputCoffee = document.getElementById('searchbar').value
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        // if equalsl roast AND input value matches name of coffee ...
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if (selectedRoast==='all')
            filteredCoffees.push(coffee)
    });
    // displays all upon page loading
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
coffees.reverse()
// Captures DOM to display coffee
var tbody = document.querySelector('#coffees');

var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var coffeeSelection = document.querySelector('#coffee-selection');

// Adds event listener to the dropdown
coffeeSelection.addEventListener('input',e => {
    var coffeeOfChoice = [];
    var coffeeValue = e.target.value.toLowerCase();
    coffees.forEach(function (coffeeArray){
        var lcCofArr = coffeeArray.name.toLowerCase();
        if (lcCofArr.includes(coffeeValue)){
            coffeeOfChoice.push(coffeeArray);
        }
    })
    tbody.innerHTML = renderCoffees(coffeeOfChoice);
})
tbody.innerHTML = renderCoffees(coffees);
submitButton.addEventListener('click', updateCoffees);
