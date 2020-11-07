"use strict"
var myInput = document.getElementById("myInput")

function renderCoffee(coffee) {
    var html = '<div class="coffee card col-4 ">';
    html += '<img src="img/card4light.jpg">' + '</>';
    html += '<strong>' + coffee.name + '</strong>';
    html += '<p>' + coffee.text + '</p>';

    html += '</div>';
    // console.log(html);
    return html;
}

var inputValue = myInput.value

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

myInput.addEventListener("input", checkNames)


function checkNames (e) {
    // e.preventDefault();
    var selectedRoast = inputValue;
    // console.log(typeof selectedRoast)
    // var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if(coffee.name.startsWith(myInput.value) && myInput.value !== ""){
           tbody.innerHTML = renderCoffee(coffee)
        }
    })

}
// setInterval(checkNames, 2000)



// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light', text: "It will make your city lights light up!" },
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

submitButton.addEventListener('click', updateCoffees);


const selectElement = document.querySelector('.roast-level');

// selectElement.addEventListener('change', (event) => {
//     const result = document.querySelector('.light1');
//     result.textContent = `You like ${event.target.value}`;
// });




//Search Dropdown begins

