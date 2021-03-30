"use strict"

function renderCoffee(coffee) {
    // var html = '<tr class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    // html += '<td>' + coffee.name + '</td>';
    // html += '<td>' + coffee.roast + '</td>';
    // html += '</tr>';
    //refactored table
    var html = '<div class="coffee">';
    // html += '<div>' + coffee.id + '</div>';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    // for(var i = coffees.length -1; i >= 0; i--) {
    //     html += renderCoffee(coffees[i]);
    // }
    for(var i = 0; i < coffees.length; i++) {
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

var searchBar = document.querySelector('#search');
function coffeeLoop (e){
    e.preventDefault(); // don't submit the form, we just want to update the data
    var coffeeSearch = searchBar.value.toLowerCase();
    var filteredCoffeeNames = [];
    for(var i = 0; i < coffees.length; i++){
        var coffeeName = coffees[i].name;
        if(coffeeName.toLowerCase().indexOf(coffeeSearch) >= 0) {
            filteredCoffeeNames.push(coffees[i]);
        }
    // coffees.forEach(function(coffee) {
    //     var coffeeName = coffees.name;
    //     if(coffeeName.toLowerCase() === coffeeSearch) {
    //         filteredCoffeeNames.push(coffees);
        }
    // });
        tbody.innerHTML = renderCoffees(filteredCoffeeNames);
}

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
searchBar.addEventListener('keyup', coffeeLoop)
