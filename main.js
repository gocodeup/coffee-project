"use strict";

// ===== COFFEE SELECTOR FORM =====
// Catcher for submission
var coffeeSubmission;

function renderCoffee(coffee) {
    var html = "<div id=\"" + coffee.id + "\" " + "class =\"coffee\">";
    html += "<h3>" + coffee.name + "</h3>";
    html += "<p>" + coffee.roast + "</p>";
    html += "</div>";

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for (var i = 0; i < coffees.length; i++) {

        html += renderCoffee(coffees[i]);
    }
    return html;
}

function disableCoffeeSearch(x) {
    if (x === "--- Select Roast ---") {
        enteredCoffee.disabled = true;
    } else {
        enteredCoffee.disabled = false;
    }
}

function disableNewCoffeeName(x) {
    if (x === "--- Select Roast ---") {
        newEnteredCoffee.disabled = true;
    } else {
        newEnteredCoffee.disabled = false;
    }
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    console.log(coffeeSubmission);
}

// Separate function to be called specifically for roast selector
var dynamicSelection = function (roastChanged) {
    var dynamicRoast = roastSelection.value;
    var filteredCoffees = [];
    var searchCoffee = (document.getElementById("coffeeEntered").value).toLowerCase();
    var userSearch = new RegExp(searchCoffee, 'gi');
    if (enteredCoffee.value === "") {
        disableCoffeeSearch(dynamicRoast);
        if (dynamicRoast === "all" || dynamicRoast === "--- Select Roast ---") {
            coffeeSubmission = coffees;
            section.innerHTML = renderCoffees(coffees);
        } else {
            coffees.forEach(function (coffee) {
                if (coffee.roast === dynamicRoast) {
                    filteredCoffees.push(coffee);
                }
            });
            coffeeSubmission = filteredCoffees;
            section.innerHTML = renderCoffees(filteredCoffees);
        }
    } else if (dynamicRoast === "all" || dynamicRoast === "--- Select Roast ---") {
        disableCoffeeSearch(dynamicRoast);
        coffees.forEach(function (coffee) {
            if (coffee.name.match(userSearch)) {
                filteredCoffees.push(coffee);
            }
        });
        coffeeSubmission = filteredCoffees;
        section.innerHTML = renderCoffees(filteredCoffees);
    } else {
        coffees.forEach(function (coffee) {
            if (coffee.roast === dynamicRoast && coffee.name.match(userSearch)) {
                filteredCoffees.push(coffee);
            }
        });
        coffeeSubmission = filteredCoffees;
        section.innerHTML = renderCoffees(filteredCoffees);
    }
};

var dynamicCoffeeSearch = function (enteredCoffee) {
    var dynamicRoast = roastSelection.value;
    var filteredCoffees = [];
    var searchCoffee = (document.getElementById("coffeeEntered").value).toLowerCase();
    var userSearch = new RegExp(searchCoffee, 'gi');
    coffees.forEach(function (coffee) {
        if (dynamicRoast === "all" && coffee.name.match(userSearch)) {
            filteredCoffees.push(coffee);
        } else if (coffee.roast === dynamicRoast && coffee.name.match(userSearch)) {
            filteredCoffees.push(coffee)
        }
    });
    coffeeSubmission = filteredCoffees;
    section.innerHTML = renderCoffees(filteredCoffees);
};

// ===== CREATE NEW COFFEE FORM =====
function submitNewCoffee(e) {
    // ASK ABOUT INTERNAL STORAGE USING JSON
    e.preventDefault(); // don't submit the form, we just want to update the data
    if (newRoastSelection.value === "--- Select Roast ---") {
        alert("Please select a roast");
    } else if (newEnteredCoffee.value === "") {
        alert("Please enter a name");
    } else {
        coffeeSubmission.push({
            id: coffees.length + 1,
            name: newEnteredCoffee.value,
            roast: newRoastSelection.value
        });
        newRoastSelection.selectedIndex = "0";
        newEnteredCoffee.value = "";
        disableNewCoffeeName(newRoastSelection.value);
        updateCoffees(e);
        section.innerHTML = renderCoffees(coffeeSubmission);
    }
    console.log(coffees.length);
}

var newCoffeeRoast = function (roast) {
    disableNewCoffeeName(newRoastSelection.value);
};

// var newCoffeeName = function (name) {
//
// };

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

// QUERY SELECTORS
var section = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var enteredCoffee = document.querySelector('#coffeeEntered');
var newCoffeeSubmit = document.querySelector('#new-coffee-submit');
var newRoastSelection = document.querySelector('#new-roast-selection');
var newEnteredCoffee = document.querySelector('#new-coffee-name');

// Display coffee selection on launch
section.innerHTML = renderCoffees(coffees);
// Initialize variable
coffeeSubmission = coffees;
// Set inputs to disabled on launch
enteredCoffee.disabled = true;
newEnteredCoffee.disabled = true;

// Event listeners
submitButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener('change', dynamicSelection);
enteredCoffee.addEventListener('input', dynamicCoffeeSearch);
newCoffeeSubmit.addEventListener('click', submitNewCoffee);
newRoastSelection.addEventListener('change', newCoffeeRoast);
// newEnteredCoffee.addEventListener('input', newCoffeeName);
