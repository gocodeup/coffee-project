"use strict"
//not sure what JSON does but it works?
var  allCoffee = JSON.parse(localStorage.getItem("coffeeList"));
console.log(allCoffee);
var coffees = [];

function getCoffees() {
    if (allCoffee) {
        coffees = allCoffee;
    } else if (!allCoffee) {
        coffees = [
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
        ]
    }
}
getCoffees()
//variables for event listeners
var roast = document.querySelector('#roast-selection1');
var search = document.querySelector('#search1');
var results = document.querySelector('#roast-results');
var selector = document.querySelector('#roast-me');


results.innerHTML = updateCoffees();

//EventListeners
roast.addEventListener('change', function () {
    results.innerHTML = updateCoffees()
});
search.addEventListener('keydown', function () {
    results.innerHTML = searchFilter()
});
selector.addEventListener('click', function () {
    results.innerHTML = updateCoffees()
});


function renderCoffee(coffeeName, coffeeRoast) {
    var html = '';
    var roastDef = '<div class="roast-box col-md-6 col-12">';
    var roastTitleDef = '<span class="roast-title float-md-left">';
    var roastSubtitleDef = '<span class="roast-subtitle ml-1 text-muted">';

    html += roastDef + roastTitleDef + coffeeName + '</span>';
    html += roastSubtitleDef + coffeeRoast + '</span></div>';

    // html += '<td>' + coffee.id + '</td>';
    // html += '<td>' + coffee.name + '</td>';
    // html += '<td>' + coffee.roast + '</td>';
    // html += '</tr>';
    //
    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for (var i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i].name, coffees[i].roast);
    }
    return html;
}

function updateCoffees() {
    //e.preventDefault(); // don't submit the form, we just want to update the data
    //var selectedRoast = roastSelected;
    var filteredCoffees = [];
    var roastSelected = roast.value;
    if (roastSelected === "all") {
        for (let i = 0; i < coffees.length; i++) {
            filteredCoffees.push(coffees[i]);
        }
    }
    // coffees.forEach(function(coffee) {
    for (let i = 0; i < coffees.length; i++) {
        if (coffees[i].roast === roastSelected) {
            console.log(coffees[i].name + ": " + coffees[i].roast);
            filteredCoffees.push(coffees[i]);
        }
    }
    // roastResults.innerHTML = showMeTheFilter(filteredCoffees);
    return renderCoffees(filteredCoffees);
}

function searchFilter() {
    var filteredCoffees = [];
    var searchString = search.value;
    var searchUC = searchString.toUpperCase();
    for (let i = 0; i < coffees.length; i++) {
        if (coffees[i].name.toUpperCase().includes(searchUC)) {
            filteredCoffees.push(coffees[i]);
        }
    }
    return renderCoffees(filteredCoffees);
}

let roastType = document.querySelector('#roast-type');
let create = document.querySelector('#create');

function addCoffee(){
    let newCoffee = {
        id: coffees[coffees.length-1].id +1,
        roast: roastType.value,
        name: create.value
    };
    coffees.push(newCoffee);
    let x = [];

    for (let i = 0; i < coffees.length; i++){
        x = x + coffees[i];
    }
    alert(`Your ${newCoffee.name} ${newCoffee.roast} has been added!`);
    updateCoffees();
}