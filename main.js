"use strict";

var coffees = [
    {id: 1, name: 'Light City', roast: 'LIGHT ROAST'},
    {id: 2, name: 'Half City', roast: 'LIGHT ROAST'},
    {id: 3, name: 'Cinnamon', roast: 'LIGHT ROAST'},
    {id: 4, name: 'City', roast: 'MEDIUM ROAST'},
    {id: 5, name: 'American', roast: 'MEDIUM ROAST'},
    {id: 6, name: 'Breakfast', roast: 'MEDIUM ROAST'},
    {id: 7, name: 'High', roast: 'DARK ROAST'},
    {id: 8, name: 'Continental', roast: 'DARK ROAST'},
    {id: 9, name: 'New Orleans', roast: 'DARK ROAST'},
    {id: 10, name: 'European', roast: 'DARK ROAST'},
    {id: 11, name: 'Espresso', roast: 'DARK ROAST'},
    {id: 12, name: 'Viennese', roast: 'DARK ROAST'},
    {id: 13, name: 'Italian', roast: 'DARK ROAST'},
    {id: 14, name: 'French', roast: 'DARK ROAST'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

var searchInput = document.getElementById("input-coffee");

let siftedCoffees = [];

// submitButton.addEventListener('click', updateCoffees);

roastSelection.addEventListener('onchange', updateCoffees);

tbody.innerHTML = renderMultiCoffees(coffees);


searchInput.addEventListener('keydown', function(){
   console.log("Test");
});

// var searchInput = document.getElementById("input-coffee");

// searchInput.addEventListener('keyup', searchCoffees);
//     const key = event.key.toLowerCase();
//     console.log(key);
//     siftedCoffees.push(key);
//     console.log(siftedCoffees)
//
// });

// LIVE SEARCH FUNCTION //

    function searchCoffees() {
        console.log("meow!");
        var searchString = document.getElementById('input-coffee').value.toUpperCase();
        var filteredCoffees = [];

        filteredCoffees.forEach(function (coffee) {
            if (coffee.name.toUpperCase().includes(searchString)) {
                filteredCoffees.push(coffee);
                console.log(filteredCoffees);
            }
        });
    }

    tbody.innerHTML = renderMultiCoffees(filteredCoffees);


function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<p>' + coffee.id + '</p>';
    html += '<p>' + coffee.roast + ' - ' + coffee.name + '</p>';
    html += '</div>';

    return html;
}

function renderMultiCoffees(coffees) {
    var html = '';
    for (var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

// Drop-down menu roast update:
function updateCoffees() {
    console.log("moose bunnies");
    // e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value.toUpperCase();
    var filteredCoffees = [];

    if (selectedRoast === 'ALL ROASTS') {
        filteredCoffees = coffees;

        } else {

             coffees.forEach(function(coffee) {
                if (coffee.roast === selectedRoast) {
                    filteredCoffees.push(coffee);
                } else {console.log("wookie!")};
            });
        }
    tbody.innerHTML = renderMultiCoffees(filteredCoffees);
}









