"use strict"

//===================================== DISPLAYS COFFEE NAME & ROAST =================================================//
function renderCoffee(coffee) {
    var html = '<body class="coffee">';
    html += '<div>' + coffee.name + " " + coffee.roast +'</div>';
    html += '</body>';

    return html;
}

//========================================= SETS COFFEE LIST PER ROAST ===============================================//
function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

//===================================== DISPLAYS COFFEE LIST PER SELECTION ===========================================//
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

//============================================= COFFEE ARRAY =========================================================//
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

//===================================== VARIABLES AND SUBMIT EVENT LISTENER ==========================================//
var tbody = document.getElementsByTagName('div')[4];
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

submitButton.addEventListener('click', updateCoffees);

