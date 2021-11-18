"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';
    console.log(html);
    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for (var i = 0; i < coffees.length; i++){
        console.log(coffees[i]);
        html += renderCoffee(coffees[i]);
    }
    console.log(html);
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
    div.innerHTML = renderCoffees(filteredCoffees);
    console.log(div);
}

// //function search for coffee names
// function updateCoffeeNames(e){
//     e.preventDefault();
//     var selectedCoffeeName = coffeeName.value;
//     console.log(selectedCoffeeName);
//     var filteredCoffeeNames = [];
//     for (var i = 0; i <= coffees.length; i++) {
//         if ([i].name === selectedCoffeeName) {
//             filteredCoffeeNames.push(coffees[i]);
//             console.log(coffees[i].name);
//         }
//     }
//         console.log(filteredCoffeeNames);
//         div.innerHTML = renderCoffees(filteredCoffeeNames);
//     // coffees.forEach(function(coffee){
//     //     if(coffee.name === selectedCoffeeName){
//     //         filteredCoffeeNames.push(coffee);
//     //     }
//     // })
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

var div = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var clickOption = document.querySelector("#roast-selection")
var roastSelection = document.querySelector('#roast-selection');
// var coffeeName = document.querySelector("#coffeeName");


div.innerHTML = renderCoffees(coffees);
clickOption.addEventListener("change", updateCoffees);
submitButton.addEventListener('click', updateCoffees);

