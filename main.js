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

//updated as per instructions of Readme
function renderCoffee(coffee) {
    let html = '<div class="d-flex align-items-end ">'
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p class="ms-3 roast-type">' + coffee.roast + '</p>';
    html += '</div>'
    return html;
}
//Notes:
//it will return something like this: <div class=coffee><h1>coffee.name</h1><p class= "ms-3">coffee.roast</p></div>


// This function will loop through renderCoffee, in the event there is an array
//Any array has to be reversed later
function renderCoffees(coffees) {
    let html = '';
    for(let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}




//Filters Hybrid: Selection Option #1
function updateCoffees(e) {
    e.preventDefault();
    let selectedRoast = roastSelection.value;
    let searchTerm = searchCoffee.value.toLowerCase();
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast && coffee.name.toLowerCase().includes(searchTerm)){
            filteredCoffees.push(coffee);
        }
    });
    coffeeDiv.innerHTML = renderCoffees(filteredCoffees);

    if(selectedRoast === 'all') {
        coffeeDiv.innerHTML = renderCoffees(coffees);
        }
}
//Notes:
// This is a hybrid of both filter #1 & filter #2.
// This will prevent "undefined" when switching between all/light/medium/dark


// //Filters #1: only by Selection Option #1
// function updateCoffees(e) {
//     e.preventDefault();
//     let selectedRoast = roast.value;
//     let filteredCoffees = [];
//     coffees.forEach(function(coffee) { //individualises to coffee
//         if (coffee.roast === selectedRoast) {
//             filteredCoffees.push(coffee);
//         }
//     });
//     coffeeDiv.innerHTML = renderCoffees(filteredCoffees);
//
//     if(selectedRoast === 'all') {
//         coffeeDiv.innerHTML = renderCoffees(coffees);
//     }
// }




// //Filters #2: only by text-input #1
// function coffeeSearch(e) {
//     e.preventDefault();
//     let searchTerm = searchCoffee.value.toLowerCase();
//     let filteredCoffees = [];
//     coffees.forEach(function(coffee){
//         if (coffee.name.toLowerCase().includes(searchTerm)){
//             filteredCoffees.push(coffee);
//         }
//     })
//     coffeeDiv.innerHTML = renderCoffees(filteredCoffees);
// }

// +++++++++++++++++++++++++++++++ADD COFFEE SECTION UNFINISHED++++++++++++++++++++++++++++++++

//capitalizes each first letter of a word
function titleCase(str) {
    let splitStr = str.toLowerCase().split(' ');  // I want a lowercase str split @ spaces and converted into an array
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1); //
    }

    return splitStr.join(' ');
}

//Source:
// https://stackoverflow.com/questions/32589197/how-can-i-capitalize-the-first-letter-of-each-word-in-a-string-using-javascript

//Hypothesis #1
// function addCoffeeItem(e) {
//     e.preventDefault();
//     let newCoffeeObj = {
//         id: coffees.length + 1,
//         name: titleCase(addCoffeeName.value),
//         roast: roastAdd.value
//     };
//     coffees.push(newCoffeeObj);
//     coffeeDiv.innerHTML = renderCoffees(coffees);
// }

// Notes:
//I originally used "renderCoffee" rather than "renderCoffees, so I kept getting undefined.  Problem resolved.
// I hate the naming conventions!!!!!!!!!!!



//Hypothesis #2
function addCoffeeItem(e) {
    e.preventDefault();
    let id = coffees.length + 1;
    let name =  titleCase(addCoffeeName.value);
    let roast =  roastAdd.value;
    coffees.push({id, name, roast}); //pushing the newCoffeeObj within the empty newCoffee Array
    console.log(coffees);
    coffeeDiv.innerHTML = renderCoffees(coffees);
}

//NOTES:
//It works as well!  However, the naming convention gave issue.
//Replaced "renderCoffee" with "renderCoffees"
//I REALLY hate the naming conventions!




//Option Selector #1
let roastSelection = document.querySelector('#roast-selection'); //given
roastSelection.addEventListener("change",updateCoffees); //given, but modified to change


//Button #1
let submitButton = document.querySelector('#submit'); //given
submitButton.addEventListener('click', updateCoffees); //given


//text input #1
let searchCoffee= document.querySelector('#coffee-search'); //given
searchCoffee.addEventListener('keyup', updateCoffees); //created

// Notes:
//Keydown & Keypress do not work for the addEventListener
//The addEventListener is linked to the hybrid filter function, but if one is wanting to use both independent filter function:
// (1) comment out the hybrid function and reinstate both filter #1 (updateCoffees) & filter #2 (coffeeSearch) functions
// (2) for "searchCoffee.addEventListener", switch function to coffeeSearch.

coffeeDiv.innerHTML = renderCoffees(coffees); //given, modified tbody.innerHTML to coffeeDiv




// +++++++++++++++++++++++++++++ADD-COFFEE++++++++++++++++++++++++++++++++++

//Selection Option #2
// it is click b/c we are submitting the request to add to "Coffees" - object array
let roastAdd = document.querySelector('#roast-add'); //created
// roastAdd.addEventListener("click", addCoffeeItem);//created

//Note:
// addEventListener was not needed for roastAdd.
// The event only needs to be fired once, not three times.
// We do not need it to when the option selector is selected.

//text input #2
let addCoffeeName= document.querySelector('#coffee-query'); //created
// addCoffeeName.addEventListener('click',addCoffeeItem); //created

//Note:
// addEventListener was not needed for addCoffeeName.
// The event only needs to be fired once, not three times.
// We do not need it with the text-input.

//Button #2
let addButton = document.querySelector('#add-button'); //created
addButton.addEventListener('click', addCoffeeItem); //created

//Note:
// addEventListener was  needed for add.
// The event only needs to be fired once, not three times.
// We do need it to fire when the button us submitted.









