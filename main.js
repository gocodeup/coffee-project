"use strict"
let tbody = document.querySelector('.coffee');
function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p class="p2">' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    // sort the coffees array by ID in ascending order
    coffees.sort((a, b) => a.id - b.id);

    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}


function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    if (selectedRoast === 'all') {
        filteredCoffees = coffees;
    }
    else {
        // coffees.forEach(function (coffee) {
        //     if (coffee.roast === selectedRoast) {
        //         filteredCoffees.push(coffee);
        //     }
        // });
        filteredCoffees = coffees.filter(coffee => coffee.roast === selectedRoast);
    }
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
function searchCoffee(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let userInput = coffeeName.value.toLowerCase();
    let selectedRoast = roastSelection.value;
    let filteredCoffees = coffees.filter(function(coffee) {
        return coffee.name.toLowerCase().includes(userInput) && (selectedRoast === 'all' || coffee.roast === selectedRoast);
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

// var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
let coffeeName = document.querySelector('#coffeeName')

tbody.innerHTML = renderCoffees(coffees);

// submitButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener('change', updateCoffees);
coffeeName.addEventListener('keyup', searchCoffee)
// keyup