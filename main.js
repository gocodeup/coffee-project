"use strict"

// based on input

// grab the input text when that click happens
// btn listens for click
// loop coffees
// ***
// // if coffee.title == input, renderCoffees(ARR COFFEE IF MATCHES)
// // then: render: that coffee



// render /build 1 coffee
// this creates the table titles that we deleted
function renderCoffee(coffee) {
    var html = '<div class="coffee d-flex flex-wrap col-6">';
    // html += '<div>' + coffee.id + '</div>';
    html += '<h3 class="d-inline">' + coffee.name +'</h3>'+ '<span' +
        ' class="ms-2">' + coffee.roast + '</span>';
    // html += ;
    html += '</div>';

    return html;
}

// renders list of coffees
function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) { //counting down list
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value; //looks up w/in roast type
    var filteredCoffees = []; //empty array?
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            //if input == var "coffees" selection below
            filteredCoffees.push(coffee);
            //pushes our input within the array (possibly makes it the
            // definitive search value
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
// helps with searching id#, name and roast

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

//search bar
function searchCoffee(){
    var searchInput = document.getElementById("submit").value.toLowerCase();
    var coffeeSearch = document.getElementsByClassName("coffees");

    for (var i=0; i < coffeeSearch.length; i++) {
        if (!coffeeSearch[i].innerHTML.toLowerCase().includes(searchInput)){
            coffeeSearch[i].style.display="none";
        } else {
            coffeeSearch[i].style.display="list-item";
        }

    }

}

var typingSearch = document.addEventListener("keyup", searchCoffee);



var x = roastSelection.addEventListener("click", roast);

function roast(){
    var roastType = document.querySelector(".roast-type1").value;

    for (var i=0; i < roastType.length; i++)
        if (!(i = 1)){
            roastType[i].style.display = "none";
        } else if (!(i = 2)){
            roastType[i].style.display = "none";
        } else if (!(i = 3)){
            roastType[i].style.display = "none";
        } else {
            roastType[i].style.display = "list-item"
        }
}
