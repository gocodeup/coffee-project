"use strict"

// Array of coffees to display
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'Light'},
    {id: 2, name: 'Half City', roast: 'Light'},
    {id: 3, name: 'Cinnamon', roast: 'Light'},
    {id: 4, name: 'City', roast: 'Medium'},
    {id: 5, name: 'American', roast: 'Medium'},
    {id: 6, name: 'Breakfast', roast: 'Medium'},
    {id: 7, name: 'High', roast: 'Dark'},
    {id: 8, name: 'Continental', roast: 'Dark'},
    {id: 9, name: 'New Orleans', roast: 'Dark'},
    {id: 10, name: 'European', roast: 'Dark'},
    {id: 11, name: 'Espresso', roast: 'Dark'},
    {id: 12, name: 'Viennese', roast: 'Dark'},
    {id: 13, name: 'Italian', roast: 'Dark'},
    {id: 14, name: 'French', roast: 'Dark'},
];
coffees = coffees.reverse();


function renderCoffee(coffee) {
    let html = '<div class="coffee>';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';

    return html
}


function renderCoffees(coffees) {
    console.log("coffees in render Coffee: ", coffees)
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}
// updates form as roasts are selected
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    console.log("updateCoffees ran");
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (selectedRoast === 'All') {
            filteredCoffees.push(coffee);
        } else if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    div.innerHTML = renderCoffees(filteredCoffees);
}

//Function to search for USER specified coffee
function searchCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    console.log("searchCoffees ran");
    let selectedRoast = roastSelection.value
    var searchedCoffees = [];
    let values = searchBox.value
    coffees.forEach(function(coffee) {
        if (coffee.name === values) {
            searchedCoffees.push(coffee);
        } else if (coffee.roast === selectedRoast) {
            searchedCoffees.push(coffee);
        }


    });
    div.innerHTML = renderCoffees(searchedCoffees);
    console.log(searchedCoffees)
}

function addCoffees(e) {
    e.preventDefault();
    let submittedCoffee = {};
    let roast = document.getElementById("newCoffee").value;
    let name = document.getElementById("coffeeName").value;
    let freshId = (coffees.length + 1);

    submittedCoffee.id = freshId;
    submittedCoffee.name = name;
    submittedCoffee.roast = roast;
    coffees.push(submittedCoffee);
    updateCoffees(e);
};

const roastType = document.getElementById("roast-selection")
var div = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
let searchBox = document.getElementById("coffeeSearch")
let choiceCoffee = document.getElementById('submit2')

div.innerHTML = renderCoffees(coffees);


searchBox.addEventListener("input", searchCoffees)
roastType.addEventListener("change" , updateCoffees);
submitButton.addEventListener('click', updateCoffees);
choiceCoffee.addEventListener('click', addCoffees)
