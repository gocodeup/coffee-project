"use strict"

// This needs to be changed to divs
// Can work with when we're changing the html so that this doesn't completely break
// before we break it on purpose
// for now it returns html code that displays ONE coffee's info in a row
// this function is run by renderCoffees
function renderCoffee(coffee) {
    // var html = '<tr class="coffee">';
    // html += '<td>' + coffee.name + '</td>';
    // html += '<td>' + coffee.roast + '</td>';
    // html += '</tr>';
    // each list in the list of of coffees we will display is simply going to be sent back as
    // <div class="coffee"><span>*COFFEE NAME*</span> <span>*COFFEE ROAST*</span></div>
    let html = '<div class="coffee">';
    html += '<span class="coffee-name">' + coffee.name + '</span> ';
    html += '<span class="coffee-roast">' + coffee.roast + '</span>';
    html += '</div>'

    return html;
}

// this function puts together all the new html code for displaying a table in the web page
function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    // e calls back to the event manager and is connected form submission
    e.preventDefault(); // don't submit the form, we just want to update the data
    // roastSelection is given values to present the user in the html page and this data is then
    // sent into the javascript application by this variable assignment.
    var selectedRoast = roastSelection.value;
    // this string contains the coffee name we wish to match with
    let selectedName = nameSearch.value;
    // filteredCoffees is created here empty and will be filled with coffees with data matching
    var filteredCoffees = [];
    //                          coffee here is just a selector for each element inside coffeeS which is defined below
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    // tbody is the contents of a table in html
    // the function it calls overwrites the table only when this part of this function runs
    coffeeDiv.innerHTML = renderCoffees(filteredCoffees);
}

// this is the list of coffees and their data
// it is an array of objects which have this structure:
// id:       <number>
// name:     <string>
// roast:    <string>
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

const coffeeDiv = document.querySelector('#coffee-display-container');
const submitButton = document.querySelector('#submit');
const roastSelection = document.querySelector('#roast-selection');

const nameSearch = document.querySelector('#name-search');


// this line initially fills the table with ALL coffees
coffeeDiv.innerHTML = renderCoffees(coffees);


//when submitButton is clicked, updateCoffees runs
submitButton.addEventListener('click', updateCoffees);