"use strict"

function renderCoffee(coffee) {
    let html = '<div class="coffee col-6 px-0">';
    html += '<h4 class="name">' + coffee.name + '</h4>';
    html += '<p class="roast">' + coffee.roast + '</p>';
    html += '</div>';
    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for(let i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let searchedCoffee = searchedCoffeeName.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast && coffee.name === searchedCoffee) {
            filteredCoffees.push(coffee);
        } else if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    div.innerHTML = renderCoffees(filteredCoffees);
}
function addCoffee(e) {
    e.preventDefault();
    coffees.push({
        id: coffees.length + 1,
        name: newCoffeeName.value ,
        roast: newRoast.value,
    })
    div.innerHTML = renderCoffees(coffees);
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

let div = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let submitButton2 = document.querySelector('#submit2')
let roastSelection = document.querySelector('#roast-selection');
let searchedCoffeeName = document.querySelector("#coffeeName");
let newCoffeeName = document.querySelector('#newCoffeeName')
let newRoast = document.querySelector('#roast')


div.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
submitButton2.addEventListener('click', addCoffee)
// roastSelection.addEventListener('input', updateCoffees);
// newCoffeeName.addEventListener('input', addCoffee)
