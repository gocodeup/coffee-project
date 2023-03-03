"use strict"


// This function displays the table
function renderCoffee(coffee) {
    console.log(coffee) //  {id: 14, name: american, roast: light}
    // <div class="content col-6"><h2>american</h2></div>
    var html = '<div class="content col-6">'; //controls the table
    html += '<h2>' + coffee.name + '<span>' + coffee.roast + '</span>' + '</h2>'; //shows the name
    html += '</div>';
//    console.log(html);
    return html;
}

// Affects the array list

function renderCoffees(coffees) {
    var html = ''; //affects the table contents
    for(var i = 0; i <= coffees.length - 1; i++) { // looping through coffees array from 14 -> 0
        console.log(coffees[i]);
        html += renderCoffee(coffees[i]); //affects the table contents
    }
    console.log('html in renderCoffeeS: ', html)
//     <div class="content col-6"><h2>american</h2></div> <div class="content col-6"><h2>espresso</h2></div>
    return html; //tells it what to print/show if not included result is undefined
}

// This function affects search option, only renders what is selected from drop down menu

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = []; //affects the dropdown selection menu
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
//        console.log(option[0]);
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



// Searches and returns the first element of the coffee id, can manipulate to pull all 14 ids

var tbody = document.querySelector('#coffees');


var submitButton = document.querySelector('#submit');

// Drop down menu
var roastSelection = document.querySelector('#roast-selection');

//make an element
var searching = document.querySelector('#search-bar');
//when a key is pressed down and released
searching.addEventListener('keyup', (e) =>{
    e.preventDefault();
    var searched = e.target.value;

    var array = [];


//           console.log("searched input value:" +  searched);

    for(var i = 0; i <= coffees.length - 1; i++){

        if(coffees[i].name.toLowerCase() === searched.toLowerCase()){
//        This === will only be exact matches
// did we learn any string methods perhaps that could search part of a name? food for thought / v2 starts with
            array.push(coffees[i]);
        } else if(coffees[i].name.toLowerCase().includes(searched)){
             array.push(coffees[i]);
        }
    }


//    console.log(array);

    tbody.innerHTML = renderCoffees(array);


})
//var searchInput = document.querySelector(["data-search"]);
//searchInput.addEventListener("input", (e) => {
//    var value = e.target.value;
//    console.log(value);
//})

//var searchInput = document.forms['data-search'].querySelector('input');
//searchInput.addEventListener('keyup', function(e){
//    var term = e.target.value.toLowerCase();
//    var names = coffees.name;
//    var filteredCoffees = [];
//    coffees.forEach(function(coffee) {
//            if (names === terms) {
//                filteredCoffees.push(coffee);
//            }
//        });
//        tbody.innerHTML = renderCoffees(filteredCoffees);
//})

//var names = document.querySelector(".input");
// Changes innerHTML once you select the roast
tbody.innerHTML = renderCoffees(coffees); // <div class="content col-6"><h2>american</h2></div>
// This is for the Coffee Name iput bar (Will use this for "Name" for Add a Coffee Section
roastSelection.addEventListener("change", updateCoffees);
submitButton.addEventListener('click',function(e){
{

    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
//    up here let's add in some tests for "what is roastSelection"
    var filteredCoffees = []; //affects the dropdown selection menu
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
        else if (selectedRoast === "all"){
            filteredCoffees.push(coffee);
        }

    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
});


// TO DO LIST

// Add functionality to search through the coffees by name, and display only the coffees that match the provided search term (You will need to add an input field to the existing form for this)

// Add functionality to update the displayed coffee as the user types into the search box, or as soon as they select an option from the select.


var submitButton2 = document.querySelector('#submit2');
submitButton2.addEventListener('click',function(e){
{

    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
//    up here let's add in some tests for "what is roastSelection"
    var filteredCoffees = []; //affects the dropdown selection menu
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
        else if (selectedRoast === "all"){
            filteredCoffees.push(coffee);
        }

    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
});


var submit2 = document.querySelector('#submit2');
submit2.addEventListener('click', (e) =>{ // on click of submit add coffee
    e.preventDefault();
    // grab values of dropdown & input text
    var roastselection2 = document.querySelector('#roast-selection2').value;
    var input = document.querySelector('#input').value;
        console.log(roastselection2);
        console.log(input);

        // create new coffee object with those values
        console.log(coffees.length);
        var addedCoffee = {id: coffees.length + 1, name:input, roast:roastselection2}
        // push that new object into existing coffees
         coffees.push(addedCoffee);
        // render coffees ( updated coffees list )
//    coffees.push(JSON.stringify({id:++coffees.id, name:input, roast:roastselection2}))
//coffees[coffees.length] = JSON.stringify({id: coffees.length, name: input, roast:roastselection2})


    tbody.innerHTML = renderCoffees(coffees);
})