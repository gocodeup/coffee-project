"use strict"

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
//our coffee samples
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

// stores location for coffee view and produces the initial coffee view
const coffeeView = document.querySelector('#coffees');
coffeeView.innerHTML = renderCoffees(coffees);

// stores the location for coffee search input and for the roast selection
const coffeeSearch = document.querySelector('#coffeeName');
const roastSelection = document.querySelector('#roast-selection');

//sets event listener that calls updateCoffee function whenever a person inputs values in the search bar or selects a roast type
//called function will return a filtered list to the html
coffeeSearch.addEventListener('input', updateCoffees);
roastSelection.addEventListener('input', updateCoffees);

//stores the location for added coffee section and roast to add
//sets event listener that calls add coffee whenever the submit button is pressed
//called function adds the coffee to the coffee view
const roastAdd = document.querySelector("#roastAdd");
const coffeeAdd = document.querySelector('#coffeeAdd');
coffeeAdd.addEventListener('submit', addCoffee);
roastAdd.addEventListener('submit', addCoffee);

// creates a html string for a single coffee
function renderCoffee(coffee) {
    let html = `
    <div class="coffee">
     <div>${coffee.name}</div>
     <div>${coffee.roast}</div>
    </div>`;

    return html;
}

// connects the single coffee html into  one string
function renderCoffees(coffees) {
    let html = '';
    for(let i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

//updates coffee view to show filtered coffees from search and selected roast
function updateCoffees(event) {
    event.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let searchCoffee = coffeeSearch.value;
    let filteredCoffees = [];

    if(selectedRoast === "all"){
        coffees.forEach(function(coffee) {
            if (coffee.name.toLowerCase().includes(searchCoffee.toLowerCase())) {
                filteredCoffees.push(coffee);
            }
        });
    }
    else {
        coffees.forEach(function(coffee) {
            if (coffee.roast === selectedRoast && coffee.name.toLowerCase().includes(searchCoffee.toLowerCase())) {
                filteredCoffees.push(coffee);
            }
        });
    }

    coffeeView.innerHTML = renderCoffees(filteredCoffees);
}

function addCoffee(event){
    let roastName = roastAdd.value;
    let coffeeName = coffeeAdd.value;
    let newCoffee = {
        id: coffees.length + 1,
        name: coffeeName,
        roast: roastName
    }
    coffees.push(newCoffee);
}

