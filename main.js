"use strict"

function renderCoffee(coffee) { //put the coffees into a table
    var html = '<div class="card coffee" id="big-div">'; //define class and table row
    html += '<div class="coffee-data"><a href="#">' + coffee.id + '</a></div>'; // get id
    html += '<div class="coffee-data"><a href="#">' + coffee.name + '</a></div>'; // get name
    html += '<div class="coffee-data"><a href="#">' + coffee.roast + '</a></div>'; // ger roast
    html += '</div>'; // end table row

    return html; //return the table to renderCoffee
}

function renderCoffees(coffees) { //loops through coffees, add each coffee to html
    var html = '';
    for(var i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}


//coffee roast selection
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data

    var selectedRoast = roastSelection.value; //filter the selection
    var filteredCoffees = []; // the bucket

    if(selectedRoast !== 'all') { //not all? do this
        coffees.forEach(function(coffee) { //iterate through entire object
            if (coffee.roast === selectedRoast) { // does the roast selection match? do this
                filteredCoffees.push(coffee); // push the item to bucket
            }
        });
        tbody.innerHTML = renderCoffees(filteredCoffees); //display the bucket
    } else { // do it match the all? do this
        tbody.innerHTML = renderCoffees(coffees); //show all coffee items
    }

}

//coffee roast user input selection
function updateInputCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data

    var selectedRoast = inputSelection.value.toLowerCase();// standardize input selection
    var filteredCoffees = []; //The bucket

    coffees.forEach(function(coffee) { //
        if(coffee.name.toLowerCase().match(selectedRoast) || coffee.roast.toLowerCase().match(selectedRoast)) {
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
var submitButton = document.getElementById('roast-selection');
var roastSelection = document.querySelector('#roast-selection'); //user input coffee selection
var inputSelection = document.getElementById('inputSelection');

tbody.innerHTML = renderCoffees(coffees); //adds coffees to table body

submitButton.addEventListener('change', updateCoffees);
inputSelection.addEventListener('keyup', updateInputCoffees);

