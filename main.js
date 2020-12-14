"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<h4>' + coffee.name + '</h4>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
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
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide


var coffees2 = [
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

if(localStorage.getItem('coffees') === null){
    localStorage.setItem('coffees', JSON.stringify(coffees2))
    console.log('test');
}


let coffees = JSON.parse(localStorage.getItem("coffees"))

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

// Todo 3
// Target submit button
let searchButton = document.querySelector('#searchButton')

// Target input field value
let searchValue = document.querySelector('#search-input')

function updateSearch(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var searchTerm = searchValue.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.name.includes(searchTerm)) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
// Make new function that is similar to update, but with new parameters

searchButton.addEventListener('click', updateSearch)

// TODO 4
// add event listener to the keystrokes input

function updateKey() {

    var searchTerm = searchValue.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.name.includes(searchTerm)) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

searchValue.addEventListener('keyup', updateKey)


function updateOption() {

    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

roastSelection.addEventListener('change', updateOption)

// localStorage.setItem('coffees', coffees)

// BONUS
let newButton = document.querySelector("#newButton")

let newCoffee = (e) => {
    e.preventDefault()
    let name = document.getElementById('coffee')
    let roast = document.getElementById('roast')
    let newCoffee = {
        id: coffees.length + 1,
        name: name.value,
        roast: roast.value
    }
    console.log(newCoffee)
    coffees.push(newCoffee)

    localStorage.setItem('coffees', JSON.stringify(coffees))

    tbody.innerHTML = renderCoffees(coffees);
}

newButton.addEventListener('click', newCoffee)