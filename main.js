"use strict"



function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<h2 class="coffee-name">' + coffee.name + '</h2>';
    html += '<p class="roast-type">' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    coffees.reverse();
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}



function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data

    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });

    coffeeDisplay.innerHTML = renderCoffees(filteredCoffees);
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


var coffeeDisplay = document.querySelector('#coffee-render-location');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');



coffeeDisplay.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);



//Uses user input to search for coffee by coffee.name in real time.
var searchField = document.getElementById("search-input");



searchField.addEventListener('keyup', function () {
    var searchInput = document.getElementById('search-input').value.toLowerCase();
    var filteredResults = [];
    coffees.forEach(function(coffee){
        var lowerCaseCoffeeName = coffee.name.toLowerCase();
        if (lowerCaseCoffeeName.includes(searchInput)){
            filteredResults.push(coffee);
            coffeeDisplay.innerHTML = renderCoffees(filteredResults);
        }
    });
});



