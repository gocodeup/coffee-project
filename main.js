"use strict"

// Array of coffees to display
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
coffees = coffees.reverse();

function renderCoffee(coffee) {
    let html = '<div class="coffee">';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';

    return html
}


function renderCoffees(coffees) {
    console.log("coffees in render Coffee: ", coffees)
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}
// updates form as roasts are selected
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    console.log("updateCoffees ran");
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    div.innerHTML = renderCoffees(filteredCoffees);
}

/* When input made is into search bar --Event listener
      Compare it to coffees, -- coffeeSearch == coffee.name
            display matching inputs   -- push

            */
function searchCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    console.log("searchCoffees ran");
    var selectedName = nameSearch.value;
    var searchedCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.name == selectedName) {
            searchedCoffees.push(coffee);
        }
    });
    div.innerHTML = renderCoffees(searchedCoffees);
}


var div = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var nameSearch = document.querySelector('#coffeeSearch');




div.innerHTML = renderCoffees(coffees);

// This looks at the value of the searchbox
let searchBox = document.getElementById("coffeeSearch")
//This looks at value of RoastDropdown
const roastType = document.getElementById("roast-selection")

// This looks at change, outputs console of change
roastType.addEventListener("change" ,(event) => {
    console.log(roastType.value);
});

    /*
        const selectElement = document.querySelector('.ice-cream');

    selectElement.addEventListener('change',
                (event) => {
          const result = document.querySelector('.result');
          result.textContent = `You like ${event.target.value}`;
    });
     */


// timing
// listen for change on the search field
// listen for change on the dropdown selection
// ifChange in either input, then pass those values into submit -> trigger a re-render based on items submitted

// -----
// listen for change on inputChange (search and/or roast type)
// onSubmit -> grab values of inputField and/or roastType
//          Var searchBox grabs the input field

// -> grab values: 1) find element id 2) .value
// do these values match ANY of the existing coffees in my coffees array?
// if yes, -> add matching coffee objects to filteredArr -> display the updated filteredArr, which contains coffees that match either/or (exact) input fields
submitButton.addEventListener('click', updateCoffees);
submitButton.addEventListener('click', searchCoffees);
