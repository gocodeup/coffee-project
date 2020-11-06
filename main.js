(function () {



"use strict"

function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    //removed Id
    html += '<td>' + coffee.name + '</td>';
    html += '<td>' + coffee.roast + '</td>';
    html += '</tr>';

    return html;
}

function renderRoasts(roasts) {
    //removed Id
    return '<h5 class="card-title roast">' + roastTypes.roast + '</h5>';
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i <= coffees.length -1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}



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

var roastTypes = [{
    roast: 'light'
}, {
    roast: 'medium'
}, {
    roast: 'dark'
}]


var tbody = document.querySelector('#coffees');
var roastButton = document.querySelectorAll('.select-roast-btn');
var roastSelection = document.querySelector('#roast-selection');
var roastTittle = document.querySelectorAll(".roast");
var roastCard = document.querySelectorAll(".coffee-card");
var coffeeBtns = document.querySelectorAll(".coffee-select");
var dark = document.getElementById("dark-btn");
var medium = document.getElementById("medium-btn");
var light = document.getElementById("light-btn");

    console.log(coffeeBtns);

//     function radioToggle() {
//     for (let coffee of coffeeBtns) {
//
//     }
// }

    dark.onclick = () => {
        coffeeBtns[0].classList.toggle("coffee-select")
    }

    dark.onclick = () => {
        coffeeBtns[1].classList.toggle("coffee-select")
    }

    dark.onclick = () => {
        coffeeBtns[2].classList.toggle("coffee-select")
    }
    // for (let button of roastButton) {
    //     button.addEventListener("click", () => {
    //         switch (button) {
    //             case dark:
    //                 coffeeBtns[0].classList.toggle("coffee-select");
    //                 break;
    //         }
    //         switch (button) {
    //             case medium:
    //                 coffeeBtns[1].classList.toggle("coffee-select");
    //                 break;
    //         }
    //         switch (button) {
    //             case light:
    //                 coffeeBtns[2].classList.toggle("coffee-select");
    //                 break;
    //         }
    //
    //     });
    //
    // }


// submitButton.addEventListener("click", displayCard)

    // tbody.innerHTML = renderCoffees(coffees);

// submitButton.addEventListener('click', )




})();