"use strict";

let body = document.querySelector('#coffees');
let coffeeSelection = document.querySelector('#coffee-selection');
let roastSelection = document.querySelector('#roast-selection');

let newRoast = document.querySelector('#add-roast');
let newCoffee = document.querySelector('#add-coffee');
let submitted = document.querySelector('#submit');

function renderCoffee(coffee) {
    let html = `
        <div class="coffee-card">
            <div class="coffee-name">${coffee.name}</div>
            <div class="roast">${coffee.roast}</div>
        </div>
    `;

    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for(let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateRoasts(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    if (selectedRoast === 'all') {
        filteredCoffees = coffees;
    } else {
        filteredCoffees = coffees.filter(coffee => coffee.roast === selectedRoast);
    }
    body.innerHTML = renderCoffees(filteredCoffees);
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let searchInput = coffeeSelection.value;
    let filteredCoffees = [];
    coffees.forEach(coffee => {
       if (coffee.name.toLowerCase().includes(searchInput)){
           filteredCoffees.push(coffee);
       }
    });
    body.innerHTML = renderCoffees(filteredCoffees);
}

function addCoffee() {
    // let newRoast = newRoast.value
    // let newCoffee = newCoffee.value
    let addedCoffee = { id: coffees.length + 1 , name: newCoffee.value, roast: newRoast.value }
    console.log(newCoffee.value);
    if ( newCoffee.value === ""){
        alert(`Please add the coffee before submitting`)
    } else {
        coffees.push(addedCoffee);
        newCoffee.value = "";
        console.log(`New Coffee Added`);
        const newCoffeeHTML = renderCoffees(coffees);
        body.innerHTML = newCoffeeHTML;
    }

}

//coffees.id = coffees.length + 1
//coffees.name = searchinput
//coffees.rost =

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
].reverse();


body.innerHTML = renderCoffees(coffees);

submitted.addEventListener('click', addCoffee )
coffeeSelection.addEventListener('input', updateCoffees)
roastSelection.addEventListener('change', updateRoasts)
