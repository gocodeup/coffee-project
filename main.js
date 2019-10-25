"use strict"

function renderCoffee(coffee) {
    var html = '<div class="row coffeediv">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h3>' + coffee.name + '</h3>';
    html += '<p class="roastName">' + coffee.roast + '</p>';
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

// function updateCoffees(e) {
//     e.preventDefault(); // don't submit the form, we just want to update the data
//     var selectedRoast = roastSelection.value;
//     var filteredCoffees = [];
//     coffees.forEach(function(coffee) {
//         if (coffee.roast === selectedRoast) {
//             filteredCoffees.push(coffee);
//
//         } else if (roastSelection.value === "all") {
//             tbody.innerHTML = renderCoffees(coffees);
//
//         } else if (roastSelection === document.getElementById("allthecoffee")) {
//             filteredCoffees.push(coffees);
//
//         }
//     });
//     tbody.innerHTML = renderCoffees(filteredCoffees);
// }

// var allCoffee = document.querySelector('#allthecoffee');


// function updateCoffees(e) {
//     e.preventDefault(); // don't submit the form, we just want to update the data
//     var selectedRoast = roastSelection.value;
//     var filteredCoffees = [];
//     sortedCoffees.forEach(function (coffee) {
//         if (coffee.roast === selectedRoast) {
//             filteredCoffees.push(coffee);
//         } else if (selectedRoast === "all") {
//             renderCoffees(sortedCoffees);
//         }
//     });
//     tbody.innerHTML = renderCoffees(filteredCoffees);
// }


// working code for search by roast below, but not including "all" functionality
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
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
var sortedCoffees = coffees.reverse();


var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

var addCoffeeButton = document.querySelector('#newCoffeeSubmit');


// var allCoffee = document.querySelector('#allthecoffee');


tbody.innerHTML = renderCoffees(sortedCoffees);

submitButton.addEventListener('click', updateCoffees);


var searchQuery = function (e) {
    var html = "";
    for (var i = 0; i < sortedCoffees.length; i++) {

        if (sortedCoffees[i].name.toLowerCase().includes(coffeeSearch.value.toLowerCase()) || (sortedCoffees[i].roast.toLowerCase().includes(coffeeSearch.value.toLowerCase()))) {
            html = html + renderCoffee(sortedCoffees[i]);
        }
        tbody.innerHTML = html;
    }
};

coffeeSearch.addEventListener("keydown", searchQuery);

function createBrew(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var x = document.getElementById("addCoffeeName").value;
    var y = document.getElementById("addCoffeeRoast").value;
    if (isNaN(x) && x.length !== 0) {
        sortedCoffees.push({
            name: x,
            roast: y,
        })
    } else alert("Please enter a name for your coffee");
    tbody.innerHTML = renderCoffees(sortedCoffees);

}

addCoffeeButton.addEventListener('click', createBrew);

