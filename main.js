"use strict";

// Catcher for submission
var coffeeSubmission;

function renderCoffee(coffee) {
    var html = "<div id=\"" + coffee.id + "\" " + "class =\"coffee\">";
    html += "<h3>" + coffee.name + "</h3>";
    html += "<p>" + coffee.roast + "</p>";
    html += "</div>";

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for (var i = 0; i < coffees.length; i++) {

        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    // e.preventDefault(); // don't submit the form, we just want to update the data
    // var selectedRoast = roastSelection.value;
    // var searchCoffee = (document.getElementById("coffeeEntered").value).toLowerCase();
    // var userSearch = new RegExp(searchCoffee, 'gi');
    // var filteredCoffees = [];
    // coffees.forEach(function (coffee) {
    //     if (coffee.roast === selectedRoast && coffee.name.match(userSearch)) {
    //         filteredCoffees.push(coffee);
    //     } else if (coffee.roast === "all" || coffee.name.match(userSearch)) {
    //         filteredCoffees.push(coffee);
    //     }
    // });
    // section.innerHTML = renderCoffees(filteredCoffees);
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    // dynamicSelection();
    console.log(coffeeSubmission);
    // if (selectedRoast === "all") {
    //     section.innerHTML = renderCoffees(coffees);
    // } else {
    //     coffees.forEach(function (coffee) {
    //         if (coffee.roast === selectedRoast) {
    //             filteredCoffees.push(coffee);
    //         }
    //     });
    //     section.innerHTML = renderCoffees(filteredCoffees);
    // }
}

// Separate function to be called specifically for roast selector
// var dynamicSelection = function (roastChanged) {
//     var dynamicRoast = roastSelection.value;
//     var filteredCoffees = [];
//     if (dynamicRoast === "all") {
//         section.innerHTML = renderCoffees(coffees);
//     } else {
//         coffees.forEach(function (coffee) {
//             if (coffee.roast === dynamicRoast) {
//                 filteredCoffees.push(coffee);
//             }
//         });
//         section.innerHTML = renderCoffees(filteredCoffees);
//     }
// };
var dynamicSelection = function (roastChanged) {
    var dynamicRoast = roastSelection.value;
    var filteredCoffees = [];
    var searchCoffee = (document.getElementById("coffeeEntered").value).toLowerCase();
    var userSearch = new RegExp(searchCoffee, 'gi');
    // if (dynamicRoast === "all") {
    //     section.innerHTML = renderCoffees(coffees);
    // } else {
    //     coffees.forEach(function (coffee) {
    //         if (coffee.roast === dynamicRoast) {
    //             filteredCoffees.push(coffee);
    //         }
    //     });
    //     section.innerHTML = renderCoffees(filteredCoffees);
    // }
    if (enteredCoffee.value === "") {
        // console.log("it is empty");
        if (dynamicRoast === "all") {
            coffeeSubmission = coffees;
            section.innerHTML = renderCoffees(coffees);
        } else {
            coffees.forEach(function (coffee) {
                if (coffee.roast === dynamicRoast) {
                    filteredCoffees.push(coffee);
                }
            });
            coffeeSubmission = filteredCoffees;
            section.innerHTML = renderCoffees(filteredCoffees);
        }
    } else if (dynamicRoast === "all") {
        coffees.forEach(function (coffee) {
            if (coffee.name.match(userSearch)) {
                filteredCoffees.push(coffee);
            }
        });
        coffeeSubmission = filteredCoffees;
        section.innerHTML = renderCoffees(filteredCoffees);
    } else {
        coffees.forEach(function (coffee) {
            if (coffee.roast === dynamicRoast && coffee.name.match(userSearch)) {
                filteredCoffees.push(coffee);
            }
        });
        coffeeSubmission = filteredCoffees;
        section.innerHTML = renderCoffees(filteredCoffees);
    }
};

var dynamicCoffeeSearch = function (enteredCoffee) {
    var dynamicRoast = roastSelection.value;
    var filteredCoffees = [];
    var searchCoffee = (document.getElementById("coffeeEntered").value).toLowerCase();
    var userSearch = new RegExp(searchCoffee, 'gi');
    coffees.forEach(function (coffee) {
        if (dynamicRoast === "all" && coffee.name.match(userSearch)) {
            filteredCoffees.push(coffee);
        } else if (coffee.roast === dynamicRoast && coffee.name.match(userSearch)) {
            filteredCoffees.push(coffee)
        }
    });
    // console.log(filteredCoffees);
    coffeeSubmission = filteredCoffees;
    section.innerHTML = renderCoffees(filteredCoffees);
};

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

// QUERY SELECTORS
var section = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var enteredCoffee = document.querySelector('#coffeeEntered');

// Display coffee selection on launch
section.innerHTML = renderCoffees(coffees);
coffeeSubmission = coffees;

// Event listeners
submitButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener('change', dynamicSelection);
enteredCoffee.addEventListener('input', dynamicCoffeeSearch);