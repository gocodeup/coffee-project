"use strict"
var userSearch = '';

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<h3>' + coffee.name + '</h3>';
    html += '<h4>' + coffee.roast + '</h4>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    //e.preventDefault(); // don't submit the form, we just want to update the data
    var filteredCoffees = [];
    var selectedRoast = roastSelection.value;
    if (typeof userSearch !== 'undefined') {
        var searchStringLC = userSearch.toLowerCase();
    }

    coffees.forEach(function(coffee) {
        var localCoffee = coffee.name.toLowerCase();
        if(localCoffee.includes(searchStringLC) && ((coffee.roast === selectedRoast)||(selectedRoast === 'all'))){
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
var roastSelection = document.querySelector('#roast-selection');
var inputDetect = document.querySelector('#site-search');
tbody.innerHTML = renderCoffees(coffees);

inputDetect.addEventListener('input', updateSearch);
function updateSearch(e) {
    userSearch = e.target.value;
    updateCoffees();
}

roastSelection.addEventListener('input', updateCoffees);

// IMPLEMENTING ADD COFFEE FORM FUNCTIONALITY ///
const addCoffee = document.querySelector('#submit');
addCoffee.addEventListener('click', function (event) {
    event.preventDefault()
    coffeeAdd();
});
function coffeeAdd () {
    let coffeeName = document.querySelector('#add-coffee').value.toLowerCase();
    let newID = coffees.length + 1;
    let coffeeRoast = document.querySelector('#added-roast').value;
    coffees.push({id: newID, name:coffeeName, roast:coffeeRoast});
    localStorage['coffees'] = JSON.stringify(coffees); /// ADDED LOCAL STORAGE ////
    console.log(coffees);
    updateCoffees();
}
window.onload = function(){
    let storedCoffee = JSON.parse(localStorage.getItem('coffees'));
    console.log(storedCoffee);
    for (let i = 14; i < storedCoffee.length; i++) {
        coffees.push(storedCoffee[i]);
    }
    updateCoffees();
}


