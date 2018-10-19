"use strict";
//DISPLAYS COFFEE NAMES
function renderCoffee(coffee) {
    var html = '<div class="col-6 m-0">';
    html += '<span class="coffeeName font-weight-bold text-capitalize">' + coffee.name + " " + '</span>';
    html += '<span class="coffeeRoast font-weight-bold text-black-50 text-capitalize">' + coffee.roast + '</span>';
    html += '</div>';
    return html;
}

function renderCoffees(coffees) {
    var html = '';
    html = "<div class='row'>";
    for(var i = 0; i < coffees.length ; i++) {
        html += renderCoffee(coffees[i]);
    }
    html += "</div>";
    return html;
}


//////////////////////////////////////////////////////
//UPDATES SEARCH
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data

    var selectedRoast = roastSelection.value;
    var coffeeName = new RegExp('^' + coffeeSelection.value.toLowerCase());
    var filteredCoffees = [];
    var coffeeNameLower;
    coffees.forEach(function(coffee) {
        coffeeNameLower = coffee.name.toLowerCase();
        var coffeeNameLowerArr = coffeeNameLower.split(' ');
        for(var i = 0; i < coffeeNameLowerArr.length; i++){
            //regex is used to check if the string entered by the user matches the beginning of any words present
            // in the coffee name. If so, that coffee object is added to the list
            //Added the or for the selectedRoast so that when all is selected
            // all roasts pop up
            if ((coffee.roast === selectedRoast || selectedRoast === 'all') && (coffeeNameLowerArr[i].search(coffeeName) > -1)) {
                filteredCoffees.push(coffee);
                break;
            }
        }
    });
    divCoffees.innerHTML = renderCoffees(filteredCoffees);
}


////////////////////////////////////////////////////////////
////ADD NEW COFFEE

function addCoffee(e) {
    e.preventDefault();
    //if coffee name is not already on the list, it is turned into and object and added to the list
    if(!isInCoffees(newCoffee.value)){
        var newId = (coffees.length + 1);
        var addNewCoffee = {id: newId, name: newCoffee.value, roast: newRoast.value};
        coffees.push(addNewCoffee);
        updateCoffees();
    }
}

function isInCoffees(newCoffeeName) {
    //Makes sure users don't put too long of a coffee name
    if(newCoffeeName.length >= 21){
        alert('Please choose a name that is under 21 characters');
        return true;
    }
    var coffeeNameForTest = newCoffeeName.toLowerCase().trim();

    //prevents the same name from being repeated even if the two words are separated by a space or special char
    var coffeeNameNoSpaces = coffeeNameForTest.split(/\s*/).join('');
    var coffeeNameNoSpecialChar = coffeeNameNoSpaces.split(/[,.?\*&\^%$#@!()~`+=[{\]};:'"></]/);
    var coffeeStringForTest = coffeeNameNoSpecialChar.join('');

    //checks the array of coffee names against entered input to see if the name
    // is already on the list
    for(var i = 0; i < coffees.length; i++){
        if(coffees[i].name.toLowerCase().split(' ').join('') === coffeeStringForTest){
            return true;
        }
    }
    return false;
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


var divCoffees = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var coffeeSelection = document.querySelector('#name-search');
var newRoast = document.querySelector('#add-roast');
var newCoffee = document.querySelector('#add-coffee');
var submitCoffee = document.querySelector('#submit-coffee');



coffeeSelection.addEventListener('keyup', updateCoffees);
submitButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener('change', updateCoffees);
submitCoffee.addEventListener('click', addCoffee);

divCoffees.innerHTML = renderCoffees(coffees);

