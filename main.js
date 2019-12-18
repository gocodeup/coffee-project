"use strict"
// dynamically creating HTML for coffees on left side
function renderCoffee(coffee) {
    let html = '<div class="coffee">';
    // html +=  coffee.id;
    html += '<div>' + '<span class="coffeeName">' + coffee.name + '<span class="text-muted coffeeRoast">' + coffee.roast + '</span>' + '</div>';
    html += '</div>';

    return html;
}

// filters through coffees array list then puts them through the renderCoffee function
function renderCoffees(coffees) {
    let html = '';
    for (let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

//logic should be similar to the below function on how to filter through coffees as typing in the input
//to add a new coffee
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    let searchCoffee = document.getElementById('search-coffee').value;
    console.log(selectedRoast);
    if (selectedRoast === "all") {
        coffees.forEach(function (coffee) {
            if (coffee.name.toLowerCase().includes(searchCoffee.toLowerCase())) {

                filteredCoffees.push(coffee);
            }
        });

    } else {
        console.log('here 2');
        coffees.forEach(function (coffee) {

            if (coffee.roast === selectedRoast && coffee.name.toLowerCase().includes(searchCoffee.toLowerCase())) {
                filteredCoffees.push(coffee);
            }
        });
    }

    tbody.innerHTML = renderCoffees(filteredCoffees);
    console.log(searchCoffee);
}

function addCoffee (e) {
    e.preventDefault();
    coffees.push({
        name: addedName.value,
        roast: addedRoast.value
    });
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        filteredCoffees.push(coffee)
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
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
coffees.reverse();

let addedName = document.getElementById('input-name');
let tbody = document.querySelector('#coffees');
let addedRoast = document.getElementById('input-roast');
let submitButton = document.querySelector('#submit1');
let submitNew = document.querySelector('#submit2');
let roastSelection = document.getElementById('roast-selection');
let searchCoffee = document.getElementById('search-coffee');


tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
submitNew.addEventListener('click', addCoffee);
roastSelection.addEventListener('change', updateCoffees);
searchCoffee.addEventListener('input', updateCoffees);

