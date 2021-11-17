"use strict"

/**added function for the userInput for the search */
function userSearch(e){
    var userKeyStroke = userInput.value;
    userKeyStroke = userKeyStroke.toLowerCase();
    var searchedCoffees = []; //this was never queried, fixed .innerHTML below
    updateCoffees(e).forEach(function (coffee){
        if(coffee.name.toLowerCase().includes(userKeyStroke)){
            searchedCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffee(searchedCoffees);
}


function renderCoffee(coffee) {
    var html = '<div class="coffee text-center>';
    html += '<div class="text-nowrap">' + '<span class="h2">' + coffee.name + '</span>'
        + '<span class="text-light">' + coffee.roast + '</span>' + '</div>';
    html += '</div>';
    return html;
}
    // var html = '<tr class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    // html += '<td>' + coffee.name + '</td>';
    // html += '<td>' + coffee.roast + '</td>';
    // html += '</tr>';
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

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
/** added var userInput for the addEventListener userInput*/
var userInput = document.querySelector(coffees.reverse());

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
userInput.addEventListener('keyup', userSearch);
roastSelection.addEventListener('click', updateCoffees);