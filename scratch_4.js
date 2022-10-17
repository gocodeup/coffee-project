"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee id="' + coffee.id + '">';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';
    return html;
}

function renderCoffees(coffees) {
    var html1 = '<div class="col-6">';
    var html2 = '<div class="col-6">';
    // When the page loads, the coffees should be sorted by their ids in ascending order
    // changed for loop to load in order of index
    for (let i = 0; i < coffees.length; i++) {
        if(i % 2 == 0){
            html1 += renderCoffee(coffees[i]);
        } else {
            html2 += renderCoffee(coffees[i]);
        }
    }
    let finalHtml = "<div class= 'row'>" + html1 +"</div>" + html2 + "</div>"
    return finalHtml;
}

function updateCoffees(e) {
    // no submit button so we don't need this conditional
    // if (e) {
    //     e.preventDefault(); // don't submit the form, we just want to update the data
    // }
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    // added filter variable to contain value of search box, ensuring case-insensitive
    let filter = document.getElementById("search-term").value.toUpperCase();
    coffees.forEach(function(coffee) {
        // added logic to conditional below to check all roasts and the search filter criteria, ensuring case-insensitive
        if (((selectedRoast === 'all') || (coffee.roast === selectedRoast))&& (coffee.name.toUpperCase().includes(filter))){
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

function addANewCoffee(e) {
    if (e) {
        e.preventDefault(); // don't submit the form, we just want to update the data
    }
    // build new coffee array object using inputs
    let id = coffees.length + 1;
    let roast = document.querySelector('#new-coffee-roast').value;
    let name = document.querySelector('#new-coffee-name-input').value;
    // kick back out if user did not enter a name
    if (name === "") {
        alert('Please enter a name for the coffee')
    } else {  //  if a name was entered, push object to array and update display
        let newCoffeeObj = {
            id,
            name,
            roast
        };
        coffees.push(newCoffeeObj);
        updateCoffees();
    }
}

var tbody = document.querySelector('#coffees');
// commented out submit button below, and replaced with search box event listener
//var submitButton = document.querySelector('#submit');

var roastSelection = document.querySelector('#roast-selection');

// add functionality to search through the coffees by name, and display only the coffees that match the provided search term (You will need to add an input field to the existing form for this)
//  added event listener for the search box so it reacts immediately without submit button
let searchBox = document.querySelector('#search-term');

// query selector for the event handler for adding a new coffee
let newCoffeeBox = document.querySelector("#new-coffee-submit");

tbody.innerHTML = renderCoffees(coffees);

// commented out submit button below, and replaced with search box event listener
// submitButton.addEventListener('click', updateCoffees);
searchBox.addEventListener('keyup', updateCoffees);

// added event listener so selection of roast reacts on change to add 'all' selection functionality
roastSelection.addEventListener('change', updateCoffees);

// event handler for adding a new coffee
newCoffeeBox.addEventListener('click', addANewCoffee);