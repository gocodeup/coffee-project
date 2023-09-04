"use strict";

// puts cards on the screen
function renderCoffee(coffee) {
    var html = "<div class=\"coffee\">";
    //Adds images to coffee names
    // html += "<img src=\"" + coffee.imgSrc + "\" alt=\"" + coffee.name + "\">"
    html += "<h2>" + coffee.name + "</h2>";
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

// Updates the data when it is run through the loop

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

// array with all of the objects

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: "Light City", roast: "light", imgSrc: "img/light-roast.jpeg"},
    {id: 2, name: "Half City", roast: "light", imgSrc: "img/light-roast.jpeg"},
    {id: 3, name: "Cinnamon", roast: "light", imgSrc: "img/light-roast.jpeg"},
    {id: 4, name: "City", roast: "medium", imgSrc: "img/medium-roast.jpeg"},
    {id: 5, name: "American", roast: "medium", imgSrc: "img/medium-roast.jpeg"},
    {id: 6, name: "Breakfast", roast: "medium", imgSrc: "img/medium-roast.jpeg"},
    {id: 7, name: "High", roast: "dark", imgSrc: "img/dark-roast.jpeg"},
    {id: 8, name: "Continental", roast: "dark", imgSrc: "img/dark-roast.jpeg"},
    {id: 9, name: "New Orleans", roast: "dark", imgSrc: "img/dark-roast.jpeg"},
    {id: 10, name: "European", roast: "dark", imgSrc: "img/dark-roast.jpeg"},
    {id: 11, name: "Espresso", roast: "dark", imgSrc: "img/extra-dark.jpeg"},
    {id: 12, name: "Viennese", roast: "dark", imgSrc: "img/extra-dark.jpeg"},
    {id: 13, name: "Italian", roast: "dark", imgSrc: "img/extra-dark.jpeg"},
    {id: 14, name: "French", roast: "dark", imgSrc: "img/extra-dark.jpeg"},
];

var tbody = document.querySelector("#coffees");
var submitButton = document.querySelector("#submit");
var roastSelection = document.querySelector("#roast-selection");

tbody.innerHTML = renderCoffees(coffees);

// Event listener

submitButton.addEventListener("click", updateCoffees);
roastSelection.addEventListener(`change`, updateCoffees);

let coffeSearch = document.getElementById("coffee-name");
let matchedCoffee = "";
let filteredCoffeeNames = [];

// Displays the item that is entered in the search bar

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

// Looks at each letter being entered in the search bar and matches it with an object

function updateValue(event) {
    event.preventDefault();
    console.log(event.target.value);
    for (let i = 0; i < coffees.length; i++) {
        if (coffees[i].name.toLowerCase().includes(event.target.value.toLowerCase())) {
            filteredCoffeeNames.push(coffees[i]);
        }

    }
    tbody.innerHTML = renderCoffees(filteredCoffeeNames);
    matchedCoffee = "";
    filteredCoffeeNames = [];
}

coffeSearch.addEventListener(`input`, searchCoffee);
coffeSearch.addEventListener(`input`, updateValue);

// let card = `<div class="card f-flex flex-column justify-content-center align-items-center">
//     <div>${coffees.name}</div>
//     <div>${coffees.roast}</div>
//     <div>${coffees.imgSrc}</div>
// </div>`
//
// let allCards =[];
//
// for (let i = 0; i < coffees.length; i++) {
//     allCards.push(`<div class="d-flex flex-column justify-content-center align-items-start" style="min-width: 600px;">
//     <div>${coffees[i].name}</div>
//      <div>${coffees[i].roast}</div>
//      <div>${coffees[i].imgSrc}</div>
//  </div>`);
// }
// console.log(allCards);

