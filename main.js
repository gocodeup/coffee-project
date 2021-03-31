"use strict"

function coffeSelection() {
    var selectedRoast = roastSelection.value;
   var filteredCoffees = [];
   if (selectedRoast === 'all') {
       filteredCoffees = coffees;
   } else {
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
   }
   filteredCoffees.sort(function (b,a){
       return a.id - b.id;
    });
    menu.innerHTML = renderCoffees(filteredCoffees);
   //  renderCoffees(filteredCoffees);
}

function autoType(){
    var filteredCoffees = [];
    if (coffeeAdder.value === ""){
        filteredCoffees = coffees;
    }else {
        for(var i = 0; i < coffees.length; i++) {
            if((coffees[i].name[0]).toLowerCase() === (coffeeAdder.value[0]).toLowerCase()){
                filteredCoffees.push(coffees[i]);
            }
        }
    }
    filteredCoffees.sort(function (b,a){
        return a.id - b.id;
    });
    menu.innerHTML = renderCoffees(filteredCoffees);
    // renderCoffees(filteredCoffees);
}


function renderCoffee(coffee) {
    var html = '<div class="coffee d-flex ">';
    html += '<h5 class="mx-2 d-flex align-content-center">' + coffee.name + '</h5>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';
    return html;
}


function renderCoffees(coffees) {
    // coffees.sort(function (b,a){
    //     return a.id - b.id;
    // });
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}


function updateCoffees(e) {
    debugger;
    startingID += 1;
    e.preventDefault(); // don't submit the form, we just want to update the data
    var id = startingID;
    var roast = roastSelection2.value;
    var name = extraCoffee.value;
    coffees.push({id, name, roast});
    coffees.sort(function (b,a){
        return a.id - b.id;
    });
    menu.innerHTML = renderCoffees(coffees);
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
var startingID = 14;

var menu = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var roastSelection2 = document.querySelector('#roast-selection2');
var coffeeAdder = document.querySelector('#addCoffee');
var extraCoffee = document.querySelector('#extraCoffee');

roastSelection.addEventListener("change", coffeSelection);
coffeeAdder.addEventListener('input', autoType);

menu.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
