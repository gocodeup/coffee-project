"use strict"

function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    html += '<td>' + coffee.id + '</td>';
    html += '<td>' + coffee.name + '</td>';
    html += '<td>' + coffee.roast + '</td>';
    html += '</tr>';

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

// var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

// tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);


// display coffe name and roast in fancy divs

function renderCoffeeUpdated(coffee) {
    var html = '<div>';
    html += '<h1 >' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';
    return html;
}

function renderCoffeesUpdated(coffees){
    let html = '';
    coffees.forEach(function(coffee){
        html += renderCoffeeUpdated(coffee);
    });

    return html;
}
//console.log(renderCoffeeUpdated(coffees[0]));

let coffeeList = document.getElementById('coffeeList');

coffeeList.innerHTML= renderCoffeesUpdated(coffees);
let coffeeChoice = document.getElementById("coffeeSearch");
coffeeChoice.addEventListener("change", updateCoffeeList);
function updateCoffeeList() {
    let coffeeSelected = coffeeChoice.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        // console.log(coffeeSelected[0] + coffee.name[0]);
        // for ( let i = 0; i < coffeeSelected.length; i++){
        // if(coffeeSelected[0] === coffee.name[0]){
        //      filteredCoffees.push(coffee);
        //  }});
        if (filterHelper(coffeeSelected, coffee)) {
            filteredCoffees.push(coffee);
        }
    })
    console.log(filteredCoffees);
    coffeeList.innerHTML= renderCoffeesUpdated(filteredCoffees);

}

function filterHelper(userInput, coffee){
    for(let i = 0; i < userInput.length; i++){
        // ToDo bonus #2: case insensitive (added .toLowerCase() in if statement)
        if(userInput[i].toLowerCase() !== coffee.name[i].toLowerCase()){
            return false;}
    };
    // ToDo bonus #1: select "all" roasts
    if(roastSelected.value !== "all"){
        // ToDo #4: Select box for roast type
        if(roastSelected.value !== coffee.roast) {
            return false;
    }};
    return true;
}
let roastSelected = document.getElementById("roast-select");
console.log(roastSelected.value);
roastSelected.addEventListener("change", updateCoffeeList);