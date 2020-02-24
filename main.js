"use strict"

/*
Priority 1 mobile First
    1 make new table using bootstrap
        Div containing heding including :
        coffee name
        cofee type of roast
        // Dont display IDS
    2 When page loads, sort by ID in ascending order
    3 functionality
        Apply search bar
            Based on coffee name
    4 add drop down display cofee at hover
        add search update as typing
 */


function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<td>' + coffee.name + '</td>';
    html += '<td>' + coffee.roast + '</td>';
    html += '</tr>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for (var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}


function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data

    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if (selectedRoast === "All Roast") {
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
coffees.reverse();
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var searchBox = document.querySelector("#searchBox");
var searchBoxButton = document.querySelector("#searchBoxButton");

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
searchBoxButton.addEventListener("click", searchCoffee);
searchBox.addEventListener("input",updateCoffees);

function searchCoffee(string) {
    string.preventDefault();
    var typeCoffee = searchBox.value;
    var coffeeEntered = [];
    coffees.forEach(function (coffee) {
        if (coffee.name.toLowerCase() === typeCoffee.toLowerCase()){
            coffeeEntered.push(coffee)
        }
    });
    tbody.innerHTML = renderCoffees(coffeeEntered)}