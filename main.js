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
var showdisply2 = document.getElementById("disply2");
var roastSelectionLight = document.getElementById("light");
var coffeename = document.getElementById('coffeeName').value;

var array1 = [];
var arrayRoast1 = [];
for (var i = 0; i < coffees.length; i++) {
        arrayRoast1.push(coffees[i].roast)
        array1.push(coffees[i].name);
        showdisply.innerHTML = array1.join("<br>");
        showdisply2.innerHTML = arrayRoast1.join("<br>");

}
var array0 = [];
var arrayRoast0 = [];
var array2 = [];
var arrayRoast2= [];
var array3 = [];
var arrayRoast3 = [];
var array4 = [];
var arrayRoast4 = [];
function coffeeChoices() {
    if (document.getElementById("roast-selection").value === "all") {
        for(var i = 0; i < coffees.length; i++) {
            var coffeeChoices = coffees[i].name;
            array0.push(coffeeChoices);
            arrayRoast0.push(coffees[i].roast);
            showdisply2.innerHTML = arrayRoast0.join("<br>");
            showdisply.innerHTML = array0.join("<br>");
        }
    } else if (document.getElementById("roast-selection").value === "light") {
        for (var i = 0; i < 3; i++) {
            arrayRoast2.push(coffees[i].roast);
            array2.push(coffees[i].name);
            showdisply2.innerHTML = arrayRoast2.join("<br>");
            showdisply.innerHTML = array2.join("<br>");
        }
    } else if (document.getElementById("roast-selection").value === "medium") {
        for (i = 3; i < 6; i++) {
            arrayRoast3.push(coffees[i].roast)
            array3.push(coffees[i].name);
            showdisply2.innerHTML = arrayRoast3.join("<br>");
            showdisply.innerHTML = array3.join("<br>");
        }
    } else {
        for (i = 6; i < coffees.length; i++) {
            arrayRoast4.push(coffees[i].roast)
            array4.push(coffees[i].name);
            showdisply2.innerHTML = arrayRoast4.join("<br>");
            showdisply.innerHTML = array4.join("<br>");
        }
    }
}

// function addCoffee(){
// var userCoffee = document.getElementById("coffeeName2").value;
// if(document.getElementById("addRoast").value === "light"){
//     array2.push(userCoffee);
// }
//
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

// tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
