"use strict"
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


function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</tr>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    console.log(coffees);
    return html;
}



function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    // tbody.innerHTML = '';
    var filteredCoffees = [];
    var selectedRoast = roastSelection.value;
    // var search  = coffeeName.value;
    console.log(selectedRoast);


    if(selectedRoast.toLowerCase() === "all"){
        filteredCoffees = coffees
    } else{
        coffees.forEach(function(coffee) {
            if (coffee.roast === selectedRoast.toLowerCase()){
                console.log("in the else ");
                console.log(coffee.roast);
                filteredCoffees.push(coffee);
            }
        });
    }

    console.log("Filtered Coffees");
    tbody.innerHTML = renderCoffees(filteredCoffees);
    console.log(filteredCoffees);
}

//this is a new function I'm making to try and add coffee to the page//

function addCoffee(input){
    
}


function searchCoffee(e) {
    e.preventDefault();
    var filteredCoffees = [];
    var search = coffeeName.value;
    console.log(search);
    //1 you search the coffee
    // var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if (coffee.name.toLowerCase() === search.toLowerCase()){
            filteredCoffees.push(coffee);
        }
    });
    // log the coffee found (filter out the others
    //display the updated coffees
    tbody.innerHTML = renderCoffees(filteredCoffees);
}


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
//added the search to coffee name//
var coffeeName = document.querySelector("#coffee-name");
tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
submitButton.addEventListener('click', selectAllCoffee);

// keyup event listener searches while you type//
coffeeName.addEventListener('keyup', searchCoffee);
