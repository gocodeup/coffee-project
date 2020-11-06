"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (selectedRoast === "All Roasts"){
            filteredCoffees.push(coffee)
        }
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function updateCoffeesNew() {
    var selectedCoffee = input.value.toUpperCase();
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.name.toUpperCase() === selectedCoffee) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function updateCoffeesKey() {
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        var selectedCoffee = input.value.toLowerCase();
        var lower = coffee.name.toLowerCase();
        var coffeeArray = lower.split("")
        var newCoffeeArr = [];
        for ( var j = 0; j < selectedCoffee.length; j++){
            newCoffeeArr.push(coffeeArray[j])
            var coffeeStr = newCoffeeArr.join("")
            if (coffeeStr === selectedCoffee){
                filteredCoffees.push(coffee)
            }
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

document.getElementById("add").onclick  = function() {

    var node = document.createElement("Li");
    var text = document.getElementById("user-input").value;
    var textnode = document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
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

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var input = document.querySelector('#user_coffee');
var inputButton = document.querySelector('#search');


tbody.innerHTML = renderCoffees(coffees);

inputButton.addEventListener('click', updateCoffeesNew)
submitButton.addEventListener('click', updateCoffees);
input.addEventListener('input', updateCoffeesKey)


