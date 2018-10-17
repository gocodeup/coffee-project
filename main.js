"use strict";


function renderCoffee(coffee) {
    var html = "<div id='coffee.id' class='card col-6 float-left menu-item'>";
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

function renderCoffees(coffees) {
    var html = '';
    coffees.forEach(function (coffee) {
        html += renderCoffee(coffee);
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

main.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', searchCoffees);
roastSelection.addEventListener('change', updateCoffees);
coffeeSearch.addEventListener('input', searchCoffees);
