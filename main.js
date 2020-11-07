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
    {id: 14, name: 'French', roast: 'dark'}
]
//=========THE COFFEES=========//




function renderCoffee(coffee) {
    var html = '<div class="coffee" style="display: flex; flex-direction: column; flex-wrap: wrap; width: 200px; height: 22px; justify-content: space-around; align-items: center">';
    html += '<h3>' + coffee.name + '</h3>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}







//===========CUP HOVERS AND ADDING THE COFFEES TO THEM============//
var lightCoffeeCup = document.getElementById("lightCoffee");
var allLightCoffees = document.getElementById("eachLight");
lightCoffeeCup.addEventListener("mouseover", function(){
   var theLightCoffees = "";
   allOfOurCoffees.forEach((coffee) =>{
      if(coffee.roast === "light"){
          theLightCoffees += coffee.name + "\n";
      }
   });
   allLightCoffees.style.display="inline-block";
   allLightCoffees.innerText = theLightCoffees;
});

function leftLightCoffee () {
    allLightCoffees.style.display = "none";
}

lightCoffeeCup.addEventListener("mouseleave", function(){
    setTimeout(leftLightCoffee, 750);
});



var mediumCoffeeCup = document.getElementById("mediumCoffee");
var allMediumCoffees = document.getElementById("eachMedium");
mediumCoffeeCup.addEventListener("mouseover", function(){
    var theMediumCoffees = "";
    allOfOurCoffees.forEach((coffee) =>{
        if (coffee.roast === "medium") {
            theMediumCoffees += coffee.name + "\n";
        }
    });
    allMediumCoffees.style.display="inline-block";
    allMediumCoffees.innerText = theMediumCoffees;
});
function leftMediumCoffee(){
    allMediumCoffees.style.display = "none";
}

mediumCoffeeCup.addEventListener("mouseleave", function() {
    setTimeout(leftMediumCoffee, 750);
});




var darkCoffeeCup = document.getElementById("darkCoffee");
var allDarkCoffees = document.getElementById("eachDark");
darkCoffeeCup.addEventListener("mouseover", function(){
    var theDarkCoffees = "";
    allOfOurCoffees.forEach((coffee) => {
        if (coffee.roast === "dark"){
            theDarkCoffees += coffee.name + "\n";
        }
    });
    allDarkCoffees.style.display="inline-block";
    allDarkCoffees.innerText = theDarkCoffees;
});
function leftDarkCoffee(){
    allDarkCoffees.style.display = "none";
}

darkCoffeeCup.addEventListener("mouseleave", function(){
    setTimeout(leftDarkCoffee, 750);
});




var holidayCoffeeCup = document.getElementById("holidayCoffee");
var allHolidayCoffees = document.getElementById("eachHoliday");
holidayCoffeeCup.addEventListener("mouseover", function() {
    var theHolidayCoffees = "";
    allOfOurCoffees.forEach((coffee) => {
        if (coffee.roast === "holiday"){
            theHolidayCoffees += coffee.name + "\n";
        }
    });
    allHolidayCoffees.style.display = "inline-block";
    allHolidayCoffees.innerText = theHolidayCoffees;
});

function leftHolidayCoffee() {
    allHolidayCoffees.style.display ="none";
}

holidayCoffeeCup.addEventListener("mouseleave", function(){
   setTimeout(leftHolidayCoffee, 750);
});
//===========CUP HOVERS AND ADDING THE COFFEES TO THEM============//























//==========APPLY SEASON CHANGES============//
let season = document.getElementById("seasons");
let chooseDate = document.getElementById("chooseDate");
var dogLogo = document.getElementById("dogLogo");

season.addEventListener("click", function (){
    season.disabled = true;
    let month = chooseDate.value.substring(5, 7);
    allOfOurCoffees = coffees;
    if(month >= 3 && month <= 5){
        document.body.style.backgroundImage = "url('image/stpatricksdaylogo.png')";
        dogLogo.src = "image/stpatricksdog.png";
        springCoffees.forEach((coffee) =>{
            allOfOurCoffees.push(coffee);
        });
    } else if(month >= 6 && month <= 8){
        // document.body.style.backgroundImage = "url('image/stpatricksdaylogo.png')";
        // dogLogo.src = "image/stpatricksdog.png";
        summerCoffees.forEach((coffee) =>{
            allOfOurCoffees.push(coffee);
        });
    } else if(month >= 9 && month <= 11){
        document.body.style.backgroundImage = "url('image/fallbackground.jpg')";
        dogLogo.src = "image/falldog.png";
        fallCoffees.forEach((coffee) =>{
            allOfOurCoffees.push(coffee);
        });
    } else if((month > 11 && month < 13) || (month < 3 && month > 0)){
        document.body.style.backgroundImage = "url('image/winterbackground.jpg')";
        dogLogo.src = "image/santadog.png";
        winterCoffees.forEach((coffee) =>{
            allOfOurCoffees.push(coffee);
        });
    } else if(month === ""){
        console.log("no input");
    }
});
//==========APPLY SEASON CHANGES============//













let coffeeName = document.getElementById("coffeeName");
let inHouseCoffee = document.getElementById("inHouseCoffeeRoast");
let allCoffeesSpot = document.getElementById("coffeeRoasts");
let filteredCoffees = [];
//==========ROAST SELECTIONS============//
function logMatchingInHouseRoasts() {
    // e.preventDefault(); // don't submit the form, we just want to update the data
    filteredCoffees = [];
    var selectedRoast = inHouseCoffee.value;
    allOfOurCoffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if(selectedRoast === "all"){
            filteredCoffees.push(coffee);
        }
    });
    allCoffeesSpot.innerHTML = renderCoffees(filteredCoffees);
}
inHouseCoffee.addEventListener("change", logMatchingInHouseRoasts);
//==========ROAST SELECTIONS============//


//=========COFFEE SEARCH=========//
function logMatchingCoffees(){
    let allCoffees = [];
    if(coffeeName.value.length > 0) {
        filteredCoffees.forEach((coffee) => {
            if (coffee.name.toLowerCase().includes(coffeeName.value.toLowerCase())) {
                allCoffees.push(coffee);
            }
        });
        allCoffeesSpot.innerHTML = renderCoffees(allCoffees);
    } else {
        allCoffeesSpot.innerHTML = renderCoffees(filteredCoffees);
    }
}
coffeeName.addEventListener("input", logMatchingCoffees);
//=========COFFEE SEARCH=========//












//--------ADD CUSTOM COFFEE----------//
var customRoast = document.getElementById("customCoffeeRoast");
var customName = document.getElementById("customCoffeeName");
var addCustom = document.getElementById("customCoffeeButton");


addCustom.addEventListener("click", function (){
    var roastChoice = customRoast.value;
    var nameChoice = customName.value;

    var newCoffee = {};
    newCoffee.id = (allOfOurCoffees[(allOfOurCoffees.length-1)].id) + 1;
    newCoffee.name = nameChoice;
    newCoffee.roast = roastChoice;

    allOfOurCoffees.push(newCoffee);
    coffees.push(newCoffee);
});
//--------ADD CUSTOM COFFEE----------//
















// // from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide