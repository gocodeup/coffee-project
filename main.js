"use strict"


//Function to write coffee names and roast into bootstrap columns on page, once they've been decided//
function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<div class = \'inlinediv col-xs-6 bottom\'>' + '<h2>' + coffee.name + '</h2>';
    html += '<p id=\'grey\'>' + coffee.roast +'</p>'+ '</div>';
    // html += '</tr>';

    return html;
}

//For loop to decide which coffees will be written into HTML div - based on an array.//
function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i <= coffees.length-1; i++) {
        html += renderCoffee(coffees[i]);

    }
    return html;
}


//Function that filters what coffee is included in coffees array, based on what is selected from dropdown menu.
function updateCoffees(e) {
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
        else if(selectedRoast === 'All'){
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

//Array of all coffee names and roasts.
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


//Function that creates a new array of coffees, if the name includes letters in search terms.
function nameSearch (){
        var newList = [];
    if(roastSelection.value === 'All'){
        coffees.forEach(function(coffee){
            var coffeename = coffee.name;
            if(coffeename.toLowerCase().includes(nameSelection.value.toLowerCase())){
                newList.push(coffee);
            }
        });
        tbody.innerHTML = renderCoffees(newList);
    }
    else {
        var newCoffeeList = [];
            coffees.forEach(function (coffee) {
               if(coffee.roast === roastSelection.value){
                   newCoffeeList.push(coffee);
               }
            });
        newList = [];
        newCoffeeList.forEach(function(coffee){
            var coffeename = coffee.name;
            if(coffeename.toLowerCase().includes(nameSelection.value.toLowerCase())){
                newList.push(coffee);
            }
        });
        tbody.innerHTML = renderCoffees(newList);
    }
}






//Function that lets user create a new coffee and push it into the coffees array.
function addNewCoffee(){
    var newCoffeeRoast = document.getElementById('newRoast');
    var newCoffeeName = document.getElementById('newCoffeeName');
    var newCoffee = {
        name:newCoffeeName.value,
        roast:newCoffeeRoast.value
    };
    coffees.push(newCoffee);
    tbody.innerHTML = renderCoffees(coffees);


}


var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var nameSelection = document.querySelector('#name-selection');
var newCoffeeButton = document.querySelector('#newCoffeeButton');

tbody.innerHTML = renderCoffees(coffees);

roastSelection.addEventListener('change', updateCoffees);
nameSelection.addEventListener('keyup',nameSearch);
newCoffeeButton.addEventListener('click', addNewCoffee);



