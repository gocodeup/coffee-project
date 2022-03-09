"use strict"

// function renderCoffee(coffee) {
//     var html = '<div class="coffee">';
//     html += '<h3>' + coffee.name + '</h3>';
//     html += '<p>' + coffee.roast + '</p>';
//     html += '</div>';
//
//     return html;
// }

function renderCoffee(coffee){
    var html = '<div class="coffee">';
    html += '<div>' + '<h3>' + coffee.name + '</h3>' + " " + '<select class="roast-selection">' + coffee.roast + ' <i class="icon fas fa-coffee">' + '</i>' +
        '</select>' + '</div>';
    html += '</div>'
    return html;
}
// Complete
function renderCoffees(coffees) {
    var html = '';
    // console.log(coffees)
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}
//Complete
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if (coffee.name.toLowerCase().includes(textInput)) {
            filteredCoffees.push(coffee);
        }
    }) divBody.innerHTML = renderCoffees(filteredCoffees);
}

// function updateCoffees(e) {
//     e.preventDefault(); // don't submit the form, we just want to update the data
//     var selectedRoast = roastSelection.value;
//     var filteredCoffees = [];
//     coffees.forEach(function(coffee) {
//         if (coffee.roast === selectedRoast) {
//             filteredCoffees.push(coffee);
//         } else if (textInput === coffees){
//             filteredCoffees.push(coffee)
//         }
//     });
//     divBody.innerHTML = renderCoffees(filteredCoffees);
//     console.log(filteredCoffees)
// }

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
var textInput = document.querySelector("#text-input").value


divBody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
textInput.addEventListener("keyup", updateCoffees);

