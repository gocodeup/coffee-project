"use strict"
//changed from descending order to ascending order by changing the for conditions
let htmlArray = [];
function renderCoffees(coffees) {
    for(let i = 0; i < coffees.length; i++) {
        htmlArray.push (renderCoffee(coffees[i]));
    }
    return htmlArray;
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
let coffeeName = document.querySelector('#coffee-name');

tbody.innerHTML = renderCoffees(coffees).join(``);

submitButton.addEventListener('click', updateCoffees);

//Changed the tags to div, h1, and p, respectively and eliminated the id line
//changing the tags here will make the DOM event will adjust the tags that are dynamically inserted into the html when the page loads.
function renderCoffee(coffee) {
    let html = '<div class="coffee">';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}


///split function into one for search and one for HTML insertion
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
     let filteredCoffees = [];
     coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    tbody.innerHTML = renderCoffees(coffees).join(``);
    });
}
// this creates an array of just the coffees that we will be able to loop through.
let coffeesArray = [];
for (let i = 0; i < coffees.length; i++){
    coffeesArray.push(coffees[i].name);
}
//
// coffeeName.onkeyup = function() {
//     let coffeeMatch = coffeesArray.filter(coffeesArray => coffeesArray === coffeeName)
//     tbody.innerHTML = coffeeMatch
// }

//first make an array instead of an array
//then make a separate function that converts the string and pushes to the hold.

