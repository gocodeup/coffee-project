"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee col-6">' + coffee.name + ' ';
    html +=  "<p class = 'roast'>" + coffee.roast + "</p>" + '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    // for(var i = coffees.length - 1; i >= 0; i--) {
    //     html += renderCoffee(coffees[i]);
    // }
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) { //makes a custom array of coffees that match the roast selection
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    if(selectedRoast === "all"){
        tbody.innerHTML = renderCoffees(coffees);
        return undefined; // this line just prevents the function from falling through to the code below
    }
        tbody.innerHTML = renderCoffees(filteredCoffees);
}

//****Working on the search events****

function searchBarListener(){ //called onInput by the html for the search bar
    let search= document.getElementById("coffeeSearch").value;
    //console.log(search) //confirms that it's working
    var searchCoffees = []
    coffees.forEach(function(coffee){ //this uses indexOf to search not for an index but simply whether
        if (coffee.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 || coffee.roast === search.toLowerCase()){
            searchCoffees.push(coffee)
        }

    })
    tbody.innerHTML = renderCoffees(searchCoffees);
}

//adding new coffee
function addCoffee(){
    //Getting name and roast values
    var newCoffeeRoastType = document.querySelector('#new-coffee-roast-selection').value;
    var newCoffeeName = document.querySelector('#new-coffee-name').value;
    //pushing object with those values and a new ID into the coffees array
    coffees.push({
        id: (parseFloat(coffees.length) + 1),
        name: newCoffeeName,
        roast: newCoffeeRoastType
    })
    //This causes the browser to render the coffee array again so it displays the new addition
    tbody.innerHTML = renderCoffees(coffees);
    //This resets the field to have nothing in it after submitting
    document.querySelector('#new-coffee-name').value = "";
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
var newCoffeeSubmitButton = document.querySelector('#new-submit');

 tbody.innerHTML = renderCoffees(coffees);

// document.getElementById("coffeeSearch").addEventListener("inputs", searchBarListener);

//These cause the functions to execute on event
submitButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener('input', updateCoffees);
newCoffeeSubmitButton.addEventListener('click', addCoffee);
//newCoffeeNameBarEnter.addEventListener('submit',addCoffee);

//Doing this so that hitting enter in the bar has the same effect as clicking submit
//maybe then it will stop reloading the page when you hit enter?
//New Note, now it works with the help of onSubmit="return false;" in the Form Tag.
document
    .getElementById("new-coffee-name")
    .addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addCoffee();
        }
    });
