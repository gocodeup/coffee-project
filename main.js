"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee row">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h3 class="col-3">' + coffee.name + '</h3>';
    html += '<p class="col-3">' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for (let i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if (roastSelection.value === 'All') {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

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
// reference selected roast
// reference the name they input
// add id for new coffee
// push those inputs into the array
//render array

let addNewRoast = document.getElementById('addRoastSelection');
let addCoffeeName = document.getElementById('name');
let addCoffeeButton = document.getElementById('addNew');


function addNewCoffee (input) {
    let addID = (coffees.length + 1)
    let addName = addCoffeeName.value.toString();
    let addRoast = addNewRoast.value.toString();
    input = {id: addID, name: addName, roast: addRoast};
    coffees.push(input);
    console.log(typeof coffees);
    tbody.innerHTML= renderCoffees(coffees);

    localStorage.setItem('newCoffees', JSON.stringify(coffees));
}


addCoffeeButton.addEventListener('click', addNewCoffee)



function coffeeSearch () {
    let newSearch = searchBox.value.toLowerCase();
    let filteredCoffee = [];

    coffees.forEach(function(coffee) {
        if (coffee.name.toLowerCase().includes(newSearch)) {
            filteredCoffee.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffee);
}


let tbody = document.querySelector('#coffees');
let roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

let searchBox = document.getElementById('coffeeName');
searchBox.addEventListener('keyup', coffeeSearch)

let submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', updateCoffees);