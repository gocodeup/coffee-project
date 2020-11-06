"use strict"
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
let winterCoffees = [
    {id: 15, name: 'GingerBread', roast: 'holiday'},
    {id: 16, name: 'PepperMint', roast: 'holiday'},
    {id: 17, name: 'Eggnog', roast: 'holiday'},
    {id: 18, name: 'Sugar Cookie', roast: 'holiday'},
    {id: 19, name: 'Chestnut', roast: 'holiday'}
];
let springCoffees = [
    {id: 20, name: 'Irish creme', roast: 'holiday'},
    {id: 21, name: 'Green matcha', roast: 'holiday'},
];
let summerCoffees = [
    {id: 22, name: 'Mint', roast: 'holiday'},
    {id: 23, name: 'Hibiscus', roast: 'holiday'},
    {id: 24, name: 'Lavender', roast: 'holiday'}
];
let fallCoffees = [
    {id: 25, name: 'Pumpkin Spice', roast: 'holiday'},
    {id: 26, name: 'Maple', roast: 'holiday'},
    {id: 27, name: 'Chai', roast: 'holiday'},
    {id: 28, name: 'Apple cider', roast: 'holiday'},
    {id: 29, name: 'Caramel', roast: 'holiday'}
];
var allOfOurCoffees = [
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
    {id: 15, name: 'GingerBread', roast: 'holiday'},
    {id: 16, name: 'PepperMint', roast: 'holiday'},
    {id: 17, name: 'Eggnog', roast: 'holiday'},
    {id: 18, name: 'Sugar Cookie', roast: 'holiday'},
    {id: 19, name: 'Chestnut', roast: 'holiday'},
    {id: 20, name: 'Irish creme', roast: 'holiday'},
    {id: 21, name: 'Green matcha', roast: 'holiday'},
    {id: 22, name: 'Mint', roast: 'holiday'},
    {id: 23, name: 'Hibiscus', roast: 'holiday'},
    {id: 24, name: 'Lavender', roast: 'holiday'},
    {id: 25, name: 'Pumpkin Spice', roast: 'holiday'},
    {id: 26, name: 'Maple', roast: 'holiday'},
    {id: 27, name: 'Chai', roast: 'holiday'},
    {id: 28, name: 'Apple cider', roast: 'holiday'},
    {id: 29, name: 'Caramel', roast: 'holiday'}
]

var lightCoffeeCup = document.getElementById("lightCoffee");
var allLightCoffees = document.getElementById("eachLight");
lightCoffeeCup.addEventListener("mouseover", function(){
   var theLightCoffees = "";
   allOfOurCoffees.forEach((coffee) =>{
      if(coffee.roast === "light"){
          theLightCoffees += coffee.name + "\n";
      }
   });
   allLightCoffees.innerText = theLightCoffees;
});

lightCoffeeCup.addEventListener("mouseleave", function(){
    allLightCoffees.style.display = "none";
});



var mediumCoffeeCup = document.getElementById("mediumCoffee");
var allMediumCoffees = document.getElementById("eachMedium");

var darkCoffeeCup = document.getElementById("darkCoffee");
var allDarkCoffees = document.getElementById("eachDark");

var holidayCoffeeCup = document.getElementById("holidayCoffee");
var allHolidayCoffees = document.getElementById("eachHoliday");




























// let season = document.getElementById("seasons");
// let chooseDate = document.getElementById("chooseDate");
//
// season.addEventListener("click", function (){
//     let month = chooseDate.value.substring(5, 7);
//     // season.disabled = true;
//     coffees = coffees.splice(0, 14);
//     if(month >= 3 && month <= 5){
//         document.body.style.backgroundColor = "#edf816";
//         springCoffees.forEach((coffee) =>{
//             coffees.push(coffee);
//         });
//     } else if(month >= 6 && month <= 8){
//         document.body.style.backgroundColor = "#48acc5";
//         summerCoffees.forEach((coffee) =>{
//             coffees.push(coffee);
//         });
//     } else if(month >= 9 && month <= 11){
//         document.body.style.backgroundColor = "#d47529";
//         fallCoffees.forEach((coffee) =>{
//             coffees.push(coffee);
//         });
//     } else if((month > 11 && month < 13) || (month < 3 && month > 0)){
//         document.body.style.backgroundColor = "#64c850";
//         winterCoffees.forEach((coffee) =>{
//             coffees.push(coffee);
//         });
//     } else if(month === ""){
//         console.log("no input");
//     }
// });
//
// let coffeeName = document.getElementById("coffeeName");

// let allCoffeesSpot = document.getElementById("coffeesSpots");
// function logMatchingCoffees(){
//     let allCoffees = "";
//     coffees.forEach((coffee) =>{
//         if(coffee.name.toLowerCase().includes(coffeeName.value.toLowerCase())){
//             allCoffees+=coffee.name + "\n";
//         }
//     });
//     allCoffeesSpot.innerText = allCoffees;
// }
// setInterval(logMatchingCoffees, 250);










function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<td>' + coffee.name + '</td>';
    html += '<td>' + coffee.roast + '</td>';
    html += '</tr>';

    return html;
}

function renderCoffees(coffees) {
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
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide


var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
