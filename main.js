"use strict"

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
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

let coffeeInput = document.querySelector('#coffee-name');
let secondCoffeeInput = document.querySelector('#custom-coffee-name');
let coffeeList = document.querySelector('#coffee-list');
let topSubmitBtn = document.querySelector('#top-submit-btn');
let selectedRoast = document.querySelector('#roast1');
let secondSelectedRoast = document.querySelector('#roast2');


// adds coffees to left column of screen
coffeeList.innerHTML = renderCoffees(coffees);
// Roast dropdown menu
selectedRoast.addEventListener('change', updateCoffees);
// Second Roast Dropdown Menu
secondSelectedRoast.addEventListener('change', updateCoffees);

// submit button for choosing a coffee
topSubmitBtn.addEventListener('click', updateCoffees);

// Coffee search input
coffeeInput.addEventListener('keyup', coffeeSearch);
// Second Coffee Search Input
secondCoffeeInput.addEventListener('keyup', coffeeSearch);



function renderCoffee(coffee) {
    let html = '<div class="row coffee-type">';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for(let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let roast = selectedRoast.value;
    let secondRoast = secondSelectedRoast.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === roast || coffee.roast === secondSelectedRoast) {
            filteredCoffees.push(coffee);
        }else if(roast === 'all' || roast === secondSelectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    coffeeList.innerHTML = renderCoffees(filteredCoffees);
}

function coffeeSearch(e){
    e.preventDefault();
    let roast = selectedRoast.value;
    let secondRoast = secondSelectedRoast.value;
    if(roast === 'all' || secondRoast === 'all'){
        allRoasts();
    }else if(roast === 'light' || secondRoast === 'light'){
        lightRoast();
    }else if(roast === 'medium' || secondRoast === 'medium'){
        mediumRoast();
    }else if(roast === 'dark' || secondRoast === 'dark'){
        darkRoast();
    }
}

function allRoasts() {
    let coffeeArr = [];
    let coffeeArr2 = [];
    console.log(coffeeInput.value)
    console.log(secondCoffeeInput.value);
    let input = (coffeeInput.value).toLowerCase();
    let input2 = (secondCoffeeInput.value).toLowerCase();

    coffees.forEach(function (coffee) {
        if (coffee.name.toLowerCase().includes(input)) {
            coffeeArr.push(coffee);
        }
    });
    coffees.forEach(function (coffee) {
        if (coffee.name.toLowerCase().includes(input2)) {
            coffeeArr2.push(coffee);
        }
    });
    coffeeList.innerHTML = renderCoffees(coffeeArr);
    coffeeList.innerHTML = renderCoffees(coffeeArr2);
}

function lightRoast (){
    let coffeeArr = [];
    let coffeeArr2 = [];
    let input = coffeeInput.value.toLowerCase();
    let input2 = secondCoffeeInput.value.toLowerCase();
    coffees.forEach(function(coffee){
        if(coffee.name.toLowerCase().includes(input) && coffee.roast === 'light'){
            coffeeArr.push(coffee);
        }
    });
    coffees.forEach(function(coffee){
        if(coffee.name.toLowerCase().includes(input2) && coffee.roast === 'light'){
            coffeeArr2.push(coffee);
        }
    });
    coffeeList.innerHTML = renderCoffees(coffeeArr);
    coffeeList.innerHTML = renderCoffees(coffeeArr2);
}

function mediumRoast (){
    let coffeeArr = [];
    let coffeeArr2 = [];
    let input = coffeeInput.value.toLowerCase();
    let input2 = secondCoffeeInput.value.toLowerCase();
    coffees.forEach(function(coffee){
        if(coffee.name.toLowerCase().includes(input) && coffee.roast === 'medium'){
            coffeeArr.push(coffee);
        }
    });
    coffees.forEach(function(coffee){
        if(coffee.name.toLowerCase().includes(input2) && coffee.roast === 'medium'){
            coffeeArr2.push(coffee);
        }
    });
    coffeeList.innerHTML = renderCoffees(coffeeArr);
    coffeeList.innerHTML = renderCoffees(coffeeArr2);
}

function darkRoast (){
    let coffeeArr = [];
    let coffeeArr2 = [];
    let input = coffeeInput.value.toLowerCase();
    let input2 = secondCoffeeInput.value.toLowerCase();
    coffees.forEach(function(coffee){
        if(coffee.name.toLowerCase().includes(input) && coffee.roast === 'dark'){
            coffeeArr.push(coffee);
        }
    });
    coffees.forEach(function(coffee){
        if(coffee.name.toLowerCase().includes(input2) && coffee.roast === 'dark'){
            coffeeArr2.push(coffee);
        }
    });
    coffeeList.innerHTML = renderCoffees(coffeeArr);
    coffeeList.innerHTML = renderCoffees(coffeeArr2);
}

function searchCoffeesInput() {
    let searchRoast = nameSelected.value.toUpperCase();
    let filteredCoffees = [];
    console.log(searchRoast);
    coffees.forEach(function(coffee) {
        if (coffee.name.toUpperCase().includes(searchRoast)) {
            filteredCoffees.push(coffee);
            console.log(filteredCoffees);
        }
    });
    coffeeList.innerHTML = renderCoffees(filteredCoffees);