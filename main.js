"use strict"

function renderCoffee(coffee) { //put the coffees into a table
    var html = '<div class="card coffee card-body d-flex justify-content-center text-center" id="big-div">'; //define class and table row
    // html += '<div class="coffee-data">' + coffee.id + '</a></div>'; // get id
    html += '<div class="coffee-data card-img-top">' + coffee.img + '</div>';
    html += '<div class="coffee-data card-title" > ' + coffee.name + '</div>'; // get name
    html += '<div class="coffee-data card-region">' + coffee.region + '</div>'; // ger sourced region
    html += '<div class="coffee-data card-roast">' + coffee.roast + '</div>'; // ger roast
    html += '<div class="coffee-data card-price" >' + coffee.price + '</div>'; // ger price
    html += '</div>'; // end table row

    return html; //return the table to renderCoffee
}

function renderCoffees(coffees) { //loops through coffees, add each coffee to html
    var html = '';
    for(var i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}


//coffee roast selection
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data

    var selectedRoast = roastSelection.value; //filter the selection
    var filteredCoffees = []; // the bucket

    if(selectedRoast !== 'all') { //not all? do this
        coffees.forEach(function(coffee) { //iterate through entire object
            if (coffee.roast === selectedRoast) { // does the roast selection match? do this
                filteredCoffees.push(coffee); // push the item to bucket
            }
        });
        tbody.innerHTML = renderCoffees(filteredCoffees); //display the bucket
    } else if (coffees.roast === " "){ // do it match the all? do this
        tbody.innerHTML = renderCoffees(coffees); //show all coffee items
    }

}


//coffee roast user input selection
function updateInputCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data

    var selectedRoast = inputSelection.value.toLowerCase();// standardize input selection
    var filteredCoffees = []; //The bucket

    coffees.forEach(function(coffee) { //
        if(coffee.name.toLowerCase().match(selectedRoast) || coffee.roast.toLowerCase().match(selectedRoast)) {
            filteredCoffees.push(coffee);
        } else if (coffees.roast === " "){
            tbody.innerHTML = renderCoffees(coffees); //show all coffee items
        }else {
            document.getElementById("error-message").innerHTML =  "Whoops, we could not find your roast"; //show error message
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', region: "Columbia", roast: 'light', price: "$14.75", img:'<img src="img/PngItem_3904454.png" id="image" >'},
    {id: 2, name: 'Half City', region: "Columbia", roast: 'light', price: "$14.75", img:'<img src="img/PngItem_3904454.png" id="image">'},
    {id: 3, name: 'Cinnamon', region: "Brazil", roast: 'light', price: "$14.75", img:'<img src="img/PngItem_3904454.png" id="image">'},
    {id: 4, name: 'City', region: "Columbia", roast: 'medium', price: "$14.75", img:'<img src="img/PngItem_3904454.png" id="image">'},
    {id: 5, name: 'American', region: "Ethiopia", roast: 'medium', price: "$14.75", img:'<img src="img/PngItem_3904454.png" id="image">'},
    {id: 6, name: 'Breakfast', region: "Columbia", roast: 'medium', price: "$14.75", img:'<img src="img/PngItem_3904454.png" id="image">'},
    {id: 7, name: 'High', region: "Columbia", roast: 'dark', price: "$14.75", img:'<img src="img/PngItem_3904454.png" id="image">'},
    {id: 8, name: 'Continental', region: "Columbia", roast: 'dark', price: "$14.75", img:'<img src="img/PngItem_3904454.png" id="image">'},
    {id: 9, name: 'New Orleans', region: "Ethiopia", roast: 'dark', price: "$14.75", img:'<img src="img/PngItem_3904454.png" id="image">'},
    {id: 10, name: 'European', region: "Brazil", roast: 'dark', price: "$14.75", img:'<img src="img/PngItem_3904454.png" id="image">'},
    {id: 11, name: 'Espresso', region: "Columbia", roast: 'dark', price: "$14.75", img:'<img src="img/PngItem_3904454.png" id="image">'},
    {id: 12, name: 'Viennese', region: "Brazil", roast: 'dark', price: "$14.75", img:'<img src="img/PngItem_3904454.png" id="image">'},
    {id: 13, name: 'Italian', region: "Ethiopia", roast: 'dark', price: "$14.75", img:'<img src="img/PngItem_3904454.png" id="image">'},
    {id: 14, name: 'French', region: "Brazil", roast: 'dark', price: "$14.75", img:'<img src="img/PngItem_3904454.png" id="image">'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.getElementById('roast-selection');
var roastSelection = document.querySelector('#roast-selection'); //user input coffee selection
var inputSelection = document.getElementById('inputSelection');

tbody.innerHTML = renderCoffees(coffees); //adds coffees to table body

submitButton.addEventListener('change', updateCoffees);
inputSelection.addEventListener('keyup', updateInputCoffees);

