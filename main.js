"use strict";

console.log("Owls can be powerful allies.");

var searchInput = document.getElementById("input-coffee");
//
// searchInput.addEventListener('keydown', function(){
//    console.log("Test");
// });

// var searchInput = document.getElementById("input-coffee");

searchInput.addEventListener('keyup', function searchCoffees(){
    const key = event.key.toLowerCase();
    let siftedCoffees = [];
    if (key === coffee.roast)
    console.log(key);
});

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

function updateCoffees(e) {
    console.log("moo");
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value.toLowerCase();
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderMultiCoffees(filteredCoffees);
}



// LIVE SEARCH FUNCTION //

    function searchCoffees() {
    console.log("moo!");
        var searchRoast = document.getElementById('#input-coffee').value.toUpperCase();
        // var filteredCoffees = [];
        console.log(searchRoast);
        // coffees.forEach(function(coffee) {
        //     if (coffee.name.toUpperCase().includes(searchRoast)) {
        //         filteredCoffees.push(coffee);
        //         console.log(filteredCoffees);
        //     }
        // });

    tbody.innerHTML = renderMultiCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
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

tbody.innerHTML = renderMultiCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
