"use strict"

function renderCoffee(coffee) {
    // Refactored the code to use bootstrap and divs instead of Tables
    var html = '<div class="col-6 m-0">';

    html += '<span class="font-weight-bold text-capitalize">' + coffee.name + " " + '</span>';
    html += '<span class="font-weight-bold text-capitalize text-black-50">' + coffee.roast + '</span>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {

    var html = '';
    html = '<div class = "row">';

    // Original code loops the coffees going backwards thru the array
    // for(var i = coffees.length - 1; i >= 0; i--) {

    // Refactored the code to loop thru the array starting from the beginning of the array

    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    html += '</div>';
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }else if(roastSelection.value === 'all'){
            filteredCoffees.push(coffee);
        }
    });
    div.innerHTML = renderCoffees(filteredCoffees);
}
// Refactored the code from updateCoffees to show the filtered Coffees list according to the value of the Input with the ID of coffee-name
function searchCoffees(e){
    e.preventDefault(); // don't submit the form, we just want to update the data'
    var coffeeName = coffeeNameSelection.value.toLowerCase();
    console.log(coffeeName);
    var filteredCoffees = [];
    coffees.forEach(function(coffee){
        if (coffee.name.toLowerCase().includes(coffeeName)){
            filteredCoffees.push(coffee);
        }
    });
    div.innerHTML = renderCoffees(filteredCoffees)
}

var newCoffeeName = document.querySelector('#new-coffee-name');
var newCoffeeRoast = document.querySelector('#new-coffee-roast');
var submitNewCoffeeButton = document.querySelector('#submit-new-coffee');
//Add functionality to add new coffee to array.
submitNewCoffeeButton.addEventListener('click', addNewCoffee);

function addNewCoffee(obj){
    let coffeeID = coffees.length+1;
    let newNameOfCoffee = newCoffeeName.value.toLowerCase().toString();
    let newCoffeeType = newCoffeeRoast.value.toString();
    obj  = {
        id: coffeeID,
        name: newNameOfCoffee,
        roast: newCoffeeType
    }
    console.log(obj);
    coffees.push(obj);
    console.log(coffees);
    div.innerHTML = renderCoffees(coffees);
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

var div = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var coffeeNameSelection = document.querySelector('#coffee-name');

div.innerHTML = renderCoffees(coffees);

// Add functionality to update the displayed coffee according to the values typed into the Input field

coffeeNameSelection.addEventListener('input', searchCoffees)

submitButton.addEventListener('click', updateCoffees);

//Add functionality to update the displayed coffee as soon as they select an option from the select.
roastSelection.addEventListener('change', updateCoffees);

