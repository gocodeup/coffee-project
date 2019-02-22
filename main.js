"use strict";

function randomColor() {
    var randomNum = Math.floor(Math.random() * 4);

    var colors = [
        "#FF6F61",
        "#F1EA7F",
        "#95DEE3",
        "#EDCDC2"
    ];

    return colors[randomNum];
}

function coffeeNameColor(){
    return '<h3 class="p-0" style="color: ' + randomColor() + '">';
}

function renderCoffee(coffee) {
    var html = '<div class="col-12 col-md-6 p-0">'; /** this is the entire container **/
    html += coffeeNameColor() + coffee.name + "</h3>";
    html += '<p class="pr-2">' + coffee.roast + "</p>";
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
    e.preventDefault(); // don't submit the form, we just want to update the data

    var filteredCoffees = [];

    var selectedRoast = roastSelection.value;
    if (selectedRoast === "all") {
        filteredCoffees = coffees;
    } else {
        coffees.forEach(function (coffee) {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }
        });
    }

    tbody.innerHTML = renderCoffees(filteredCoffees);
}

/** This function dynamically checks if what is in the text box
 * (coffeeSelection.value) matches any names of coffee and displays it**/
function coffeeSearch(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data

    var filteredCoffees = [];

    coffees.forEach(function (coffee) {
        if (coffeeSelection.value.toLowerCase() === coffee.name.toLowerCase().substring(0, coffeeSelection.value.length)) {
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

    var tbody = document.querySelector('#coffees');
    var submitButton = document.querySelector('#searchSubmit');
    var roastSelection = document.querySelector('#roast-selection');
    var coffeeSelection = document.querySelector("#coffee-selection");

    tbody.innerHTML = renderCoffees(coffees);

    // submitButton.addEventListener('click', updateCoffees);
    roastSelection.addEventListener("change", updateCoffees);
    coffeeSelection.addEventListener("keyup", coffeeSearch);






// function coffeeKeyup() {
//     var input, filter;
//     input = document.getElementById('coffee-selection');
//     filter = input.value.toUpperCase();
//
//     coffees.forEach(function(coffee) {
//         if (filter.toLowerCase() === coffee.name.toLowerCase()) {
//             renderCoffee(coffee);
//         }
//     });
// }
