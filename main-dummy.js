"use strict"

function renderCoffee(coffee) {
    var html = '<body class="coffee">';
    html += '<div>' + coffee.name + " " + coffee.roast +'</div>';
    html += '</body>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {

    e.preventDefault(); // don't submit the form, we just want to update the data
    // var selectedRoast = roastSelection.value; // === "light/dark" etc....
    var filteredCoffees = [];
    var allCoffee = [];
    coffees.forEach(function(coffee) {

        if(coffee.roast === roastSelection.value) {
            filteredCoffees.push(coffee);
            tbody.innerHTML = renderCoffees(filteredCoffees);
        }
        else if(coffee.roast === roastSelection.value){
            filteredCoffees.push(coffee);
            tbody.innerHTML = renderCoffees(filteredCoffees);
        }
        else if(coffee.roast === roastSelection.value){
            filteredCoffees.push(coffee);
            tbody.innerHTML = renderCoffees(filteredCoffees);
        }
        else if(roastSelection.value === "all") {
            allCoffee.push(coffee);
            tbody.innerHTML = renderCoffees(allCoffee)
        }
    });

}

// function displayAllRoasts() {
//     var allCoffees = [];
//     coffees.forEach(function (coffee) {
//             allCoffees.push(coffee);
//     });
//     tbody.innerHTML = renderCoffees(allCoffees);
// }
//
// console.log(displayAllRoasts());

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

// =======================function for search bar and array===============================

document.getElementById("searchBtn").addEventListener('search', function() {
  var formInput = document.getElementById("formInput").value,
    foundItem = null; //we'll store the matching value here

  // if (formInput === '') {
  //   alert('You Must Enter A Code Number First.');
  //   return false;
  // }

  for (var i = 0; i < coffees.length; i++) {
    if (coffees[i].code === formInput) {
      foundItem = coffees[i];
      break; //we've found a match, no sense to continue
    }
  }

  if (foundItem) {
    return foundItem;
  } else {
    return false;
  }

});

// ======================================================

// var tbody = document.querySelector('#coffees');
var tbody = document.getElementsByTagName('div')[2];
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
// var allRoasts = document.querySelector('#all-roasts');

// tbody.innerHTML = renderCoffees(coffees);

// function coffeeNames(){
//     coffees.forEach(function(coffees){
//         tbody.innerHTML = coffees.name + coffees.roast;
//     });
// }

// coffeeNames(coffees);

submitButton.addEventListener('click', updateCoffees);

