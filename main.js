"use strict"

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [ //used to store all the coffee into a variable
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
//used in the first form
var tbody = document.querySelector('#coffees'),
    submitButton1 = document.querySelector('#submit'),
    roastSelection = document.querySelector('#roast-selection');
//custom var
var coffeeName = document.querySelector('#name-selection'),
    coffeeAddition = document.querySelector('#roast-addition'),
    nameAddition = document.querySelector('#name-addition'),
    submitButton2 = document.querySelector('#submit1');

tbody.innerHTML = renderCoffees(coffees);
// submitButton1.addEventListener('click', updateCoffees);//first button
roastSelection.addEventListener('input', updateCoffees);
coffeeName.addEventListener('input', updateCoffees);
submitButton2.addEventListener('click', createCoffee);
//temp function
function createCoffee(){
    var newRoast = coffeeAddition.value,
        newName = nameAddition.value,
        idCoffee = coffees.length + 1,
        // ||above outlines  the established parameters|| for the ||new coffee object below||
        newCoffee = {
            id: idCoffee,
            name: newName,
            roast: newRoast
        };
    coffees.push(newCoffee);
    tbody.innerHTML = renderCoffees(coffees);
    localStorage.setItem('coffees', JSON.stringify(coffees));
    document.querySelector("form").reset()
    var form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // prevent the form from submitting
        form.reset(); // clear all the form fields
    });



}
const retrievedObject = JSON.parse(localStorage.getItem("coffees"));
if(retrievedObject !== null) {
    coffees = retrievedObject;
    tbody.innerHTML = renderCoffees(coffees);
}


//Functions here -------------
function renderCoffee(coffee) {
    return `<div class="coffee">
              <h2>${coffee.name}</h2>
              <p>${coffee.roast}</p>
            </div>`;
} //this is used to input the proper HTML tags (template literals make it easier to read/manipulate)

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault();
    var selectedRoast = roastSelection.value,
        filteredCoffees = [];
    if ((selectedRoast === "all")&&(coffeeName.value === '')) {
        filteredCoffees = coffees;
    } else {
        filteredCoffees = coffees.filter(coffee => {
            return ((coffee.roast === selectedRoast) && (coffeeName.value === '')) || ((coffeeName.value !== '')&&(coffee.name.toLowerCase().startsWith(coffeeName.value.toLowerCase())));
        });
    }
    tbody.innerHTML = renderCoffees(filteredCoffees);


}//this filters the list to show only what is desired.

// document.querySelectorAll("#email-form.div-email").addEventListener("submit", function(e) {
//     e.preventDefault();
//     this.style.display = "none";
// });
// $(document).ready(function() {
//     const form = document.querySelector("#email-form.div-email");
//     form.addEventListener("submit", function(e) {
//         e.preventDefault();
//         this.style.display = "none";
//     });
// });



// function shiftElementsOver(arr) {
//     let last = arr[arr.length - 1];
//     for (let i = arr.length - 1; i > 0; i--) {
//         arr[i] = arr[i - 1];
//     }
//     arr[0] = last;
//     return arr;
// }
//
// console.log(shiftElementsOver(["mary","john","tito"]))