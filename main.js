"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee-col-6">' +  coffee.name + ' '
    html += "<p class = 'roast'>" + coffee.roast + "</p>" + '</div>';


    return html;
}
function renderCoffees(coffees) {

    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }

    return html;
}


function renderCoffee(coffee) {
    var cinnamonColor = '';
    var lightRoastBG = '';
    if(coffees.roast === 'light'){
        lightRoastBG = 'bg-warning';
    }
    var mediumRoastBG = '';
    if(coffees.roast === 'medium'){
        mediumRoastBG = 'bg-info';
    }
    var darkRoastBG = '';
    if(coffees.roast === 'dark'){
        darkRoastBG = 'bg-secondary';
    }
    if (coffees.name === 'Cinnamon'){
        cinnamonColor = 'text-danger'
    }


   return `<div class="d-flex flex-column border border-secondary rounded-bottom" style="width: 10rem; margin: 2rem;">
<div class="card-shape">
        <img src="img/coffee-cup.jpeg" class="card-img-top"  alt="${coffee.name}">
                <div class="container-cards">
                    <div class="cards row ">
                <div class="card-body ${lightRoastBG} ${mediumRoastBG} ${darkRoastBG}">
                    <h5 class="card-title ${cinnamonColor}"> ${coffee.name} </h5>
                    <p class="card-text">${coffee.roast} </p>
                </div>
                    </div>
                </div>
           </div>
           </div>`
    // var html = '<tr class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    // html += '<td>' + coffee.name + '</td>';
    // html += '<td>' + coffee.roast + '</td>';
    // html += '</tr>';
    //
    // return html;
}







function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if(coffee.roast === selectedRoast) {
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

// 2 diff conditions match with roast, also needs to match whats typed in search field = to display coffee

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var anotherRoast = document.querySelector('#another-roast');
var newCoffee = document.querySelector('#new-coffee');
var newCoffeeSubmit = document.querySelector('#new-coffee-submit');

var coffeeSelection = document.querySelector('#coffee-selection')

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener('submit', updateCoffees);
// anotherRoast.document.addEventListener('click', sub);


function createCoffee (nameOfCoffee) {
    var nameOfCoffee = nameOfCoffee.split('');
    var coffeeNameSplit = {};
    for (var i = 0; i < nameOfCoffee.length; i++)
        coffeeNameSplit.push = ({
            name: nameOfCoffee[i],
            roast: nameOfCoffee[i]
        })
}



// coffees.forEach(function (coffee, index){
//     console.log(coffees.name + coffees.roast)
// })
//
//
// function createCoffee (nameOfCoffee, roastAdded){
//     this.name = nameOfCoffee;
//     this.roast = roastAdded;
//
// }
// var newCoffee = new createCoffee('Nachos', 'Light')
//
//
// console.log(newCoffee('Nachos', 'light'))

    function myFunction() {
        // Declare variables
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");

        // Loop through all table rows, and hide those who don't match the search query
        for(i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if(td) {
                txtValue = td.textContent || td.innerText;
                if(txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }





