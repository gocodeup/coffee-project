"use strict";

document.getElementById("coffeeName").addEventListener('click', coffeeThing, false);
function coffeeThing() {
    document.addEventListener("keyup", updateCoffees, false);
    document.getElementById("coffeeName").addEventListener("change", removeCoffee, false);

}
function removeCoffee() {
    document.removeEventListener("keyup", updateCoffees, false);
    document.getElementById("coffeeName").removeEventListener("change", removeCoffee, false);

}

function test(e){
    e.preventDefault();
    let userAdd = {};
    let roast = document.querySelector('#userRoast');
    let name = document.querySelector('#userCoffeeName');
    let upperName = name.value.replace(name.value[0], name.value[0].toUpperCase());
    console.log(upperName);
    userAdd.id = (coffees.length) + 1;
    userAdd.name = upperName;
    userAdd.roast = roast.value;
    console.log(userAdd);
    coffees.push(userAdd);
    tbody.innerHTML = renderCoffees(coffees);

}

function renderCoffee(coffee) {
    var html = "";
    html += "<span class='col-5 mx-2 p-0 my-2 animated flipInX'>";
    html += "<h1 class='d-inline-block mr-1'>" + coffee.name + "</h1>";
    html += "<p class='d-inline-block mr-2'>" + coffee.roast + "</p>";
    html += "</span>";

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    // console.log(html);
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    var roast = document.forms.form1.coffeeName.value;
    console.log("success");
    console.log(roast);
    console.log(selectedRoast);
    coffees.forEach(function(coffee) {
        if ((coffee.roast === selectedRoast || selectedRoast === "all" )&& coffee.name.toLowerCase().includes(roast.toLowerCase())) {
            filteredCoffees.push(coffee);
        }
    });
    console.log(filteredCoffees);
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

var tbody = document.querySelector('#coffeeid');
var submitButton = document.getElementById('roast-selection');
var roastSelection = document.querySelector('#roast-selection');
let userSubmit = document.querySelector('#userCoffeeSug');


tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('change', updateCoffees);
userSubmit.addEventListener('click',test);

