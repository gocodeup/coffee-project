"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    //html += '<div>' + coffee.id + '</div>';
    html += '<div>' + '<span class="coffeeName">' + coffee.name + '</span>' + " " + '<span class="coffeeRoast">' + coffee.roast + '</span>' + '</div>';
    // html += '<div>' + coffee.roast + '</div>';
    html += '</div>';

    return html;
}


function renderCoffees(coffees) {
    var html = '';
    // coffees = coffees.sort(compare);
    console.log(coffees);
    for (var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    //console.log(html);
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var searchCoffee = document.getElementById('searchCoffee').value;
    var filteredCoffees = [];

    if (selectedRoast === 'all') {
        coffees.forEach(function (coffee) {
            if (coffee.name.toLowerCase().indexOf((searchCoffee).toLowerCase()) >= 0) {
                filteredCoffees.push(coffee);
            }
        });
    } else {

    }
    coffees.forEach(function (coffee) {
        if (coffee.roast === selectedRoast && (coffee.name.toLowerCase().indexOf((searchCoffee).toLowerCase()) >= 0)) {
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

function addCoffee(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var roastType = document.getElementById('roast-type').value;
    var coffeeName = document.querySelector('#new-coffee').value;
    var newId = coffees.length;
    var newItem = {
        id: newId,
        name: coffeeName,
        roast: roastType
    };

    coffees.push(newItem);
    console.log(newItem);

    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        filteredCoffees.push(coffee);
    });

    document.getElementById("roast-selection").selectedIndex = 0;
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var submitCoffeButton = document.querySelector('#coffee-submit');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
submitCoffeButton.addEventListener('click', addCoffee);
searchCoffee.addEventListener('keyup', updateCoffees);
roastSelection.addEventListener('change', updateCoffees);
