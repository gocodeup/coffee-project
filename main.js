"use strict"

function renderCoffee(coffee) {
    // var html = '<tr class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    // html += '<td>' + coffee.name + '</td>';
    // html += '<td>' + coffee.roast + '</td>';
    // html += '</tr>';
    var html =  '<div class="coffee">';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';
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
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    divBody.innerHTML = renderCoffees(filteredCoffees);
}

function searchCoffeeNames(e) {
    e.preventDefault();
    //collect a string value from the user in the search bar & assign to variable
    //create an empty array to store the results
    //run a foreach loop through the coffee array
    //check if the user value matches a name from coffee array
    //if so, push to the empty array
    //change divBody.innerHTML to call renderCoffees with the no-longer empty array
    var userCoffeeName = document.getElementById("user-search").value;
    console.log(userCoffeeName);
    var filteredNames = [];
    coffees.forEach(function(coffee) {
        if (coffee.name === userCoffeeName) {
            console.log("You found a coffee!");
            filteredNames.push(coffee);
            console.log(filteredNames);
        }
    });
    divBody.innerHTML = renderCoffees(filteredNames);
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

var divBody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

divBody.innerHTML = renderCoffees(coffees);


roastSelection.addEventListener('change', updateCoffees);
//submitButton.addEventListener('click', updateCoffees);
submitButton.addEventListener('click', searchCoffeeNames);


<!--select.addEventListener('change', function(e) {-->
<!--    map.setZoom(select.value);-->
<!--});-->