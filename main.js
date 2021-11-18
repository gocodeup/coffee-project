"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    //html += '<div>' + coffee.id + '</div>'; //ID does not display
    html += '<h1>' + coffee.name + '</h1>'; // Heading for coffee names
    html += '<p class="text-center">' + coffee.roast + '</p>'; // Paragraph for roast types
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
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    // var searchedRoast = search.value.toUpperCase();
    var filteredCoffees = [];
    sortById.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if(roastSelection.value === 'all') {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function searchCoffees() {
    var searchedCoffee = search.value.toUpperCase();
    var filteredCoffees =[];
    coffees.forEach(function(coffee) {
        if(coffee.name.toUpperCase().includes(searchedCoffee)) {
            filteredCoffees.push(coffee)
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
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

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var search = document.querySelector('#search');
var sortById = coffees.sort(function(a,b){
    return b.id - a.id
})


tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
search.addEventListener('input', searchCoffees)

