// "use strict"
//
// function renderCoffee(coffee) {
//     var html = '<h1>' + coffee.name + '</h1>';
//     html += '<p>' + coffee.roast + '</p>';
//
//
//     return html;
// }
//
// function renderCoffees(coffees) {
//     var html = '';
//     for (let i = coffees.length - 1; i >= 0; i--) {
//         html += renderCoffee(coffees[i])
//     }
//     return html;
// }
//
// function updateCoffees(e) {
//     e.preventDefault(); // don't submit the form, we just want to update the data
//     console.log(roastSelection)
//     var selectedRoast = roastSelection.value;
//     console.log(roastSelection.value)
//     var filteredCoffees = [];
//     coffees.forEach(function (coffee) {
//         if (coffee.roast === selectedRoast) {
//             filteredCoffees.push(coffee);
//         }
//     });
//     console.log(filteredCoffees)
//     tbody.innerHTML = renderCoffees(filteredCoffees);
// }
//
//
//
//  // let CoffeeVal = document.getElementById('inputbox');
//  //     CoffeeVal.addEventListener("keyup",function() {
//  //     let StoreVar = CoffeeVal.value
//  //
//  // }
//
// // from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
// var coffees = [
//     {id: 1, name: 'Light City', roast: 'light'},
//     {id: 2, name: 'Half City', roast: 'light'},
//     {id: 3, name: 'Cinnamon', roast: 'light'},
//     {id: 4, name: 'City', roast: 'medium'},
//     {id: 5, name: 'American', roast: 'medium'},
//     {id: 6, name: 'Breakfast', roast: 'medium'},
//     {id: 7, name: 'High', roast: 'dark'},
//     {id: 8, name: 'Continental', roast: 'dark'},
//     {id: 9, name: 'New Orleans', roast: 'dark'},
//     {id: 10, name: 'European', roast: 'dark'},
//     {id: 11, name: 'Espresso', roast: 'dark'},
//     {id: 12, name: 'Viennese', roast: 'dark'},
//     {id: 13, name: 'Italian', roast: 'dark'},
//     {id: 14, name: 'French', roast: 'dark'},
// ];
//
// var tbody = document.querySelector('#coffees');
// var submitButton = document.querySelector('#submit');
// var roastSelection = document.querySelector('#roast-selection');
//
// let coffeeDiv = document.querySelector('#coffee-div');
//
// coffeeDiv.innerHTML = renderCoffees(coffees);
//
//
//
//
//
//
//
// tbody.innerHTML = renderCoffees(coffees)
//
//
//
//
// submitButton.addEventListener("click", updateCoffees);


"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for (var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
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


let CoffeeName = document.getElementById('inputbox')

CoffeeName.addEventListener("keyup", function () {
    let InputValue = CoffeeName.value.toUpperCase();
    var filteredCoffees = [];

    for (let i = 0; i < coffees.length; i++) {
        if (coffees[i].name.toUpperCase().includes(InputValue)) {
            filteredCoffees.push(coffees[i])

        }
    }

    tbody.innerHTML = renderCoffees(filteredCoffees);


})

/*
// 1. Grab the Input by the element Id and store it in a varibale

   2. Add an even listner to the variable

   3. The listner should add the value to back to the same Object that has the array and we will use a for loop to do that


*/

let NewCoffee = document.getElementById('exampleInputPassword1')

let btn = document.getElementById('button2')

btn.addEventListener('click',
    function () {
        let newCoffee = {
            id: "",
            name: '',
            roast: ''
        }
        coffees.push(newCoffee);
        tbody.innerHTML = renderCoffees(filteredCoffees);


    });

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
