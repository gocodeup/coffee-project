"use strict";

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

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit1');
var roastSelection = document.querySelector('#roast-selection');
var search = document.querySelector("#coffee");
var addButton = document.querySelector('#submit2');
var addRoast = document.querySelector('#add-roast');
var addName = document.querySelector('#myCoffee');

//used to display coffee
function renderCoffee(coffee) {
    var html = '<div class="coffee col-4">';
    // html += '' + coffee.id + '';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

//used to display new generated coffees based on searches
function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i <= coffees.length - 1;  i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

//update coffee results based on roast
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

//updates coffees based on coffee name
function coffeeSearch(e) {
    e.preventDefault();
    var coffeeSearch = search.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee){
        if (coffee.name.toLowerCase().includes(coffeeSearch)) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees)

}


tbody.innerHTML = renderCoffees(coffees);

//add a coffee
var addACoffee = function (e) {
    e.preventDefault(); //without this an infinite loop occurs
    var newId = Number(coffees.length + 1);
    var newCoffee = addName.value;
    var newRoast = addRoast.value;
    var newCoffeeItem = {id: newId, name: newCoffee, roast: newRoast};

    //used to verify current list of coffees
    console.log(coffees);

    //used to add new coffee to beginning of coffee list
    coffees.unshift(newCoffeeItem);
    console.log(localStorage);
    console.log(coffees);

    //used to store coffee list to local storage... does store updated list but ONLY within the function
    localStorage.setItem('coffees', JSON.stringify(coffees));

    //used to gather data from local storage to display... does work in console... ONLY within function.
    JSON.parse(localStorage.getItem('coffees'));


    //used to display current coffee list in HTML
    tbody.innerHTML = renderCoffees(coffees);

    //used to verify list changes in console.
    console.log(coffees);
    console.log(localStorage);
    console.log(JSON.stringify((coffees)));


};


//used to create a list to update for the HTML outside of the function
var list = JSON.parse(localStorage.getItem('coffees'));
console.log(list);
//
tbody.innerHTML = renderCoffees(list);

//does not show updated coffee list with added coffee;used to show and track changes
console.log(coffees);
console.log(localStorage);

//THUS FAR-- IT WILL STORE NEW ITEMS AND STAY WHEN YOU REFRESH BUT ONCE YOU RESUBMIT IT RESETS AND ONLY STORES THE ITEMS YOU ARE CURRENTLY STORING. WILL CONTINUE TO ALTER FUNCTIONALITY.


// tbody.innerHTML = renderCoffees(coffees);





// if (typeof(Storage) !== "undefined") {
//     // Code for localStorage
//     alert('local storage')
// } else {
//     alert('no support')
//     // No web storage Support.
// }

// console.log(coffees);






submitButton.addEventListener('click', updateCoffees);
search.addEventListener('keyup', coffeeSearch);
addButton.addEventListener('click', addACoffee);
// addButton.addEventListener('click', storedCoffees);
