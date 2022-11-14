"use strict"

// Search Bar 1
let search = document.getElementById('searchCoffee');
search.addEventListener('keyup', function() {
    console.log("event fired off");
let searchValue = search.value.toUpperCase();
let filteredCoffees = [];
for(let i = 0; i < coffees.length; i++) {
    if(coffees[i].name.toUpperCase().includes(searchValue)) {
        console.log(coffees[i]);
        filteredCoffees.push(coffees[i]);
    }
}
tbody.innerHTML = renderCoffees(filteredCoffees);
});

// Search Bar 2
let newCoffee = document.querySelector('#newCoffee');
let newRoast = document.querySelector('#userCoffeeRoast');
let newCoffeeBtn = document.querySelector('#newCoffee-submit');
newCoffeeBtn.addEventListener('click', function(input) {
    let newCoffeeId = coffees.length+1;
    let newCoffeeName = newCoffee.value.toString();
    let newCoffeeRoast = newRoast.value.toString();
    input = {id: newCoffeeId, name: newCoffeeName, roast: newCoffeeRoast};
    coffees.push(input);
    tbody.innerHTML = renderCoffees(coffees);
});



function renderCoffee(coffee) {
    var html = '<div class="coffee" style="width: 50%">';
    // html += '<p>' + coffee.id + '</p>';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
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

// Roast Selection List
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if(roastSelection.value === 'All') {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
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
    {id: 14, name: 'French', roast: 'Dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

roastSelection.addEventListener('change', updateCoffees);
