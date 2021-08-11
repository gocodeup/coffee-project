"use strict"

function renderCoffee(coffee) {
    var html = '';
    html += '<div class="col-6"><h1>' + coffee.name + '</h1><p>' +  coffee.roast + '</p></div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
        //Changed order from last to first, to first to last
        for (var i = 0; i < coffees.length; i++) {
            html += renderCoffee(coffees[i]);
        }
        return html;
    }

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var selectedName = nameSelection.value.toLowerCase();
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if (selectedRoast === 'all' && selectedName === '') {
            filteredCoffees.push(coffee);
        } else if (selectedRoast === 'all' && coffee.name.toLowerCase().includes(selectedName)) {
            filteredCoffees.push(coffee);
        } else if (selectedRoast === coffee.roast && coffee.name.toLowerCase().includes(selectedName)) {
            filteredCoffees.push(coffee);
        }
    });
    divBody.innerHTML = renderCoffees(filteredCoffees);
}

function addCoffee(e){
    e.preventDefault();
    var newCoffee = {
        id: coffees.length + 1,
        name: addNameSelection.value,
        roast: addRoastSelection.value,
    };
    if (/\S/.test(newCoffee.name)){
    coffees.push(newCoffee);
    updateCoffees(e);
    }
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

var divBody = document.querySelector('#coffees');
// searching for coffee
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var nameSelection = document.querySelector('#coffee-name');

// add a coffee
var addSubmitButton = document.querySelector('#add-submit');
var addRoastSelection = document.querySelector('#add-coffee-roast');
var addNameSelection = document.querySelector('#add-coffee-name');

submitButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener('change', updateCoffees);
nameSelection.addEventListener('keyup', updateCoffees);

addSubmitButton.addEventListener("click", addCoffee);

// initialization function
divBody.innerHTML = renderCoffees(coffees);