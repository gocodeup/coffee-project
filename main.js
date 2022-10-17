"use strict"
// Array of coffees to display
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
coffees = coffees.reverse();

function renderCoffee(coffee) {
    let html = '<div class="coffee">';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';

    return html
}


function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}
// updates form as roasts are selected
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    div.innerHTML = renderCoffees(filteredCoffees);
}

/* When input made is into search bar --Event listener
      Compare it to coffees, -- coffeeSearch == coffee.name
            display matching inputs   -- push

            */
function searchCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedName = nameSearch.value;
    var searchedCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.name == selectedName) {
            searchedCoffees.push(coffee);
        }
    });
    div.innerHTML = renderCoffees(searchedCoffees);
}


var div = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var nameSearch = document.querySelector('#coffeeSearch');




div.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
submitButton.addEventListener('click', searchCoffees);
