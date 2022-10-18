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
// Refactoring coffees into localStorage for bonus #3, persisting data between page reloads
// on initial page load, set given coffees array to localStorage
// All modifications to data will happen in localStorage

// if localstorage does not have a copy of coffees, then set localStorage.localCoffees = coffees
// otherwise, do not overwrite existing array in localStorage.localCoffees
if(localStorage.getItem("localCoffees") == null){
    localStorage.setItem("localCoffees", JSON.stringify(coffees));
}

let jsCoffees; // javascript variable to act as temp storage for localStorage array

updateJsCoffees(); // update jsCoffees to match localStorage
// pull localStorage.localCoffees to jsCoffees;
function updateJsCoffees(){
    jsCoffees = JSON.parse( localStorage.getItem("localCoffees"));
}
// update localStorage with jsCoffees
function updateLocalCoffees(){
    localStorage.setItem("localCoffees", JSON.stringify(jsCoffees));
}

/* localStorage procedure:
* when adding a coffee: jsCoffees.push(newCoffee) then updateLocalCoffees()
* To access localStorage: updateJsCoffees(), then use jsCoffees
* */


// Todo #1: Use divs instead of table
function renderCoffeeUpdated(coffee) {
    var html = '<div>';
    html += '<h1 >' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';
    return html;
}

function renderCoffeesUpdated(coffeesToRender){
    let html = '';
    //console.log(typeof inputCoffeeArray);
    // getting coffee array from localStorage:
    // ToDo #2: Initially display coffees in ascending ID order
    coffeesToRender.forEach(function(coffee){
        // console.log(coffee);
        html += renderCoffeeUpdated(coffee);
    });

    return html;
}

let coffeeList = document.getElementById('coffeeList');
updateJsCoffees();
coffeeList.innerHTML= renderCoffeesUpdated(jsCoffees);
let coffeeChoice = document.getElementById("coffeeSearch");
// changed event type to keyup for expected data:
coffeeChoice.addEventListener("keyup", updateCoffeeList);

function updateCoffeeList() {
    let coffeeSelected = coffeeChoice.value;
    let filteredCoffees = [];
    // getting coffee array from localStorage:
    updateJsCoffees();
    jsCoffees.forEach(function(coffee) {
        if (filterHelper(coffeeSelected, coffee)) {
            filteredCoffees.push(coffee);
        }
    })
    coffeeList.innerHTML= renderCoffeesUpdated(filteredCoffees);
}

// ToDo #3: filter the coffees being displayed by user inputs
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
// console.log(roastSelected.value);
roastSelected.addEventListener("change", updateCoffeeList);


// Todo Bonus 3: Add new Coffee from user Input

/*
* new form with Name and Roast inputs ✅
* form submit button ✅
* that form needs getelementbyid ✅
* make sure input is valid (coffee name doesn't have number, ect) ✅
* push new coffee object to coffees variable ✅
* updateCoffees() ✅
* Persist between page loads/refresh ✅
* */

let newCoffeeSubmit = document.getElementById("newCoffeeSubmit");
let newCoffeeName = document.getElementById("newCoffeeName");
let newCoffeeRoast = document.getElementById("newCoffeeRoast");

newCoffeeSubmit.addEventListener("click", addCoffeeToCoffees);

// submit button event listener on click => get data from form
function addCoffeeToCoffees(){

    updateJsCoffees();
    let coffee = {id: jsCoffees.length + 1, name: newCoffeeName.value, roast: newCoffeeRoast.value}
    if(coffee.name.length > 0 && coffee.roast.length > 0){
        // update jsCoffees from local storage with updateJsCoffees() function
        updateJsCoffees()
        // update coffees with new coffee
        jsCoffees.push(coffee);
        // set localStorage.coffees to new coffees array
        updateLocalCoffees();

        // getting coffee array from localStorage (testing):
        // console.log(JSON.parse(localStorage.getItem("coffees")));

    } else {
        displayError("invalid coffee name or roast selection");
    }

    updateCoffeeList();
}

function displayError(errorMessage){
    console.log(errorMessage);
}