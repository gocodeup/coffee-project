"use strict"

// function renderCoffee(coffee) {
//     var html = '<tr class="coffee">';
//     html += '<td>' + coffee.id + '</td>';
//     html += '<td>' + coffee.name + '</td>';
//     html += '<td>' + coffee.roast + '</td>';
//     html += '</tr>';
//
//     return html;
// }

// function renderCoffees(coffees) {
//     var html = '';
//     for(var i = coffees.length - 1; i >= 0; i--) {
//         html += renderCoffee(coffees[i]);
//     }
//     return html;
// }

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    // tbody.innerHTML = renderCoffees(filteredCoffees);
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



var showdisply = document.getElementById('disply');
var roastSelectionLight = document.getElementById("light");
var coffeename = document.getElementById('coffeeName').value;

var array1 = [];
for (var i = 0; i < coffees.length; i++) {
        array1.push(coffees[i].name + ": " + coffees[i].roast);
        showdisply.innerHTML = array1.join("<br>");
}
var array2 = [];
var array3 = [];
var array4 = [];
function coffeeChoices() {
    if (document.getElementById("roast-selection").value == "undefined") {
        for(var i = 0; i < coffees.length; i++) {
            array1.push(coffees[i].name + ": " + coffees[i].roast);
            showdisply.innerHTML = array1.join("<br>");
        }
    } else if (document.getElementById("roast-selection").value == "light") {
        for (var i = 0; i < 3; i++) {
            array2.push(coffees[i].name + ": " + coffees[i].roast);
            showdisply.innerHTML = array2.join("<br>");
        }
    } else if (document.getElementById("roast-selection").value == "medium") {
        for (i = 3; i < 6; i++) {
            array3.push(coffees[i].name + ": " + coffees[i].roast);
            showdisply.innerHTML = array3.join("<br>");
        }
    } else {
        for (i = 6; i < coffees.length; i++) {
            array4.push(coffees[i].name + ": " + coffees[i].roast);
            showdisply.innerHTML = array4.join("<br>");
        }
    }
}

console.log();


var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

// tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
