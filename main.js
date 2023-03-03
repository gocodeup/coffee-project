"use strict"
//picking roasts and names from current menu//
function renderCoffee(coffee) {
    var html = '<div class="coffee d-flex align-items-baseline mx-5" width:40%>';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    console.log(coffees);
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
        } else if (selectedRoast === "all"){
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
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
var coffeeSelection = document.querySelector('#coffee-selection')

coffeeSelection.addEventListener('input', e => {
    var choosenCoffee = []
    const searchValue = e.target.value.toLowerCase();
    coffees.forEach(function (nameArray){
        var lowerNameArray = nameArray.name.toLowerCase()

        if (lowerNameArray.includes(searchValue)){

            choosenCoffee.push(nameArray);
        }
    })
        tbody.innerHTML = renderCoffees(choosenCoffee);
})
tbody.innerHTML = renderCoffees(coffees.reverse());
submitButton.addEventListener('click', updateCoffees);


// submit button  listens for click
// on click of submit -> trigger 'addCoffees()'
// // grab value of input fields
// // create a new coffee object with those values (id, name, roast)
// // push the new coffee to existing coffees
// // set local storage to updated list
// // renderCoffees ( updated coffees)
//

function addCoffees(e) {
    e.preventDefault();
    console.log('add coffee submit clicked!')
    var newRoast = document.querySelector("#added-roast-selection").value;
    console.log(newRoast);
    var newCoffee = document.querySelector("#added-coffee-selection").value;
    console.log(newCoffee)
    var newCoffees = {id: coffees.length + 1, name: newCoffee, roast: newRoast};
    coffees.unshift(newCoffees);
    console.log(coffees)
    localStorage.setItem('renderCoffees', JSON.stringify(coffees));
    var updatedCoffee = localStorage.getItem('renderCoffees');
    tbody.innerHTML = renderCoffees(JSON.parse(updatedCoffee));
}



var submit2Button = document.getElementById("submit2");
submit2Button.addEventListener("click", addCoffees);