"use strict"

function renderCoffee(coffee) {
    let html = '<tr class="coffee">';
    html += '<td>' + coffee.id + '</td>';
    html += '<td>' + coffee.name + '</td>';
    html += '<td>' + coffee.roast + '</td>';
    html += '</tr>';

    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for(let i = 0 ; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if (coffee.default === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light', default : 'all'},
    {id: 2, name: 'Half City', roast: 'light' , default : 'all'},
    {id: 3, name: 'Cinnamon', roast: 'light' , default : 'all'},
    {id: 4, name: 'City', roast: 'medium' , default : 'all'},
    {id: 5, name: 'American', roast: 'medium' , default : 'all'},
    {id: 6, name: 'Breakfast', roast: 'medium' , default : 'all'},
    {id: 7, name: 'High', roast: 'dark' , default : 'all'},
    {id: 8, name: 'Continental', roast: 'dark' , default : 'all'},
    {id: 9, name: 'New Orleans', roast: 'dark' , default : 'all'},
    {id: 10, name: 'European', roast: 'dark' , default : 'all'},
    {id: 11, name: 'Espresso', roast: 'dark' , default : 'all'},
    {id: 12, name: 'Viennese', roast: 'dark' , default : 'all'},
    {id: 13, name: 'Italian', roast: 'dark' , default : 'all'},
    {id: 14, name: 'French', roast: 'dark' , default : 'all'},
];

let tbody = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
