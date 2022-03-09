//pull the lever Kronk!
"use strict"

// function renderCoffee(coffee) {
//     var html = '<div class="coffee">';
//     html += '<h3>' + coffee.name + '</h3>';
//     html += '<p>' + coffee.roast + '</p>';
//     html += '</div>';
//
//     return html;
// }
//Complete
function renderCoffee(coffee){
    var html = '<div class="coffee">';
    html += '<div>' + '<h3>' + coffee.name + '</h3>' + " " + '<select class="roast-selection">' + coffee.roast + ' <i class="icon fas fa-coffee">' + '</i>' +
        '</select>' + '</div>';
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
function addCoffee() {
    var newRoast = newRoastInput.value;
    var newName = newCoffeeNameInput.value;
    var newCoffee = [
        name: newName,
        roast: newRoast
    ];
    coffees.push(newCoffee)
    divBody.innerHTML = renderCoffees(coffees);
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
var coffeeInput = document.querySelector("#text-input").value;
//need Casey here
//var newCoffeeNameInput = document.querySelector("#user-coffee-name");
//var newRoastInput = document.querySelector("#user-coffee-roast");


divBody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', addCoffee);
coffeeInput.addEventListener('input', updateCoffeeInput);
roastSelection.addEventListener('input', updateCoffees);


