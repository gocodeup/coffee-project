"use strict"
function addCoffees (input) {
    var addID = coffees.length+1;
    var addName = inputName.value.toString();
    var addRoast = inputRoast.value.toString();
    input = {id: addID, name: addName, roast: addRoast};
    coffees.push(input);
    console.log(coffees);
    coffeeList.innerHTML = renderCoffees(coffees);

}

console.log(addCoffees())
// displays individual coffees
function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    html += '<td>' + coffee.id + '</td>';
    html += '<td>' + coffee.name + '</td>';
    html += '<td>' + coffee.roast + '</td>';
    html += '</tr>';

    return html;
}

// displays all coffees
function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}
// "EXPORTS" DATA INTO TABLE OF HTML //
var coffeeList = document.querySelector('#coffees');
coffeeList.innerHTML = renderCoffees(coffees);

// SUBMIT SECTION //
var roastSelection = document.querySelector('#roast-selection');

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if(roastSelection.value === 'all'){
            filteredCoffees.push(coffee);
        }
    });
    coffeeList.innerHTML = renderCoffees(filteredCoffees);
}

// LIVE SEARCH FUNCTION //
function searchCoffees() {
    var searchRoast = searchBox.value.toUpperCase();
    var filteredCoffees = [];
    console.log(searchRoast);
    coffees.forEach(function(coffee) {
        if (coffee.name.toUpperCase().includes(searchRoast)) {
            filteredCoffees.push(coffee);
            console.log(filteredCoffees);
        }
    });
    coffeeList.innerHTML = renderCoffees(filteredCoffees);
}
// shows filtered coffees by input and roast
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

// tbody is the array of coffees
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
