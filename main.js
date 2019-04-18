"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<div>' + coffee.name + " " + '<span class="roastType">' + coffee.roast + '</span>' + '</div>';
    // html += '<td>' + coffee.roast + '</td>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}
// var coffee3 = function myFunction() {
//     var coffeeSearch = document.forms.search.coffeeSearch;
//     var coffeeFilter = coffeeSearch.value.toUpperCase();
//     var coffee3 = [];
//     coffees.forEach(function (value, i) {
//         if(coffees[i].name.toUpperCase().indexOf(coffeeFilter) > -1){
//             coffee3.push(coffees[i]);}
//     });
//     tbody.innerHTML = renderCoffees(coffee3);
//     return coffee3;
// };

// function myFunction(input) {
//     var coffeeSearch = document.getElementById("coffeeSearch");
//     var coffeeFilter = coffeeSearch.value.toUpperCase();
//     if (coffees[input].name.toUpperCase().indexOf(coffeeFilter) > -1){
//         return true;
//     } else {
//         return false;
//     }
// }

// var coffeeSearch = document.getElementById("coffeeSearch");
// coffeeSearch.addEventListener("keyup", function () {
//     var searchedCoffee = document.getElementById("coffeeSearch").value;
//     console.log(searchedCoffee)
// });

var coffeeSearch = document.getElementById("coffeeSearch");
var coffeeFilter = function(){return coffeeSearch.value.toUpperCase();};

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;

    var filteredCoffees = [];
    coffees.forEach(function(coffee, i) {console.log(i);
        if (coffee.name.toUpperCase().indexOf(coffeeFilter()) > -1) {
            if(selectedRoast === "all"){
                filteredCoffees.push(coffee);
                console.log(coffee)
            } else if(coffee.roast === selectedRoast){
                filteredCoffees.push(coffee);
            }
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function addCoffee(e) {
    e.preventDefault();
    var coffeeName = addCoffeeName.value;
    var coffeeRoast = addCoffeeRoast.value;
    var updateIds = coffees[coffees.length- 1].id+1;
    if (coffeeName === ""){
        return false;
    }
    coffees.push({id:updateIds,name:coffeeName,roast:coffeeRoast});
    updateCoffees(e);
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
coffees.reverse();
console.log(coffees[0].name);
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var selectedRoast = document.getElementById("roast-selection");
var all = document.getElementById("all");
var addCoffeeRoast = document.getElementById("addCoffeeRoast");
var addCoffeeName = document.getElementById("addCoffeeName");
var add = document.getElementById("add");
tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
selectedRoast.addEventListener("input", updateCoffees);
coffeeSearch.addEventListener("input", updateCoffees);
add.addEventListener("click", addCoffee);
