"use strict"

// provides html for INDIVIDUAL coffee objects.
// template to build renderCoffees function
function renderCoffee(coffee) {
    var html = '<div class=" row ms-2 coffee">';
    html += '<div class="col col-2"><h3>' + coffee.name + coffee.id + '</h3></div>';
    html += '<div class="col col-2"><p>' + coffee.roast + '</p></div>';
    html += '</div class="row">';

    console.log(html);
    return html;


}

// provides the html for All coffee objects
// uses above renderCoffee function to create individual html
// blocks for each coffee object and then combines them into one big html block
function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    console.log(html);
    return html;
}

//displays filtered list of coffees based on roast
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    // if statement to check if all coffees are wanted or a specific roast
    if(selectedRoast == "all") {
        tbody.innerHTML = renderCoffees(combinedArray);
    } else {
        combinedArray.forEach(function(coffee) {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }
        });
        tbody.innerHTML = renderCoffees(filteredCoffees);
    }

}

//array of coffee objects
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

// this line is injecting the javascript generated html into the div with the id of coffees
var tbody = document.querySelector('#coffees');
// grabbing the submit button for filtered coffee list
var submitButton = document.querySelector('#submit');
// grabbing the selection of light, med, or dark for filtered list
var roastSelection = document.querySelector('#roast-selection');



// local storage code
// get name and roast of new coffee
var createRoastSelection = document.querySelector('#create-roast-selection');
var coffeeName = document.getElementById('coffeeName');
// locate submit button for new coffee creation
var creationSubmitButton = document.getElementById('coffee-submit');
// grab already stored input if there is any
var storedInput = JSON.parse(localStorage.getItem('storedArry'));
// create a second array that is used to hold the user created coffees
var secondArray = [];

// grab button that clears all user created coffees
var clearBtn = document.getElementById('clear');

// this function clears the stored data (user made coffees)
clearBtn.addEventListener('click', function() {
    localStorage.clear();
    document.location.reload();
})

// this checks if there is stored input (user created coffees), and if so, adds it to the second array
if(storedInput) {
    console.log("i found stored input: " + storedInput);
    secondArray = storedInput;
}

// this function turns the user input into a coffee object with a unique ID
function createCoffeeObject(inputName, inputRoast) {
    var newId = combinedArray.length + 1;
    return {
        id: newId,
        name: inputName,
        roast: inputRoast
    }
}

// this function adds the new coffees to the second array and saves them to local storage
function addCoffees(e) {
    e.preventDefault();
    console.log('this function ran')
    secondArray.push(createCoffeeObject(coffeeName.value, createRoastSelection.value));
    localStorage.setItem('storedArry', JSON.stringify(secondArray));
    document.location.reload();
}

// this creates a combined array of both the original coffees and user supplied coffees
var combinedArray = coffees.concat(secondArray);

// this displays the combined arrays into the html div
tbody.innerHTML = renderCoffees(combinedArray);

// event listeners for the filter coffee button and the create coffee button
creationSubmitButton.addEventListener('click', addCoffees);
submitButton.addEventListener('click', updateCoffees);
