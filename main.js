"use strict"
var myInput = document.getElementById("myInput")

function renderCoffee(coffee) {
    var html = '<div class="coffee card col-lg-4 col-md-6 col-xsm-12">';
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

//Search Bar
function checkNames (e) {
    // e.preventDefault();
    var filteredCoffees = [];
    var selectedRoast = myInput.value.toUpperCase();
    coffees.forEach(function (coffee) {
        if(coffee.upperName.startsWith(selectedRoast) && selectedRoast !== ""){
            filteredCoffees.push(coffee);

        }
        tbody.innerHTML = renderCoffees(filteredCoffees)
    })

}




// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light', text: "It will make your city lights light up!", upperName: 'LIGHT CITY' },
    {id: 2, name: 'Half City', roast: 'light', upperName: 'HALF CITY'},
    {id: 3, name: 'Cinnamon', roast: 'light', upperName: 'CINNAMON'},
    {id: 4, name: 'City', roast: 'medium', upperName: 'CITY'},
    {id: 5, name: 'American', roast: 'medium', upperName: 'AMERICAN'},
    {id: 6, name: 'Breakfast', roast: 'medium', upperName: 'BREAKFAST'},
    {id: 7, name: 'High', roast: 'dark', upperName: 'HIGH'},
    {id: 8, name: 'Continental', roast: 'dark', upperName: 'CONTINENTAL'},
    {id: 9, name: 'New Orleans', roast: 'dark', upperName: 'NEW ORLEANS'},
    {id: 10, name: 'European', roast: 'dark', upperName: 'EUROPEAN'},
    {id: 11, name: 'Espresso', roast: 'dark', upperName: 'ESPRESSO'},
    {id: 12, name: 'Viennese', roast: 'dark', upperName: 'VIENNESE'},
    {id: 13, name: 'Italian', roast: 'dark', upperName: 'ITALIAN'},
    {id: 14, name: 'French', roast: 'dark', upperName: 'FRENCH'},
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

