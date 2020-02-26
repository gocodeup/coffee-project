"use strict";

function renderCoffee(coffee) {
    var html = '<div id="rendered_coffee" style="border: 12px solid lightslategray; border-radius: 15px; margin-bottom: 3em; background-color: linen">' + '<h1 class="coffee">';
    html += '<div class="hidden">' + coffee.id + '</div>';
    html += '<p>' + coffee.img + '</p>';
    html += '<h1><em>' + coffee.name + '</em></h1>';
    html += '<p>' + 'Roast Type: ' + coffee.roast + '</p>';
    html += '</h1>' + '</div>';
    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for (var i = coffees.length - 1; i >= 0; i--){
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) { // Dynamically adjusts display based on roast type selected in dropdown
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function updateCoffee2(e) { // Dynamically adjusts display based on letters typed in search bar
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedCoffee = searchBar.value;
    var filteredCoffees = [];
    coffees.filter(function(coffees) {
        if (coffees.roast.toLowerCase().match(selectedCoffee) || coffees.name.toLowerCase().match(selectedCoffee)) {
            filteredCoffees.push(coffees);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'Light', img: '<img src="coffee-mug.png" class="coffee-mug" alt=""/>'},
    {id: 2, name: 'Half City', roast: 'Light', img: '<img src="coffee-mug.png" class="coffee-mug" alt=""/>'},
    {id: 3, name: 'Cinnamon', roast: 'Light', img: '<img src="coffee-mug.png" class="coffee-mug" alt="">'},
    {id: 4, name: 'City', roast: 'Medium', img: '<img src="coffee-mug.png" class="coffee-mug" alt="">'},
    {id: 5, name: 'American', roast: 'Medium', img: '<img src="coffee-mug.png" class="coffee-mug" alt="">'},
    {id: 6, name: 'Breakfast', roast: 'Medium', img: '<img src="coffee-mug.png" class="coffee-mug" alt="">'},
    {id: 7, name: 'High', roast: 'Dark', img: '<img src="coffee-mug.png" class="coffee-mug" alt="">'},
    {id: 8, name: 'Continental', roast: 'Dark', img: '<img src="coffee-mug.png" class="coffee-mug" alt="">'},
    {id: 9, name: 'New Orleans', roast: 'Dark', img: '<img src="coffee-mug.png" class="coffee-mug" alt="">'},
    {id: 10, name: 'European', roast: 'Dark', img: '<img src="coffee-mug.png" class="coffee-mug" alt="">'},
    {id: 11, name: 'Espresso', roast: 'Dark', img: '<img src="coffee-mug.png" class="coffee-mug" alt="">'},
    {id: 12, name: 'Viennese', roast: 'Dark', img: '<img src="coffee-mug.png" class="coffee-mug" alt="">'},
    {id: 13, name: 'Italian', roast: 'Dark', img: '<img src="coffee-mug.png" class="coffee-mug" alt="">'},
    {id: 14, name: 'French', roast: 'Dark', img: '<img src="coffee-mug.png" class="coffee-mug" alt="">'},
];

coffees.reverse();
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var searchBar = document.querySelector('#search');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

searchBar.addEventListener('keyup', updateCoffee2);
submitButton.addEventListener('click', updateCoffees);
