"use strict"
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

let displayedCoffee = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');
let coffeeNameInput = document.querySelector('#coffee-input');



function renderCoffeeDiv(coffee) {
    let html = '<div class="coffee">';
    html += '<div class="coffee-id" style="visibility: hidden">' + coffee.id + '</div>';
    html += '<div class="coffee-name">' + coffee.name + '</div>';
    html += '<div class="coffee-roast">' + coffee.roast + '</div>';
    html += '</div>';

    return html;
}

// coffee (variable) is actually each individual coffee from the array of objects
// its basically coffees[i]

function renderAllCoffeesList(coffees) {
    let html = '';
    for(let i = 0; i < coffees.length; i++) {
        html += renderCoffeeDiv(coffees[i]);
    }
    return html;
}

//todo make sure it checks for all letters

function checkCoffeeName () {
    let search = coffeeNameInput.value;
    for(let i = 0; i < coffees.length; i++) {
        // console.log(coffees[i].name);
        if ((coffees[i].name.toLowerCase()).includes(search)) {
            console.log(coffees[i])
            return coffees[i]
        }
    }
}


function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
            return displayedCoffee.innerHTML = renderAllCoffeesList(filteredCoffees);
        } else if (selectedRoast === 'all') {
            filteredCoffees.push(coffee)
            return displayedCoffee.innerHTML = renderAllCoffeesList(filteredCoffees)
        }
    });
}
displayedCoffee.innerHTML = renderAllCoffeesList(coffees);

submitButton.addEventListener('click', updateCoffees);

coffeeNameInput.addEventListener("keyup", (e) => checkCoffeeName());

