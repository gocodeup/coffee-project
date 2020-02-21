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

// refactor for taking coffes out of table into divs

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<p class="coffeeID">' + coffee.id + '</p>';
    html += '<h3><strong>' + coffee.name + '</strong></h3>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}



// function renderCoffees(coffees) {
//     var html = '';
//     for(var i = coffees.length - 1; i >= 0; i--) {
//         html += renderCoffee(coffees[i]);
//     }
//     return html;
// }

//swapped the decrementer to incrementer

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {

        if (selectedRoast === 'all') {
            filteredCoffees.push(coffee);
        }else if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });

    coffeeMenu.innerHTML = renderCoffees(filteredCoffees);
}

function updateCoffeesByName(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var qName = coffeeSearch.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        var coffeeLC = coffee.name.toLowerCase();
        if (coffeeLC.includes(qName)) {
            filteredCoffees.push(coffee);
        }
    });

    coffeeMenu.innerHTML = renderCoffees(filteredCoffees);
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

var coffeeMenu = document.querySelector('#coffeeMenu');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var coffeeSearch = document.querySelector('#coffeeSearch');
var addCoffeeButton = document.querySelector("#add-roast-submit");


coffeeMenu.innerHTML = renderCoffees(coffees);

// submitButton.addEventListener('click', updateCoffees);

roastSelection.addEventListener('change', updateCoffees)

coffeeSearch.addEventListener('input', updateCoffeesByName)

function addCoffee(e){
    e.preventDefault();
    var newCoffeeRoast = document.getElementById("add-roast");
    var newCoffeeName = document.getElementById("add-coffee-name");
    if (newCoffeeName.value !== "") {
        var coffeeObj = {
            id: coffees.length,
            name: newCoffeeName.value,
            roast: newCoffeeRoast.value
        };

            coffees.push(coffeeObj);
    }
    roastSelection.value = "all";
    updateCoffees(e)
            coffeeMenu.inneHTML = renderCoffees(coffees);

}
addCoffeeButton.addEventListener('click', addCoffee);




// coffeeSearch = document.addEventListener('input',function(query) {
//     coffees.foreach(function(coffee){
//         if (coffee.name.includes(query)){
//             // updateCoffees(coffee)
//
//         }
//
//     })
// })
