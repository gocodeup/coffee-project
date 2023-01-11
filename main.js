"use strict"

function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
       html += '<td>' + coffee.name + '</td>';
    html += '<td>' + coffee.roast + '</td>';
    html += '</tr>';


    return html;
}
function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function renderSearchedCoffee(coffee) {
    var html = '<tr class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<td>' + coffee.name + '</td>';
    html += '<td>' + coffee.roast + '</td>';
    html += '</tr>';

    return html;
}
function renderSearchedCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderSearchedCoffee(coffees[i]);
    }
    return html;
}


// ##### the function that works on keyups ######
function updateCoffeesOnType(e){
    e.preventDefault();
    var selectedRoastForSearch = roastSelection.value;
    var selectCoffeeOnSearch = coffeeSearch.value.toLowerCase();
    console.log(selectCoffeeOnSearch)
    var searchedCoffee = [];

    if(selectedRoastForSearch === 'all' & selectCoffeeOnSearch === ''){
        coffees.forEach(function(coffee){
            searchedCoffee.push(coffee)
        });
    }else if(selectedRoastForSearch === 'all' & selectCoffeeOnSearch !== ''){
        coffees.forEach(function(coffee){
            if(coffee.name.toLowerCase().includes(selectCoffeeOnSearch)){
                searchedCoffee.push(coffee)
            }
        });
    }

    if(selectCoffeeOnSearch === ''){
        coffees.forEach(function(coffee){
            searchedCoffee.push(coffee)
        });
    }else if(selectCoffeeOnSearch !== ""){
        coffees.forEach(function(coffee){
            if(coffee.name.includes(selectCoffeeOnSearch) & coffee.roast === selectedRoastForSearch){
                searchedCoffee.push(coffee)
            }
        });
    }
    tbody.innerHTML = renderSearchedCoffees(searchedCoffee);
}



function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    if(selectedRoast === 'all'){   //if the roast matches with value of selectedRoast.value(all)
        coffees.forEach(function(coffee){
            filteredCoffees.push(coffee);
        });   
     }else if(selectedRoast !== 'all'){
        coffees.forEach(function(coffee) {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }
        });
    }
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
var roastOnSelection = document.querySelector('#roast-selection');
var coffeeSearch = document.querySelector('#search-coffee');

// tbody.style.display="none";
tbody.innerHTML = renderCoffees(coffees);
// Event listeners
submitButton.addEventListener('click', updateCoffees);
roastOnSelection.addEventListener('change', updateCoffees);
coffeeSearch.addEventListener('keyup', updateCoffeesOnType);
