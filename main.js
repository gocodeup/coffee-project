"use strict"

// When the page loads, the coffees should be sorted by their ids in ascending order
//
// dd functionality to search through the coffees by name, and display only the coffees that match the provided search term (You will need to add an input field to the existing form for this)
//
// Add functionality to update the displayed coffee as the user types into the search box, or as soon as they select an option from the select.

// Add an option to select all roasts for roast type
//
// Make your name search case insensitive
//
// Allow the user to add new coffees to the page
//
// Create another form on the page that has an input for the coffee name, and a select to choose the coffee roast. When the form is submitted, the new coffee should appear on the page. (Note that any new coffees you add will be lost when you refresh the page, for an extra challenge, research how localStorage works and see if you can find a way to persist the data)


function renderCoffee(coffee) {
    var html = '<div class="coffee id="' + coffee.id + '">';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';
    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for (let i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    let filter = document.getElementById("search-term").value.toUpperCase();
    //console.log("filter is " + filter);
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast && coffee.name.toUpperCase().includes(filter)) {
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

var tbody = document.querySelector('#coffees');
//var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
let searchBox = document.querySelector('#search-term');

tbody.innerHTML = renderCoffees(coffees);

//submitButton.addEventListener('click', updateCoffees);
searchBox.addEventListener('keyup', updateCoffees);
