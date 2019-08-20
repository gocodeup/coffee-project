"use strict"
/*stores all the coffee array of object properties into the html variable and concatenates them in a
* string. It returns said string to the renderCoffees function below */
function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<p>' + coffee.id + '</p>'; //commented out so id #'s won't display
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
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

//After the event listener happens this thing is immediately called. The form isn't submitted for some reason
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
        // else if(coffee.roast != selectedRoast){
        //     filteredCoffees.push(coffee);
        // }


    });
    coffeeTypes.innerHTML = renderCoffees(filteredCoffees);
}

//I want to say this is the start of the application if you wanted to select a certain roaast from inventory
// This creates a handler function to interface with the select input for the roast. The anonymous function  below
// listens for the change event from the line below and then it selects the roast available consistent
// with the options from the select form.
var listener = function (event) {

}
// register the listener to handle clicks on btn1
document.getElementById('roast-selection').addEventListener('change', listener, false);

//This part creates an array of objects that store the coffee and their related infos
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
    {id: 14, name: 'French', roast: 'dark'}
];

var coffeeTypes = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

//This part displays all the roasts upon the load up of the page because it gets all the work from the IIFE and two
//functions from above
 coffeeTypes.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

