"use strict";
var coffeeName = document.getElementById("coffeename");
coffeeName.addEventListener("input", function () {
    var userinput = coffeeName.value;
    console.log(userinput);
    console.log("it is alive");
    buildSearchHTML(userinput)


});
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
    {id: 14, name: 'French', roast: 'dark'}
];

function buildSearchHTML(searchInput) {

    // Declare variables
    var displayDiv = document.getElementById("coffeetypes");
    displayDiv.innerHTML = "";

    // Loop through all list items, and hide those who don't match the search query
    for (var i = 0; i < coffees.length; i++) {
        var coffee = coffees[i];
        var upperCoffee = coffee.name.toUpperCase();
        var upperSearch = searchInput.toUpperCase();

        if (upperCoffee.indexOf(upperSearch) > -1) {
            console.log(coffee);

            displayDiv.innerHTML += "<div>" + coffee.name + " " + coffee.roast + "</div>";

    }
}}

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
//     {id: 14, name: 'French', roast: 'dark'}
// ];



function renderCoffees(coffees){
    var html = "";
    for (var i = 0; i <= coffees.length-1; i++){
        html += renderCoffee(coffees[i]);
    }
    return html;
}

// var displayDiv = document.getElementById("coffeetypes");
//
// displayDiv.innerHTML = renderCoffees(coffees);



function renderCoffee(coffee) {
    var html = '<div>' + coffee.name + " " + coffee.roast + '</div>';
    return html;
}

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
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
            tbody.innerHTML = renderCoffees(filteredCoffees);
        }
        if (selectedRoast === "all"){
            tbody.innerHTML = renderCoffees(coffees);
        }
    });
}


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide

var tbody = document.querySelector('#coffeetypes');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
