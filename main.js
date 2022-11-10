"use strict"

let coffeeContainer = document.getElementById('coffee-list');
let searchSubmit = document.getElementById("search-btn");
let searchCoffee = document.getElementById("coffee-search");
let roast = document.getElementById("roast-selection"); // our select tag
searchSubmit.addEventListener("click", updateCoffees);
roast.addEventListener('change', updateCoffees);

console.log('coffeeContainer: ', coffeeContainer);
console.log('searchSubmit: ', searchSubmit);
console.log('searchCoffee: ', searchCoffee);
console.log('roast: ', roast);



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


function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    html += '<td>' + coffee.id + '</td>';
    html += '<td class="coffee-name">' + coffee.name + '</td>';
    html += '<td class="roast">' + coffee.roast + '</td>';
    html += '</tr>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}


// +++++++++++++++++
function updateCoffees(e) {
    // console.log('updateCoffees(): ');
    
    e.preventDefault(); // don't submit the form, we just want to update the data
    let filteredCoffees = [];
    let selectedRoast = roast.value.toLowerCase()
    for (let i = 0; i < coffees.length;i++)
    {
        console.log('coffee roast', coffees[i].roast);
        console.log(selectedRoast);
        if (coffees[i].roast == selectedRoast) {
            filteredCoffees.push(coffees[i]);
        }
        if(selectedRoast === "all"){
            filteredCoffees.push(coffees[i]);
        }
    }
    // console.log("filteredCoffees: ",filteredCoffees);
    // console.log('roast.value', roast.value);
    // console.log("coffees: ", coffees);
    
    coffeeContainer.innerHTML = renderCoffees(filteredCoffees);


}

const input = document.querySelector('input');
const log = document.getElementById('coffeeChoice');

input.addEventListener('input', updateValue);

function updateValue(e) {
  console.log(e.target.value);
}

