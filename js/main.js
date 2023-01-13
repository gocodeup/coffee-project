
(function () {

"use strict"

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

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var addButton = document.querySelector('#addButton');
var roastSelection = document.querySelector('#roast-selection');
var searchBar = document.querySelector('#coffeeSearch');

//---- Initial Page Load-----
tbody.innerHTML = renderCoffees(coffees);



// -- Table Render-----
function renderCoffee(coffee) {
    var html = '<div class="coffee row outline">';
    html += '<div class="col-6 name">' + coffee.name + '</div>';
    html += '<div class="col-6 roast">' + coffee.roast + '</div>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i =  0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

// -----Add coffee function below------
function addCoffee() {

    var coffeeName = document.querySelector("#add-coffee-name").value;
    var coffeeRoast = document.querySelector("#add-roast-selection").value;
    var newCoffee = {id: coffees.length + 1, name: coffeeName, roast: coffeeRoast};
    coffees.push(newCoffee);
    tbody.innerHTML = renderCoffees(coffees);
    console.log(coffeeName)
}

addButton.addEventListener('click', addCoffee);


// ----Coffee Search Function-----
function searchCoffee() {
    var searchInput = searchBar.value.toLowerCase()
    console.log(searchInput)
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.name.toLowerCase().includes(searchInput)){
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

searchBar.addEventListener('keyup', searchCoffee);

// Drop Down Sort List Function
function updateCoffees(e) {
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if (selectedRoast === 'all'){
            filteredCoffees.push(coffee)
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

roastSelection.addEventListener('mouseout' , updateCoffees);


})();