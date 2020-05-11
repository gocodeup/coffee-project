"use strict"

//NEW RENDER COFFEE
function renderCoffee(coffee) {
    var html = '<div class="coffee" style="display:flex;">';
    html += '<h1 class="coffee-title" style="display: flex;">' + coffee.name + '</h1>';
    html += '<p style="color: #B2B2B2; padding-bottom: 11px; padding-left: 10px; display:flex; align-items: flex-end;">' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    console.log(e);
    e.preventDefault(); // don't submit the form, we just want to update the data
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        var selectedRoast = roastSelection.value;
        var selectedName = nameSelection.value.toUpperCase();
        var coffeeName = coffee.name.toUpperCase();
        if(selectedRoast === "all")
            selectedRoast = coffee.roast;

        if(selectedName.length < 1) {
            selectedName = coffeeName;
        }

        if (coffee.roast === selectedRoast && coffeeName.indexOf(selectedName) != -1) {
            filteredCoffees.push(coffee);
        }
    });
    coffeeDiv.innerHTML = renderCoffees(filteredCoffees);
}

function addCoffee(e){
    e.preventDefault();
    var addedRoast = roastAddition.value;
    var addedCoffee = nameAddition.value.toLowerCase();

    addedCoffee = addedCoffee.split(" ");

    addedCoffee.forEach(function(group, ind) {
        addedCoffee[ind] = group.replace(group.substring(0, 1), group.substring(0, 1).toUpperCase());

    });
    addedCoffee = addedCoffee.join(" ");

    var coffeeObject = {id: coffees.length + 1, name: addedCoffee, roast: addedRoast};
    coffees.push(coffeeObject);
    coffeeDiv.innerHTML = renderCoffees(coffees);
    roastSelection.value = defaultRoast.value;
    nameSelection.value = "";
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

var coffeeDiv = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var nameSelection = document.querySelector('#coffeeSearch');
var addButton = document.querySelector('#add-btn');
var roastAddition = document.querySelector('#roast-addition');
var nameAddition = document.querySelector('#coffee-addition');
var defaultRoast = document.querySelector("#default-option");

coffeeDiv.innerHTML = renderCoffees(coffees);

addButton.addEventListener('click', addCoffee);
submitButton.addEventListener('click', updateCoffees);
