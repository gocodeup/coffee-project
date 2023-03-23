"use strict"

let coffees = [
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
function renderCoffee(coffee) {
    let html = '<tr class="coffee">';
    html += '<td>' + coffee.id + '</td>';
    html += '<td>' + coffee.name + '</td>';
    html += '<td>' + coffee.roast + '</td>';
    html += '</tr>';
    return html;
}
function renderCoffees(coffees) {
    let html = '';
    for(let i = coffees.length -1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    console.log(coffees)
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


//let addCoffee = document.getElementById('createCoffee');
// function addCoffees (e){
//     e.preventDefault();
//     let newCoffee = {
//         id: coffees.length +1,
//         name: addCoffeeName.value,
//         roast: addCoffeeRoast.value,
//     }
//     addCoffee.addEventListener('submit', addCoffees);
// }
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
});