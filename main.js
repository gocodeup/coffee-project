"use strict"

function renderCoffee(coffee) {
    var html = "<div class = 'col-6 coffee'>" + "<div class='justify-content-start d-flex flex-row'>"
    + '<h2>' +  coffee.name + "</h2>" + "<p class='ml-2 my-auto pt-1 text-muted'>" + coffee.roast + '</p>' + "</div>";
    html += '</div>';

    return html;
}
 function renderCoffees(coffees) {
     var html = '';
     for(var i = 0; i < coffees.length; i++) {
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
        else if (selectedRoast === 'all'){
            filteredCoffees = coffees;
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function searchBar(e) {
    var input, filter;
    input = search.value;
    filter = input.toUpperCase();

    for (var i = 0; i < coffees.length; i++) {
        if (coffees[i].name.toUpperCase().indexOf(filter) > -1){
            console.log();
        }
    }

    console.log(searchBar());;
    // console.log(coffee.name[i].indexOf(input) > -1);

    ///w3 schools stuff
    // Declare variables
    // var input, filter, ul, li, a, i, txtValue;
    // input = document.getElementById('search');
    // filter = input.value.toUpperCase();
    // tbody info here
    // ul = document.getElementById("myUL");
    // li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    // for (i = 0; i < li.length; i++) {
    //     a = li[i].getElementsByTagName("a")[0];
    //     txtValue = a.textContent || a.innerText;
    //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //         li[i].style.display = "";
    //     } else {
    //         li[i].style.display = "none";
    //     }
    // }
    /////////
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

var search = document.querySelector('#search');



tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

search.addEventListener('keydown', searchBar);


