"use strict";
(function () {

// Coffee Inventory
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'Light', img: 'img/coffee_electric-unicorn.webp'},
    {id: 2, name: 'Half City', roast: 'Light', img: 'img/coffee_mint-invaders.webp'},
    {id: 3, name: 'Cinnamon', roast: 'Light', img: 'img/coffee_sinn-o-bun.webp'},
    {id: 4, name: 'City', roast: 'Medium', img: 'img/coffee_salty-siren.webp'},
    {id: 5, name: 'American', roast: 'Medium', img: 'img/coffee_dusk-donuts.webp'},
    {id: 6, name: 'Breakfast', roast: 'Medium', img: 'img/coffee_maple-bacon.webp'},
    {id: 7, name: 'High', roast: 'Dark', img: 'img/coffee_high-voltage.webp'},
    {id: 8, name: 'Continental', roast: 'Dark', img: 'img/coffee_macamaniac.webp'},
    {id: 9, name: 'New Orleans', roast: 'Dark', img: 'img/coffee_bananas-foster.webp'},
    {id: 10, name: 'European', roast: 'Dark', img: 'img/coffee_wunderbones.webp'},
    {id: 11, name: 'Espresso', roast: 'Dark', img: 'img/coffee_espresso.webp'},
    {id: 12, name: 'Viennese', roast: 'Dark', img: 'img/coffee_bluesberry.webp'},
    {id: 13, name: 'Italian', roast: 'Dark', img: 'img/coffee_holy-cannoli.webp'},
    {id: 14, name: 'French', roast: 'Dark', img: 'img/coffee_french-vanilla.webp'},
];

// Custom Coffee Functionality
let addCoffee = function (e) {
    e.preventDefault(); // doesn't submit the form, just updates the data
    coffees.push( {
        id: coffees.length + 1,
        name: customName.value,
        roast: customRoast.value,
        img: customImg(customRoast.value)
    });
    console.log(`${customName.value} has been added to the inventory.`);
    coffeeDiv.innerHTML = renderCoffees(coffees);
}

let customName = document.querySelector('#custom-name');
let customRoast = document.querySelector('#custom-roast');
let customSubmit = document.querySelector('#custom-submit');
customSubmit.addEventListener('click', addCoffee);

// Custom Coffee Placeholder Images
function customImg(input) {
    if (input === "Medium") {
        return 'img/coffee_medium.webp';
    } else if (input === "Dark") {
        return 'img/coffee_dark.webp';
    } else {
        return 'img/coffee_light.webp';
    }
}

// Populates the Coffee Selection
function renderCoffee(coffee) {
    let html = '<div class="card bg-transparent m-4 align-items-center" style="width: 18rem;">';
    html += '<img src="' + coffee.img + '" class="card-img-top align-self-center mt-2" style="width: 17rem;" alt="coffee image">'; // TODO: img for coffees obj
    html += '<div class="card-body coffees">';
    html += '<h3 class="card-title">' + coffee.name + '</h3>';
    html += '<p class="card-text">' + coffee.roast + ' Roast</p>';
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
    e.preventDefault(); // doesn't submit the form, just updates the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    if (selectedRoast === "All") {
        coffees.forEach(function(coffee){
            if (coffee.name.toLowerCase().includes(search.value.toLowerCase())) {
                filteredCoffees.push(coffee);
            }
        });
    } else if (selectedRoast !== "All") {
        coffees.forEach(function(coffee) {
            if (coffee.roast === selectedRoast) {
                if (coffee.name.toLowerCase().includes(search.value.toLowerCase())) {
                    filteredCoffees.push(coffee);
                }
            }
        });
    }

    coffeeDiv.innerHTML = renderCoffees(filteredCoffees);
}

let search = document.getElementById('search');
search.addEventListener('keyup', updateCoffees);
let roastSelection = document.querySelector('#roast-selection');
roastSelection.addEventListener('change', updateCoffees);

})();