"use strict"

// renderCoffee function is concatenating "coffee.name" & "coffee.roast"

function renderCoffee(coffee) {
   let html = '<div class="coffee">';
    // html += '<p>' + coffee.id + '</p>';
    html += '<p>' + coffee.name + '</p>';
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
// function filterCoffeebyRoast () {
//
// });

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        console.log(coffee.roast)
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
        tbody.innerHTML = renderCoffees(filteredCoffees);
    })
}

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


// Code to search for specified coffee. //
let userInput = document.getElementById('CoffeeSearchBar')
userInput.addEventListener("keyup", function () {

    let typedInput = userInput.value.toUpperCase();
    let filteredCoffees = [];
    for(let i = 0; i < coffees.length; i++){
        if(coffees[i].name.toUpperCase().includes(typedInput)){
            filteredCoffees.push(coffees[i]);
        }
    }
tbody.innerHTML = renderCoffees(filteredCoffees);
})

let userInput1 = document.getElementById('addCoffee') // text entry name
let userInput2 = document.getElementById('add-coffee') // dropdown roast
console.log(userInput2);

// userInput1.push(coffees)

let tbody = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');
let submitButton1 = document.querySelector('#submit1');
tbody.innerHTML = renderCoffees(coffees);
submitButton.addEventListener('click', updateCoffees);

//coffeeID = 15;


submitButton1.addEventListener("click" , addCoffee);
userInput1.addEventListener('change' , addCoffee);

    /// tsk in coffee name from addCoffee in user input query
    /// tsk in coffee roast from add-coffee in user input query
    // let cofee = new Object()
    // let coffee = {}
    // coffee.id =coffeeID


function addCoffee(){

    let coffeeName = userInput1.value;
    let coffeeRoast = userInput2.value;
    let coffee = {name: coffeeName, roast: coffeeRoast}
    coffees.push(coffee)
    console.log(coffee);
    // userInput1.addEventListener('change' , addCoffee);

}