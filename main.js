"use strict";

function renderCoffee(coffee) {
    var html = "<div class=\"coffee\">";
    // html += '<div>' + coffee.id + '</div>';
    html += "<h1>" + coffee.name + "</h1>";
    html += "<p>" + coffee.roast + "</p>";
    html += "</div>";

    return html;
}

function renderCoffees(coffees) {
    var html = "";
    for (var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees.sort()[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if (selectedRoast === "all") {
            tbody.innerHTML = renderCoffees(coffees);
        } else if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
            tbody.innerHTML = renderCoffees(filteredCoffees);
        }
    });
}


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: "Light City", roast: "light"},
    {id: 2, name: "Half City", roast: "light"},
    {id: 3, name: "Cinnamon", roast: "light"},
    {id: 4, name: "City", roast: "medium"},
    {id: 5, name: "American", roast: "medium"},
    {id: 6, name: "Breakfast", roast: "medium"},
    {id: 7, name: "High", roast: "dark"},
    {id: 8, name: "Continental", roast: "dark"},
    {id: 9, name: "New Orleans", roast: "dark"},
    {id: 10, name: "European", roast: "dark"},
    {id: 11, name: "Espresso", roast: "dark"},
    {id: 12, name: "Viennese", roast: "dark"},
    {id: 13, name: "Italian", roast: "dark"},
    {id: 14, name: "French", roast: "dark"},
];

var tbody = document.querySelector("#coffees");
var submitButton = document.querySelector("#submit");
var roastSelection = document.querySelector("#roast-selection");

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener("click", updateCoffees);
roastSelection.addEventListener(`change`, updateCoffees);

let coffeSearch = document.getElementById("coffee-name");

function searchCoffee(event) {
    event.preventDefault(); // don't submit the form, we just want to update the data
    var searchName = coffeSearch.value;
    var filteredSearchCoffees = [];

    coffees.forEach(function (coffee) {
        if (coffee.name === searchName) {
            filteredSearchCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredSearchCoffees);
}

function updateValue(event) {
    event.preventDefault();
    var roastName = coffeSearch.value;
    // var filteredCoffeeNames = [];
    for (let i = 0; i < coffees.length; i++) {
        if (roastName.includes(coffees[i].name[i])) {
            renderCoffees(coffees);
        }
    }
}


coffeSearch.addEventListener(`input`, searchCoffee);
coffeSearch.addEventListener(`input`, updateValue);

