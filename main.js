"use strict"

function renderCoffee(coffee) {
    var html = '<div id="coffee">';
    // html += '<h1 id="idnumber">' + coffee.id + '</h1>';
    html += '<h1>'+  coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {

        html += renderCoffee(coffees[i]);
    }

    return html;
}


var roastSelection = document.querySelector('#roast-selection');

roastSelection.addEventListener('change', function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data

    var selectedRoast = roastSelection.value;

    var filteredCoffees = [];
    coffees.forEach(function(coffee) {

        if (coffee.roast === selectedRoast) {

            filteredCoffees.push(coffee);
        } else if (roastSelection.value === 'All') {
            filteredCoffees.push(coffee)
        }
    });
    console.log(filteredCoffees)
    tbody.innerHTML = renderCoffees(filteredCoffees);
});

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






//declare new coffee object that will be structured the same as all the other objects in the coffee array
// let newCoffee = {
// set the values of my properties to the input of what my user types in
// id: "",(this will be equal to my array length + 1)
// name: "",(this will have a value of what my user types in which i can get via dom selector)
// roast: ""(this will have a value of what my user types in which i can get via dom selector)
// };


//push to coffees array
// coffees.push(newCoffee)

let newRoast= document.querySelector('#roast-selection2')
let newName=document.querySelector('#searchroast2')



document.getElementById('submit1').addEventListener("click",function() {
    let newCoffee = {
        id: coffees.length + (1),
        name: newName.value,
        roast: newRoast.value,
    };

    coffees.push(newCoffee);
    tbody.innerHTML = renderCoffees(coffees);


    // localStorage.setItem('searchroast2',newName);

});


var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit1');




let searchbox = document.getElementById('searchroast1');
searchbox.addEventListener('keydown',function searchRoast(){
    let searchInput = searchbox.value.toUpperCase();
    let filteredCoffees = [];



    coffees.forEach(function (coffee){
        if(coffee.name.toUpperCase().includes(searchInput)){
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML=renderCoffees(filteredCoffees)
});


tbody.innerHTML = renderCoffees(coffees);

// submitButton.addEventListener('click',updateCoffees);


// coffees.forEach(function(coffee) {
//
//     if (coffee.roast === selectedRoast) {
//
//         filteredCoffees.push(coffee);
//     }
// let searchRoast = document.getElementById('searchroast1');

// searchRoast.addEventListener('keydown',

// let newCoffee = {
//     id: coffees.length + (1),
//     name: newName.value,
//     roast: newRoast.value,
// };



//
// localStorage.setItem("Coffees",coffees);
//
// console.log(coffees_deserialized);
