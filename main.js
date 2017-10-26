"use strict";

// this function adds HTML elements to each coffee and places it into one div
function renderCoffee(coffee) {

    var html = '<div class="coffee col-xs-6">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<span><h2><span>' + coffee.name + '</span></h2></span>';
    html += '<span><p><span>  ' + coffee.roast + '</span></p></span>';
    html += '</div>';
    return html;

}

// this function takes in a coffee array and displays it on the html page
function renderCoffees(coffees) {

    var html = '';
    for(var i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

// this is filtering coffees via the "light, medium, dark, or all" selection button
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if ("all" === selectedRoast) {
            filteredCoffees.push(coffee);
        }
        else if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
// the initial starting array of coffees, which will be used to compare searchs to
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

// variables to locate HTML elements on page
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var newSubmit = document.querySelector('#newSubmit');

// this renders the searched coffees on the page, replacing the initial display of them all
tbody.innerHTML = renderCoffees(coffees);

function addedCoffee(newCoffeeName, newCoffeeRoast) {
    console.log("added coffee fired");
    console.log(newCoffeeName);
    return coffees.push({id: 15, name: newCoffeeName, roast: newCoffeeRoast});

}


// This is grabbing any string typed in search box
var searchbar = document.getElementById('searchBox');
function matchedCoffees() {
    var userInput = searchbar.value;
    var filteredCoffees = [];

    function filteringCoffee(element, index) {
        var lowerCaseCoffee = element.name.toLowerCase();
        return lowerCaseCoffee.indexOf(userInput) > -1;
    }
    filteredCoffees = coffees.filter(filteringCoffee);
     tbody.innerHTML = renderCoffees(filteredCoffees);
}

// these add event listeners to the search field and submit button which trigger the fuctions defined above
searchbar.addEventListener("keyup", matchedCoffees);
submitButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener("change", updateCoffees);
newSubmit.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("listener fired");
    var newCoffeeName = document.querySelector('#newCoffeeInput');
    var newCoffeeRoast = document.querySelector('#new-roast-selection');
    addedCoffee(newCoffeeName.value, newCoffeeRoast.value);
});