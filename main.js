"use strict"

function createCoffee (inputName, roastType){
    var newCoffee = {id: coffees.length + 1 , name: inputName, roast: roastType}
    coffees.push(newCoffee);
    console.log(coffees);
}

//above this line are the functions for creating coffee obj
function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<h3>' + coffee.name + '</h3>' + '<p>' + coffee.roast + '</p>' ;
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
   coffees.sort((a,b) => {return parseFloat(a.id) - parseFloat(b.id)});
   coffees.forEach(coffee => {
       html+=renderCoffee(coffee)
   });
    return html;
}

function updateCoffees() {
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast || selectedRoast === "all") {
            if (coffee.name.toLowerCase().includes(selectedCoffee)) {
                filteredCoffees.push(coffee);
            }
        }
    });
    coffeeContainer.innerHTML = renderCoffees(filteredCoffees);
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

var coffeeContainer = document.getElementById('coffee-container');
var submitButton = document.querySelector('#submit');

var selectedRoast = 'all';
var roastSelection = document.querySelector('#roast-selection');
roastSelection.addEventListener('change', function(){
    selectedRoast = roastSelection.value;
    updateCoffees();
});

var selectedCoffee = '';
var searchCoffee = document.getElementById("search-coffee");
searchCoffee.addEventListener('keyup', function(){
    selectedCoffee = searchCoffee.value;
    updateCoffees();
});
var addCoffeeButton = document.querySelector('#add-coffee-button')
addCoffeeButton.addEventListener('click', function(){
    var coffeeRoastSelection = document.getElementById('coffee-roast-selection');
    var addCoffeeNameInput = document.getElementById('add-coffee-name-input');
    console.log(createCoffee(addCoffeeNameInput.value, coffeeRoastSelection.value));

});
coffeeContainer.innerHTML = renderCoffees(coffees);
console.log(coffees);

// submitButton.addEventListener('click', updateCoffees);
