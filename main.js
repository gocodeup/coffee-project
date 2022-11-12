"use strict"

//+++++++++++++++++++++++++++++++++++++++++---LEFT---++++++++++++++++++++++++++++++++++++++

//Renders coffee on to the empty div
function renderCoffee(coffee) {
    let html = '<tr class="coffee">';
    html += '<td>' + coffee.id + '</td>';
    html += '<h1 class="coffee-name">' + coffee.name + '</h1>';
    html += '<p class="roast">' + coffee.roast + '</p>';
    html += '</tr>';

    return html;
}


function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}


//+++++++++++++++++++++++++++++++++++++++++---TOP---++++++++++++++++++++++++++++++++++++++

//empty array that collects
let filteredCoffees = [];

//coffee container to display results
let coffeeContainer = document.getElementById('coffee-list');


//Select-options for Light/Mid/Large
let roast = document.getElementById("roast-selection");
//Event Listener for changes when switching Light/Mid/Large
roast.addEventListener('change', updateCoffees);


//Button #1
let searchSubmit = document.getElementById("search-btn");
//Event Listener for clicking submit for text-input.
searchSubmit.addEventListener("click", updateCoffees);

//+++++++++++++++++++++++++++++++++++++++---Bottom---+++++++++++++++++++++++++++++++++++++++


//Button #2
let searchCoffee = document.getElementById("coffee-search");


let evt = "";
const input = document.querySelector('input');


//Object-Array of coffee
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





//Logs users key strokes
function updateValue(e) {
    console.log(e.target.value)
    // return e.target.value;
}


function updateCoffees(e) {
    //it prevents the event from extending past the parameter of which it is assigned
    e.preventDefault(); // don't submit the form, we just want to update the data
    //stores the lowercase value of the light/mid/dark
    let selectedRoast = roast.value.toLowerCase()
    for (let i = 0; i < coffees.length; i++)
    {
        //if roast type === roast value L/M/D
        if (coffees[i].roast == selectedRoast) {
            //if light/mid/dark then "push" coffee with that value
            filteredCoffees.push(coffees[i]);
        }
        ///if roast type === roast value L/M/D
        if(selectedRoast === "all"){
            filteredCoffees.push(coffees[i]);
        }
    }

    
    coffeeContainer.innerHTML = renderCoffees(filteredCoffees);
    return filteredCoffees;

}








