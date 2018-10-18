"use strict";


function renderCoffee(coffee) {
    var html = "<div id='coffee.id' class='card col-6 bg-light float-left'>";
    if (coffee.roast === "Light"){
        html += "<span class='light'>" + coffee.name + "</span>" + " ";
    } else if (coffee.roast === "Medium"){
        html += "<span class='medium'>" + coffee.name + "</span>" + " ";
    } else {
        html += "<span class='dark'>" + coffee.name + "</span>" + " ";
    }
    html += "<span class='roast-type'>" + coffee.roast + "</span>";
    html += "</div>";

    return html;
}

function renderCoffeeSelect(coffee) {
    var html = "<option value='coffee.id'>";
    html += "" + coffee.name;
    html += "</option>";

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    coffees.forEach(function (coffee) {
        html += renderCoffee(coffee);
    });

    return html;
}

function renderCoffeesForSelect(coffees) {
    var html = '';
    coffees.forEach(function (coffee) {
        html += renderCoffeeSelect(coffee);
    });

    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if (selectedRoast === "Show All") {
            filteredCoffees = coffees;
        }
    });
    main.innerHTML = renderCoffees(filteredCoffees);
}

function searchCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedCoffee = coffeeSearch.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if ((coffee.name.toLowerCase()).includes(selectedCoffee.toLowerCase()) === true) {
            filteredCoffees.push(coffee);
        } else if (selectedCoffee === "") {
            filteredCoffees = coffees;
        }
    });
    main.innerHTML = renderCoffees(filteredCoffees);
}
function addNewCoffee (e) {
    e.preventDefault();
    var newCoffee = {};
    for (var i = 0; i < coffees.length; i++) {
        if (coffees[i].name === newCoffeeName.value && coffees[i].roast === newCoffeeRoast.value) {
            return "Not today, Satan...";
        }
    }
    if (newCoffeeName.value === "") {
        return "how could you...";
    } else {
        newCoffee.name = newCoffeeName.value;
        newCoffee.roast = newCoffeeRoast.value;
        newCoffee.id = coffees.length + 1;
        coffees.push(newCoffee);
        main.innerHTML = renderCoffees(coffees);
        return selectionOrder.innerHTML = renderCoffeesForSelect(coffees);
    }
}
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'Light'},
    {id: 2, name: 'Half City', roast: 'Light'},
    {id: 3, name: 'Cinnamon', roast: 'Light'},
    {id: 4, name: 'City', roast: 'Medium'},
    {id: 5, name: 'American', roast: 'Medium'},
    {id: 6, name: 'Breakfast', roast: 'Medium'},
    {id: 7, name: 'High', roast: 'Dark'},
    {id: 8, name: 'Continental', roast: 'Dark'},
    {id: 9, name: 'New Orleans', roast: 'Dark'},
    {id: 10, name: 'European', roast: 'Dark'},
    {id: 11, name: 'Espresso', roast: 'Dark'},
    {id: 12, name: 'Viennese', roast: 'Dark'},
    {id: 13, name: 'Italian', roast: 'Dark'},
    {id: 14, name: 'French', roast: 'Dark'}
];

var main = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var coffeeSearch = document.querySelector('#search');
var newCoffeeName = document.querySelector('#suggestion-name');
var newCoffeeRoast = document.querySelector('#roast-suggestion');
var addCoffee = document.querySelector('#newSuggestion');
var selectionOrder = document.querySelector("#coffee-order");


submitButton.addEventListener('click', searchCoffees);
roastSelection.addEventListener('change', updateCoffees);
coffeeSearch.addEventListener('input', searchCoffees);
addCoffee.addEventListener('click', addNewCoffee);

main.innerHTML = renderCoffees(coffees);
selectionOrder.innerHTML = renderCoffeesForSelect(coffees);