"use strict"
let coffees = [
    {name: 'Light City', roast: 'light'},
    {name: 'Half City', roast: 'light'},
    {name: 'Cinnamon', roast: 'light'},
    {name: 'City', roast: 'medium'},
    {name: 'American', roast: 'medium'},
    {name: 'Breakfast', roast: 'medium'},
    {name: 'High', roast: 'dark'},
    {name: 'Continental', roast: 'dark'},
    {name: 'New Orleans', roast: 'dark'},
    {name: 'European', roast: 'dark'},
    {name: 'Espresso', roast: 'dark'},
    {name: 'Viennese', roast: 'dark'},
    {name: 'Italian', roast: 'dark'},
    {name: 'French', roast: 'dark'},
];

function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
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
//option search
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value.toLowerCase();
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
        if(selectedRoast === "all"){
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
//type search
function updateTypeCoffees(){
    console.log("event");
    let selectedRoast = roastSelection.value.toLowerCase();
    let typeLetter = searchCoffee.value.toLowerCase();
    let filteredCoffees = [];
    let roastFilterCoffees =[];
    coffees.forEach(function (coffee){
        if (coffee.roast === selectedRoast){
            roastFilterCoffees.push(coffee);
        }
    })
    roastFilterCoffees.forEach(function (coffee){
        console.log("type function")
        console.log(typeLetter)
        if(coffee.name.toLowerCase().includes(typeLetter)){
            filteredCoffees.push(coffee);
        }
    })
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
//add new coffee

function addNewCoffee(e){
    e.preventDefault();
    let selectedRoast = newRoastSelection.value.toLowerCase();
    let typeLetter = newCoffee.value.toLowerCase();
    const coffeeName = typeLetter.charAt(0).toUpperCase() + typeLetter.slice(1);
    // console.log(typeLetter)
    let coffee = {name:coffeeName, roast:selectedRoast};
    coffees.push(coffee);
    localStorage.setItem('newCoffeeList', JSON.stringify(coffees))
    tbody.innerHTML = renderCoffees(coffees)
}

// var elements
var tbody = document.querySelector('#coffees');
var submitSearchButton = document.getElementById('submit-search');
var roastSelection = document.querySelector('#roast-selection-old');
let newRoastSelection = document.getElementById('roast-selection')
let newCoffee = document.getElementById('new-coffee');
let searchCoffee = document.getElementById('search-coffee');
let submitNewCoffee = document.getElementById('submit');
let newCoffees = localStorage.getItem('newCoffeeList');
newCoffees = JSON.parse(newCoffees);

//add event
submitSearchButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener('change', updateCoffees);
newCoffee.addEventListener('keyup',updateCoffees);
searchCoffee.addEventListener('keyup',updateTypeCoffees);
submitNewCoffee.addEventListener('click', addNewCoffee)

if(newCoffees === null){
    tbody.innerHTML = renderCoffees(coffees)
}else{
    tbody.innerHTML = renderCoffees(newCoffees)
}