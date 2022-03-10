//pull the lever Kronk!
"use strict"


//Complete
function renderCoffee(coffee){
    var html = '<div class="coffee col-6">';
    html += '<div class="coffee-list">' + '<h3>' + coffee.name + '</h3>' + " " + '<p>' + coffee.roast + ' <i class="icon fas fa-coffee">' + '</i>' +
        '</p>' + '</div>';
    html += '</div>'
    return html;
}
// Complete
function renderCoffees(coffees) {
    var html = '';
    // console.log(coffees)
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}
//Complete
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    if (roastSelection.value === 'all'){
        filteredCoffees = coffees;
    } else {
        coffees.forEach(function (coffee){
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }
        });
    } divBody.innerHTML = renderCoffees(filteredCoffees);
}

function updateCoffeeInput(e) {
    e.preventDefault();
    var coffeeUserInput = coffeeInput.value.toLowerCase()
    console.log(coffeeUserInput);
    var coffeeHolic = [];
    coffees.forEach(function (coffee){
        if (coffeeInput.value === ""){
            coffeeUserInput.push(coffee);
        } else if (coffee.name.toLowerCase().includes(coffeeUserInput)){
            coffeeHolic.push(coffee);
        }
    });
    divBody.innerHTML = renderCoffees(coffeeHolic);
}

//adding a coffee functionality
//need Casey here
function addCoffee(e) {
    e.preventDefault()
    var newRoast = newRoastInput.value;
    var newName = newCoffeeNameInput.value;
    var newCoffee = {
        id: coffees.length + 1,
        name: newName,
        roast: newRoast
    };
    coffees.push(newCoffee)
    updateCoffees(e);
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

var divBody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var coffeeInput = document.querySelector("#coffee-input");
var newCoffeeNameInput = document.querySelector("#user-coffee-name");
var newRoastInput = document.querySelector("#user-coffee-roast");
var addCoffeeBtn = document.querySelector('#coffee-button');

console.log(coffeeInput);

divBody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
coffeeInput.addEventListener('keyup', updateCoffeeInput);
roastSelection.addEventListener('input', updateCoffees);
addCoffeeBtn.addEventListener('click', addCoffee);


