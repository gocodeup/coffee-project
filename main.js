"use strict";


//creates a new row with coffee info for table
// function renderCoffee(coffee) {
//     var html = '<tr class="coffee">';
//     html += '<td>' + coffee.id + '</td>';
//     html += '<td>' + coffee.name + '</td>';
//     html += '<td>' + coffee.roast + '</td>';
//     html += '</tr>';
//
//     return html;
// }

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<h3>' + coffee.name + '</h3>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}


//pulling coffee info from renderCoffee function in descending order (from bottom up)
function renderCoffees(coffees) {
    var html = '';
    for(var i = 0;  i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

//add coffee to coffees object
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

function searchCoffee(query) {
    var selectedRoast = query.value;
    var filteredRoast = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });

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

//link for table body HTML
var tbody = document.querySelector('#coffees');

//link for submit button in form
var submitButton = document.querySelector('#submit');

//link for drop down menu in form
var roastSelection = document.querySelector('#roast-selection');

//adding all coffee from coffees object into table body in HTML
tbody.innerHTML = renderCoffees(coffees);

//updates table to show coffee based on form drop down selection ('light' , 'medium' , 'dark')
submitButton.addEventListener('click', updateCoffees);


//Refactor so that coffee info is displayed in a DIV, with a heading displaying the coffee name, and type of roast in a paragraph. Don't display the IDs

//add option to drop down for all coffee
