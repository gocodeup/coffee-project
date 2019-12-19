"use strict"

function createCoffee (inputName, roastType){
    var newCoffee = {id: coffees.length + 1 , name: inputName, roast: roastType}
    coffees.push(newCoffee);
    console.log(coffees);
    // return coffees
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
        if (coffee.roast === selectedRoast || selectedRoast === "All") {
            if (coffee.name.toLowerCase().includes(selectedCoffee.toLowerCase())) {
                filteredCoffees.push(coffee);
            }
        }
    });
    coffeeContainer.innerHTML = renderCoffees(filteredCoffees);
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

var coffeeContainer = document.getElementById('coffee-container');
var submitButton = document.querySelector('#submit');

var selectedRoast = 'All';
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
    if (addCoffeeNameInput.value !== '') {
        console.log(createCoffee(addCoffeeNameInput.value, coffeeRoastSelection.value));
        updateCoffees();
    }
    addCoffeeNameInput.value = '';
});

coffeeContainer.innerHTML = renderCoffees(coffees);
console.log(coffees);

// submitButton.addEventListener('click', updateCoffees);