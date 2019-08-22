"use strict"
// COFFEE FUNCTIONALITY USED FOR USER INTERFACE
function renderCoffee(coffee) {
    var html = '<div class="coffee d-inline-flex flex-row flex-wrap justify-content-around w-50">';
    html += '<div class="coffee-box mx-5 my-2 w-50"> ' + '<span class="name">' + coffee.name + '</span>';
    html += ' ' + '<span class="roast">' + coffee.roast + '</span>' + '</div>';
    html += '</div>';


    return html;
}
// DISPLAYS ALL THE COFFEES WHEN YOU LOAD THE PAGE
function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}
// FUNCTION THAT READS WHAT THE USER IS SELECTING IN THE DROPDOWN BOX AND DISPLAYING THE CORRECT COFFEES
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }else if(selectedRoast === 'all'){
            filteredCoffees.push(coffee);

        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
// THE FUNCTION TO READ WHAT THE USER IS TYING INTO THE INPUT
function myFunction() {
    var filterCoffees = [];
     var coffeeInput = document.getElementById("usr2").value.toLowerCase();

     coffees.forEach(function (coffee) {
         if ( (coffee.name.toLowerCase()).includes(coffeeInput) ){
             filterCoffees.push(coffee);
         }
     });

    tbody.innerHTML = renderCoffees(filterCoffees);
}



// THE ARRAY THE USERS ARE SEEING AND SORTING THROUGH
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
// ACTIONS TO SELECT OBJECTS IN THE ARRAY
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var nameInput = document.querySelector('#usr2');

tbody.innerHTML = renderCoffees(coffees);
// READER FROM THE USERS INTERACTION
submitButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener('change', updateCoffees);
nameInput.addEventListener('input', myFunction);






