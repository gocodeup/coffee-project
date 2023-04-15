"use strict"

// provides html for individual coffee objects.
//Template to build other functions
function renderCoffee(coffee) {
    var html = '<div class=" row ms-2 coffee">';
    html += '<div class="col col-2"><h3>' + coffee.name + coffee.id + '</h3></div>';
    html += '<div class="col col-2"><p>' + coffee.roast + '</p></div>';
    html += '</div class="row">';

    console.log(html);
    return html;


}

// provides the html for All coffee objects
//uses above function to create all coffee objects
function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    console.log(html);
    return html;
}
//displays filtered list of coffees based on roast
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

// this line is injecting the javascript generated html into the div
var tbody = document.querySelector('#coffees');
// grabbing the submit button for filtered coffee list
var submitButton = document.querySelector('#submit');
// grabbing the selection of light, med, or dark for filtered list
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
