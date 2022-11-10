"use strict"

// Coffee Inventory
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light', img: 'img/coffee_electric-unicorn.webp'},
    {id: 2, name: 'Half City', roast: 'light', img: 'img/coffee_mint-invaders.webp'},
    {id: 3, name: 'Cinnamon', roast: 'light', img: 'img/coffee_sinn-o-bun.webp'},
    {id: 4, name: 'City', roast: 'medium', img: 'img/coffee_salty-siren.webp'},
    {id: 5, name: 'American', roast: 'medium', img: 'img/coffee_dusk-donuts.webp'},
    {id: 6, name: 'Breakfast', roast: 'medium', img: 'img/coffee_maple-bacon.webp'},
    {id: 7, name: 'High', roast: 'dark', img: 'img/coffee_high-voltage.webp'},
    {id: 8, name: 'Continental', roast: 'dark', img: 'img/coffee_macamaniac.webp'},
    {id: 9, name: 'New Orleans', roast: 'dark', img: 'img/coffee_bananas-foster.webp'},
    {id: 10, name: 'European', roast: 'dark', img: 'img/coffee_wunderbones.webp'},
    {id: 11, name: 'Espresso', roast: 'dark', img: 'img/coffee_espresso.webp'},
    {id: 12, name: 'Viennese', roast: 'dark', img: 'img/coffee_bluesberry.webp'},
    {id: 13, name: 'Italian', roast: 'dark', img: 'img/coffee_holy-cannoli.webp'},
    {id: 14, name: 'French', roast: 'dark', img: 'img/coffee_french-vanilla.webp'},
];

// Custom Coffee Functionality
let addCoffee = function (e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    coffees.push( {
        id: coffees.length + 1,
        name: customName.value,
        roast: customRoast.value
    });
    console.log(`${customName.value} has been added to the inventory.`);
    coffeeDiv.innerHTML = renderCoffees(coffees);
}

let customName = document.querySelector('#custom-name');
let customRoast = document.querySelector('#custom-roast');
let customSubmit = document.querySelector('#custom-submit');
customSubmit.addEventListener('click', addCoffee);

// Populates the Coffee Selection
// function renderCoffee(coffee) {
//     let html = '<div class="coffees">';
//     // html += '<td>' + coffee.id + '</td>';
//     html += '<h3>' + coffee.name + '</h3>';
//     html += '<p>' + coffee.roast + '</p>';
//     html += '</div>';
//
//     return html;
// }
function renderCoffee(coffee) {
    let html = '<div class="card bg-transparent m-4 align-items-center" style="width: 18rem;">';
    html += '<img src="' + coffee.img + '" class="card-img-top" alt="coffee image">'; // TODO: img for coffees obj
    html += '<div class="card-body coffees">';
    html += '<h3 class="card-title">' + coffee.name + '</h3>';
    html += '<p class="card-text">' + coffee.roast + '</p>';
    html += '</div>';
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

let coffeeDiv = document.querySelector('#coffees');
coffeeDiv.innerHTML = renderCoffees(coffees);

// Updates the Coffee by Roast
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    coffeeDiv.innerHTML = renderCoffees(filteredCoffees);
}

let roastSelection = document.querySelector('#roast-selection');
let submitButton = document.querySelector('#roast-submit');
submitButton.addEventListener('click', updateCoffees);

// Search Bar Functionality
let searchCoffee = function () {
    let filteredCoffees = [];
    for (let i = 0; i < coffees.length; i++) {
        if (coffees[i].name.toLowerCase().includes(search.value.toLowerCase())) {
            filteredCoffees.push(coffees[i]);
        }
    }
    coffeeDiv.innerHTML = renderCoffees(filteredCoffees);
}

let search = document.getElementById('search');
search.addEventListener('keyup', searchCoffee);