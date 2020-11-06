"use strict"

//creates the table populated by coffees. Uses js coffees object to make table programatically
function renderCoffee(coffee) {
    var html = '<div class="divTableRow">';
    // html += '<td>' + coffee.id + '</td>';
    //will most likely get rid of this line since readme says no IDs
    //To create divs we can switch table parameters used here to divs instead

    html += '<h3 id="name">' + coffee.name + '</h3>';
    html += '<p id="roast">' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}




//defines the order of the coffees as rendered in the table
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
    //selectedRoast is pulling the values from the html in the form with inner id roastSelection
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    //    this looks at the "roast" value from the coffee objects and pushes it into the empty variable if it
    //    matches the entry currently selected in the picklist
    });
    divBody.innerHTML = renderCoffees(filteredCoffees);
//    this takes what has been pushed into the variable and populates it into the table
}





function searchCoffees(e){
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    var searchValue = document.querySelector("#userSearch")
    var listener = function(event) {
        function narrowCoffees(str){
            str = searchValue.value;
            for(var i = 0;i<coffees.length;i++){
                if(coffees[i].name.includes(str)){
                    console.log(i + "returned");
                } else{
                    console.log(i + "not returned");
                }
            }
        }

    //    currently this logs the value inside the input field
    //    we need it to recognize which coffees match the inputted text, and then have those coffees added to the
    //    filtered coffees array, which can then be rendered in the "table" with the innerHTML function below
    }
    searchValue.addEventListener("keyup", listener);
    divBody.innerHTML = renderCoffees(filteredCoffees);
//    this takes what has been pushed into the variable and populates it into the table
}


// function narrowCoffees(str){
//     for(var i = 0;i<coffees.length;i++){
//         if(coffees[i].name.includes(str)){
//             console.log(i + "returned");
//         } else{
//             console.log(i + "not returned");
//         }
//     }
// }



// var searchValue = document.querySelector("#userSearch")
//
// var listener = function(event){
//     console.log(searchValue.value);
//
// }
//
// searchValue.addEventListener("keyup", listener);

//Not sure how to create an input search field for coffees. This will be something to research on stack

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

var divBody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

divBody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
