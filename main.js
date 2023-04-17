// (function() {
"use strict"

// generates html
function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<p>' + coffee.name + '</p>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for (var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}


function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    filteredCoffees = [];

    // If the selected option is all then push each coffee
    if (selectedRoast === 'all') {
        coffees.forEach(coffee => {
            filteredCoffees.push(coffee)
        })
        tbody.innerHTML = renderCoffees(coffees);
    } else {
        coffees.forEach(function (coffee) {
                if (coffee.roast === selectedRoast) {
                    filteredCoffees.push(coffee);
                }
                tbody.innerHTML = renderCoffees(filteredCoffees);
            }
        )
    }
}

//Function to run on select change
const triggerSelect = function (e) {
    updateCoffees(e)
}

//function to run on input on change
// function returnText() {
//
//     var selectedName = nameSelection.value;
//     var input = '';
//     input += selectedName
//
//     let filteredNames = coffees.filter((e) => {
//
//         return Object.values(e).some((value) => {
//             return value.toString().toLowerCase().includes(input);
//         });
//     });
//
//     console.log(filteredNames);
// };

function filterName(e) {

    var selectedName = nameSelection.value;
    var input = '';
    input += selectedName
    let result = filteredCoffees.filter(coffee => {
        return coffee.name.toLowerCase().includes(input)
    })

    tbody.innerHTML = renderCoffees(result)

    console.log(result)
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

var filteredCoffees = coffees

// selectors
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var nameSelection = document.querySelector('#name-selection');

//render all coffees to body
tbody.innerHTML = renderCoffees(coffees);


//Event listeners
submitButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener('change', triggerSelect);
nameSelection.addEventListener('keyup', filterName)

// })

