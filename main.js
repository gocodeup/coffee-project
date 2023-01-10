"use strict"

function renderCoffeeDiv(coffee) {
    let html = '<div class="coffee">';
    html += '<h1 class="d-inline-block px-2">' + coffee.name + '</h1>';
    html += '<p class="text-secondary d-inline-block">' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(arr) {
    let html = '';
    for(let i = 0; i < arr.length; i++) {
        html += renderCoffeeDiv(arr[i]);
    }
    return html;
}

function searchCoffees(string) {
    let arr = [];
    for (const coffee of coffees) {
        if (coffee.name.toLowerCase().includes(string.toLowerCase()) || coffee.roast.includes(string.toLowerCase())) {
            arr.push(coffee);
        }
    }
    return arr;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
const coffees = [
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

const tbody = document.querySelector('#coffees');
const submitButton = document.querySelector('#submit-search');
const coffeeSearch = document.querySelector("#coffee-search");
const roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', ()=> {
    tbody.innerHTML = renderCoffees(searchCoffees(coffeeSearch.value));
});

coffeeSearch.addEventListener("keydown", () => {
    tbody.innerHTML = renderCoffees(searchCoffees(coffeeSearch.value));
})

roastSelection.addEventListener('click', (event) => {

})