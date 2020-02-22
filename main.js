"use strict";

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<>' + coffee.id + '</>';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div';
    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for (var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if (selectedRoast === "all") {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function searchCoffee(string) {
    string.preventDefault();
    var typeCoffee = searchString.value;
    var coffeeEntered = [];
    coffees.forEach(function (coffee) {
        if (coffee.name.toLowerCase() === typeCoffee.toLowerCase()) {
            coffeeEntered.push(coffee)
        }
    });
    tbody.innerHTML = renderCoffees(coffeeEntered);
}

function activeSearch(string) {
    string.preventDefault();
    var filter = searchString.value.toLowerCase();
    var bucket = [];
    coffees.forEach(function (letter) {
        if (letter.name.toLowerCase().indexOf(filter) > -1) {
            bucket.push(letter);
        }

    });
    tbody.innerHTML = renderCoffees(bucket);
}

function addNewCoffee(input) {
    input.preventDefault();
    var newCoffeeEntered = addCoffee.value;
    var roastSelected = selectRoast.value;
    var newObj = {
        id: 15,
        name: newCoffeeEntered,
        roast: roastSelected
    };

    if (submitCoffee) {
        coffees.push(newObj);
    }
    tbody.innerHTML = renderCoffees(coffees);
    localStorage.setItem('StoreObj', JSON.stringify(newObj));
    // window.localStorage.setItem("newObj", );
}

// from http://www.ncausaz.org/About-Coffee/Coffee-Roasts-Guide
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
// var submitButton = document.querySelector('#droast');
var roastSelection = document.querySelector('#roast-selection');
var searchString = document.querySelector("#search-box");
var searchEntry = document.querySelector("#search-submit");
var addCoffee = document.querySelector('#addCofBox');
var selectRoast = document.querySelector("#roastSelectAdd");
var submitCoffee = document.querySelector("#addCof");

tbody.innerHTML = renderCoffees(coffees);

roastSelection.addEventListener('input', updateCoffees);

searchString.addEventListener('input', searchCoffee);

searchString.addEventListener('input', activeSearch);

submitCoffee.addEventListener('click', addNewCoffee);





