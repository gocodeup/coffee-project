"use strict";

function renderCoffee(coffee) {

    var html =  "<div class='coffeelist'>" + "<h3>" + coffee.name + "</h3>" + "<p>" + coffee.roast + "</p>" + "</div>";

    return html;
}

function renderCoffees(coffees) {
    var html = '';

    for(var i = 0 ; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees() {
    var coffeeName = document.getElementById("coffeename").value;
    var selectedRoast = document.querySelector('#roast-selection').value;
    var filteredCoffees = [];

    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if (selectedRoast === "all") {
            filteredCoffees.push(coffee);
        }
    });

    var displayedCoffees = filteredCoffees.filter(function (coffee) {
        return coffee.name.toLowerCase().includes(coffeeName);
    });

    tbody.innerHTML = renderCoffees(displayedCoffees);
}

function addCoffee(e) {
    e.preventDefault();
    var newCoffee = document.getElementById("add-coffee").value;
    var selectedRoast = document.querySelector('#new-roast-selection').value;
    if (newCoffee === "") {
        alert("Please type a coffee name");
    } else {
        coffees.push({
            id: coffees.length + 1,
            name: newCoffee,
            roast: selectedRoast
        });
        updateCoffees();
    }
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
    {id: 14, name: 'French', roast: 'dark'}
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', addCoffee);

// localStorage.setItem("addCoffee", coffees.push());
//
// document.getElementById("result").innerHTML =
//     localStorage.getItem('addCoffee');