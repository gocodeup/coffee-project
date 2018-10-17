"use strict"
//DISPLAYS COFFEE NAMES
function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    html += '<td>' + coffee.id + '</td>';
    html += '<td>' + coffee.name + '</td>';
    html += '<td>' + coffee.roast + '</td>';
    html += '</tr>';
    sortIt();
    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    sortIt();
    return html;
}


//////////////////////////////////////////////////////
//UPDATES SEARCH
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
/////////////////////////////////////////////////////////////
//This function checks the search box and matches the current input
// to update the list of coffees displayed
function monitorCoffee() {
    var coffeeName = new RegExp('^' + coffeeSelection.value);
    // var coffeeName = coffeeSelection.value;
    var filteredCoffees = [];
    var coffeeNameLower;
    coffees.forEach(function(coffee) {
        coffeeNameLower = coffee.name.toLowerCase();
        if (coffeeNameLower.search(coffeeName) > -1) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
////////////////////////////////////////////////////////////
////ADD NEW COFFEE

function addCoffee(e) {
    e.preventDefault();
    var newId = (coffees.length + 1);
    var newCoffee = {id: newId, name: capCoffee(), roast: newRoast.value};
    coffees.push(newCoffee);
    console.log(coffees);
    console.log(newCoffee);
    tbody.innerHTML = renderCoffees(coffees);
}

function capCoffee() {
    var coffeeSplit = newCoffee.value.split(" ");
    coffeeSplit[0] = coffeeSplit[0].charAt(0).toUpperCase() + coffeeSplit[0].slice(1);
    coffeeSplit[1] = coffeeSplit[1].charAt(0).toUpperCase() + coffeeSplit[1].slice(1);
    return coffeeSplit.join(" ");
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

// for(var i = 0; i < coffees.length; i++) {
    function sortIt(a, b) {
        var coffee1 = a.id;
        var coffee2 = b.id;

    }
// }


var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var coffeeSelection = document.querySelector('#name-search');
var newRoast = document.querySelector('#add-roast');
var newCoffee = document.querySelector('#add-coffee');
var submitCoffee = document.querySelector('#submit-coffee');



coffeeSelection.addEventListener('keyup', monitorCoffee);
submitButton.addEventListener('click', updateCoffees);
submitCoffee.addEventListener('click', addCoffee);

tbody.innerHTML = renderCoffees(coffees);

/////////////////////////TRASH BIN
// function monitorCoffee() {
//     var coffeeName = new RegExp('^' + coffeeSelection.value);
//     var whitespace = /\s/;
//     // var coffeeName = coffeeSelection.value;
//     var filteredCoffees = [];
//     var coffeeNameLower;
//     coffees.forEach(function(coffee) {
//         coffeeNameLower = coffee.name.toLowerCase();
//         var coffeeNameArr;
//         var coffeeNameLower2;
//         if(coffeeNameLower.search(whitespace) > -1){
//             coffeeNameArr = coffeeNameLower.split(' ');
//             // var coffeeNameLower1 = coffeeNameArr[0];
//             coffeeNameLower2 = coffeeNameArr[1];
//             // console.log(coffeeNameLower1);
//             // console.log(coffeeNameLower2);
//         }
//         if ((coffeeNameLower.search(coffeeName) > -1) || (coffeeNameLower2.search(coffeeName) > -1)) {
//             filteredCoffees.push(coffee);
//         }
//     });
//     tbody.innerHTML = renderCoffees(filteredCoffees);
// }