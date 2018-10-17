"use strict"

function renderCoffee(coffee) {
    var html ='<div class="coffee col-6 float-left" id="myInnerTable"'+ coffee.id+ '>';
    html +=  coffee.name +' '+ '<p>' + coffee.roast + '</p>';
    html += '</div>' ;

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffeesSearch(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = searchFilter.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.name.toLowerCase().indexOf(selectedRoast) > -1) {
            filteredCoffees.push(coffee);
        } else if (selectedRoast === " "){
            filteredCoffees = coffees
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

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
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var searchFilter = document.querySelector('#myInput');
var coffeeSearch = document.querySelector('#coffee');

var coffeeObjectNames =
    function getCoffeeNames() {
    var i;
    for (i = 0; i <= coffees.length; i++) {
        var coffeeNames = coffees[i].name;
        console.log(coffeeNames);
    }
};


tbody.innerHTML = renderCoffees(coffees);

// function searchBar (){
//
//     var m;
//     for (m = 0; m < coffees.length; m++) {
//         if (coffeeObjectNames.innerHTML.indexOf(searchFilter) > -1) {
//             coffeeSearch[m].style.display = "";
//         } else
//             coffeeSearch[m].style.display = "none";
//     }
// }

submitButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener('change', updateCoffees);
searchFilter.oninput = updateCoffeesSearch;

var addCoffeeRoast = document.querySelector('#AddRoast-selection').value;
var addCoffeeName = document.querySelector('#addCoffeeName').value;
var addCoffeeRoastArray = [addCoffeeRoast];
var addCoffeeNameArray = [addCoffeeName];
var addCoffeeSubmitButton = document.querySelector('#addCoffeeSubmit');

function pushNewArray() {
    coffees.push.roast(addCoffeeRoastArray);
    coffees.push.name(addCoffeeNameArray);
}

addCoffeeSubmitButton.oninput = pushNewArray;

console.log(pushNewArray());
