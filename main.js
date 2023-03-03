"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<div>' + coffee.id + '</div>';
    html += '<h3>' + coffee.name + '<span>' + coffee.roast + '</span>'+'</h3>';

    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    coffees.forEach(function (coffee) {
        html += renderCoffee(coffee);
    })
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

var coffeeSearch = document.getElementById('coffee-search');

var submitButton = document.querySelector('#submit');

submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    var inputSearch = coffeeSearch.value
    searchBar(inputSearch);
})

//when you submit
function searchBar(input){
    // input.preventDefault();
    // console.log(coffees)
    var emptyArray = [];
    for (let i = 0; i <= coffees.length - 1; i++) {
        if (coffees[i].name.toLowerCase() === input.toLowerCase()){
            emptyArray.push(coffees[i]);

        }}
        // console.log(emptyArray)
    tbody.innerHTML= renderCoffees(emptyArray)

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

tbody.innerHTML = renderCoffees(coffees);

roastSelection.addEventListener('change', updateCoffees);



