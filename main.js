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
let coffeeList = document.querySelector('#coffee-list');
let topSubmitBtn = document.querySelector('#top-submit-btn');
let selectedRoast = document.querySelector('#roast1');
let newRoast = document.querySelector('#roast2');
let newCoffee = document.querySelector('#custom-coffee-name');
let bottomSubmitBtn = document.querySelector('#bottom-submit-btn');


// adds coffees to left column of screen
coffeeList.innerHTML = renderCoffees(coffees);
// Roast dropdown menu
selectedRoast.addEventListener('change', updateCoffees);
// submit button for choosing a coffee
topSubmitBtn.addEventListener('click', updateCoffees);
// Coffee search input
coffeeInput.addEventListener('keyup',  coffeeSearch);
// submit button for adding new coffee
bottomSubmitBtn.addEventListener('click', createNewCoffee);


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
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === roast) {
            filteredCoffees.push(coffee);
        }else if(roast === 'all'){
            filteredCoffees.push(coffee);
        }
    });
    coffeeList.innerHTML = renderCoffees(filteredCoffees);
}

function coffeeSearch(e){
    e.preventDefault();
    let roast = selectedRoast.value;
    if(roast === 'all'){
        allRoasts();
    }else if(roast === 'light'){
        lightRoast();
    }else if(roast === 'medium'){
        mediumRoast();
    }else if(roast === 'dark'){
        darkRoast();
    }
}

function allRoasts() {
    let coffeeArr = [];
    console.log(coffeeInput.value)
    let input = (coffeeInput.value).toLowerCase();

    coffees.forEach(function (coffee) {
        if (coffee.name.toLowerCase().includes(input)) {
            coffeeArr.push(coffee);
        }
    });
    coffeeList.innerHTML = renderCoffees(coffeeArr);
}

function lightRoast (){
    let coffeeArr = [];
    let input = coffeeInput.value.toLowerCase();
    coffees.forEach(function(coffee){
        if(coffee.name.toLowerCase().includes(input) && coffee.roast === 'light'){
            coffeeArr.push(coffee);
        }
    });
    coffeeList.innerHTML = renderCoffees(coffeeArr);
}

function mediumRoast (){
    let coffeeArr = [];
    let input = coffeeInput.value.toLowerCase();
    coffees.forEach(function(coffee){
        if(coffee.name.toLowerCase().includes(input) && coffee.roast === 'medium'){
            coffeeArr.push(coffee);
        }
    });
    coffeeList.innerHTML = renderCoffees(coffeeArr);
}

function darkRoast (){
    let coffeeArr = [];
    let input = coffeeInput.value.toLowerCase();
    coffees.forEach(function(coffee){
        if(coffee.name.toLowerCase().includes(input) && coffee.roast === 'dark'){
            coffeeArr.push(coffee);
        }
    });
    coffeeList.innerHTML = renderCoffees(coffeeArr);
}
function createNewCoffee(e){
    e.preventDefault();
    let coffeeName = newCoffee.value;
    let roast = newRoast.value;

    let coffeeArr = coffeeName.split(" ");
    let coffeeString = '';

    // coffeeArr[i][0].toUppercase takes the first letter of the word and makes it uppercase
    // coffeeArr[i].slice(1) + " " creates a new array without the first word deleted
    for(let i = 0; i < coffeeArr.length; i++){
        coffeeString += coffeeArr[i][0].toUpperCase() + coffeeArr[i].slice(1) + " ";
    }
    coffees.push({
        id: coffees.length + 1,
        name: coffeeString,
        roast: roast
    });

    coffeeList.innerHTML = renderCoffees(coffees);
}







