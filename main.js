"use strict"

// This is going to effect the coffee name and roast type
function renderCoffee(coffee) {
    var html = '<div class="coffee d-inline-flex col-6">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h1 class=" font-weight-bold d-flex" >' + coffee.name + '</h1>';
    html += '<p class="text-secondary  font-weight-lighter  pt-3 h5 ml-3 d-inline">' + coffee.roast + '</p>';
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

var tbody = document.getElementById('coffees');
var submitButton = document.getElementById('submit');
var roastSelection = document.getElementById('roast-selection');
var ControlInput1 = document.getElementById('ControlInput1');




tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

ControlInput1.addEventListener("keyup", typeName);

function typeName(e){
    e.preventDefault(); // don't submit the form, we just want to update the data
    var Input1 = document.getElementById('ControlInput1').value.toLowerCase();
    var KeeperofCoffee = [];
    coffees.forEach(function(coffee) {
        if (coffee.name.toLowerCase().includes(Input1)){
            KeeperofCoffee.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(KeeperofCoffee);
}




var addSubmitButton = document.getElementById('add-submit');

function addingNames(e){
    e.preventDefault(); // don't submit the form, we just want to update the data
    var addControlInput1 = document.getElementById('add-ControlInput1').value;
    var addroastSelection = document.getElementById('addroast-selection').value;
    var upperCaseInput = addControlInput1.charAt(0).toUpperCase() + addControlInput1.slice(1);
    console.log(upperCaseInput);
    console.log(addroastSelection);

    var pushInput = coffees.push(upperCaseInput);
    if (addControlInput1 === ""){
        coffees.push(upperCaseInput);
    }
    tbody.innerHTML = renderCoffees(coffees)


    Object.assign(upperCaseInput, addroastSelection);
    console.log(obj);

}


addSubmitButton.addEventListener("click", addingNames);



