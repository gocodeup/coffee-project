"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee col-12 col-sm-6 col-md-4 col-lg-2"><div class = "card" style="width: 18rem"><div class = "card-body">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h5 class = "card-title">' + coffee.name + '</h5>';
    html += '<p class = "card-text">' + coffee.roast + '</p>';
    html += ' <a href="#" class="btn btn-light">Order Now!</a>'
    html += '</div></div></div>';

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

function addCoffees() {
    var newCoffee = {};
    var coffeeName = userCoffee.value;
    var nameArr = coffeeName.split("");
    nameArr[0] = nameArr[0].toUpperCase();
    var newName = nameArr.join("");
    newCoffee.name = newName;
    newCoffee.roast = userRoast.value;
    newCoffee.id =coffees.length+1;
    coffees.push(newCoffee)
    tbody.innerHTML = renderCoffees(coffees);
}

// document.getElementById("add").onclick  = function() {
//
//     var node = document.createElement("Li");
//     var text = document.getElementById("user-input").value;
//     var textnode = document.createTextNode(text);
//     node.appendChild(textnode);
//     document.getElementById("list").appendChild(node);
// }

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
var submitButton = document.querySelector('#roast-selection');
var roastSelection = document.querySelector('#roast-selection');
var input = document.querySelector('#user_coffee');
var inputButton = document.querySelector('#search');
var addToList = document.querySelector( "#add")
var userCoffee = document.querySelector('#user_create')
var userRoast = document.querySelector('#roast-creation')

tbody.innerHTML = renderCoffees(coffees);

inputButton.addEventListener('click', updateCoffeesNew)
submitButton.addEventListener('input', updateCoffees);
input.addEventListener('input', updateCoffeesKey)
addToList.addEventListener('click', addCoffees)


