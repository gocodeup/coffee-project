"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee d-flex align-items-baseline">';
    html += '<h1 class="fs-3 fw-bold">' + coffee.name + '</h1>';
    html += '<p class="text-secondary p-1">' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for (var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];

    if (selectedRoast === "all") {
        tbody.innerHTML = renderCoffees(coffees);
    } else {
        coffees.forEach(function (coffee) {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }
        });
        tbody.innerHTML = renderCoffees(filteredCoffees);
    }
}

// ----find coffee----
function findCoffee(e) {
    e.preventDefault();
    var selectedCoffee = findCoffeeInput.value;
    var filteredCoffees = [];

    if (selectedCoffee === "") {
        tbody.innerHTML = renderCoffees(coffees);
    } else {
        coffees.forEach(function (coffee) {
            if (coffee.name === selectedCoffee) {
                filteredCoffees.push(coffee);
            }
        });
        tbody.innerHTML = renderCoffees(filteredCoffees);
    }
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

function sortById(){
    return function(coffee1, coffee2) {
        if (coffee1.id < coffee2.id) {
            return -1;
        }else if (coffee1.id > coffee2.id) {
            return 1;
        }else{
            return 0;
        }
    }
}

var sortCoffees = coffees.sort(sortById());

console.log(sortCoffees);

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var findCoffeeInput = document.querySelector('#find-coffee');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);


// ------add coffee------
var newName = document.getElementById('inputNewCoffee');
var newRoast = document.getElementById('roast-selection-new');
var submitNew = document.getElementById('submitNewCoffee');
submitNew.addEventListener('click', submitCoffeeInfo);

function submitCoffeeInfo(e) {
    e.preventDefault()

    console.log(newName.value);
    console.log(newRoast.value);

    var newCoffee = {
        id: coffees.length + 1,
        name: newName.value,
        roast: newRoast.value
    }

    console.log(newCoffee);
    coffees.push(newCoffee);
    tbody.innerHTML = renderCoffees(coffees);
};








