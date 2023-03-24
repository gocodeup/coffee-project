"use strict"
const coffeeList = [
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
const coffeeStrings = localStorage.getItem('renderCoffees', );
console.log(coffeeStrings);
const coffeesList = JSON.parse(coffeeStrings);
console.log(coffeesList);
var coffees;
if (coffeesList !== null) {
    coffees = coffeesList;
}
else {
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
    ];
}
console.log(coffees);

/*let coffees = [
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
];*/

coffees.sort(function(a, b) {
    if (a.id > b.id) {
        return -1;
    } else if (a.id < b.id) {
        return 1;
    } else {
        return 0;
    }
});
console.log(coffees);
function renderCoffee(coffee) {
    let html = '<ul class="coffee col-6">';
    html += '<li>' + coffee.id + '</li>';
    html += '<li>' + coffee.name + '</li>';
    html += '<li>' + coffee.roast + '</li>';
    html += '</ul>';

    return html;
}
function renderCoffees(coffees) {
    let html = '';
    for(let i = coffees.length -1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}
let roastSelection = document.getElementById('roast-selection');
roastSelection.addEventListener('change', function updateCoffees(e){
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }else if(roastSelection.value === 'All'){
            filteredCoffees.push(coffee);
        }

    });
    tbody.innerHTML = renderCoffees(filteredCoffees);

});

let searchBox = document.getElementById('search');
searchBox.addEventListener('keyup', function searchCoffees() {
    let searchCoffeeName = searchBox.value.toUpperCase();
    let filteredCoffees = [];

    coffees.forEach(function(coffee) {
        if (coffee.name.toUpperCase().includes(searchCoffeeName)) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
});

let tbody = document.getElementById('coffees');
tbody.innerHTML = renderCoffees(coffees);
// <-----------------------------------------Add Coffee Form-------------------------------------------------------->
const form = document.getElementById('createCoffee');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const coffeeName = document.getElementById('addName').value;
    const coffeeRoast = document.getElementById('roast-selection2').value;
    const count = coffees.length;
    console.log(count);
    console.log(coffeeName);
    console.log(coffeeRoast);
    coffees[count] = {id: (coffees.length) +1 , name: coffeeName, roast: coffeeRoast};
    form.reset();
    coffees.sort(function(a, b) {
        if (a.id > b.id) {
            return -1;
        } else if (a.id < b.id) {
            return 1;
        } else {
            return 0;
        }
    });
    const coffeeString = JSON.stringify(coffees);
    console.log(coffeeString)
    localStorage.setItem('renderCoffees', coffeeString);
    let tbody = document.getElementById('coffees');
    tbody.innerHTML = renderCoffees(coffees);
});


