"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee d-flex align-items-baseline">';
    html += '<div class="card">';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}


function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;

    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        // if (coffee.roast === selectedRoast) {
        //     filteredCoffees.push(coffee);
        // }
        coffee.name.foreach(function (coffeeName){
            console.log("test test");
        })
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
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

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
tbody.innerHTML = renderCoffees(coffees);
submitButton.addEventListener('click', updateCoffees);
const searchCoffee = document.querySelector("[data-search]")

// This get value from search box HTML
// searchCoffee.addEventListener("input", (e) => {
//     const value = e.target.value;
// });

// coffees.forEach(function(name1) {
//     searchCoffee.addEventListener("keydown", (e) => {
//         const value = e.target.value;
//         if (name1.name === value) {
//             console.log("this is correct");
//         } else {
//             console.log("this int NOT");
//         }
//     });
// });

searchCoffee.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    coffees.forEach(coffee => {
        const coffeeSearchBar =
        coffee.name.toLowerCase().includes(value) || coffee.roast.toLowerCase().includes(value)
        coffees.id.classList.toggle('hide', !coffeeSearchBar)
    })

});

