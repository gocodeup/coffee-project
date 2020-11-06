"use strict"

//creates the table populated by coffees. Uses js coffees object to make table programatically
function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    html += '<td>' + coffee.id + '</td>';
    //will most likely get rid of this line since readme says no IDs
    //To create divs we can switch table parameters used here to divs instead

    html += '<td>' + coffee.name + '</td>';
    html += '<td>' + coffee.roast + '</td>';
    html += '</tr>';

    return html;
}

var listener = function(event){
    console.log(document.getElementById("userInput"))
}

document.getElementById("userInput").addEventListener("input", listener);


//defines the order of the coffees as rendered in the table
function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}


function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    //selectedRoast is pulling the values from the html in the form with inner id roastSelection
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    //    this looks at the "roast" value from the coffee objects and pushes it into the empty variable if it
    //    matches the entry currently selected in the picklist
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
//    this takes what has been pushed into the variable and populates it into the table
}

//Not sure how to create an input search field for coffees. This will be something to research on stack

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

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
