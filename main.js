"use strict"

//function displays the coffee name/roast
function renderCoffee(coffee) {
    let html = '<div class="coffee">';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';
    return html;
}

// THis functions takes the above function and loops through it to add
// all of our coffees to one line of text to place within the section
function renderCoffees(coffees) {
    let html = '';
    for (let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

//This is the function that filters through our coffee array in order to match
//the user search input.  It removes content that does not include any of the user input.
function coffeeSearch(){
    let searchTerm = searchInput.value.toLowerCase();
    if (coffeeList === null){
        section.innerHTML = renderCoffees(coffees.filter(coffee => (roastSelection.value === 'all' || coffee.roast === roastSelection.value) && coffee.name.toLowerCase().includes(searchTerm)));
    }
    section.innerHTML = renderCoffees(coffeeList.filter(coffee => (roastSelection.value === 'all' || coffee.roast === roastSelection.value) && coffee.name.toLowerCase().includes(searchTerm)));
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
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

let tbody = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
