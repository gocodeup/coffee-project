"use strict"
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
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

//updated as per instructions of Readme
function renderCoffee(coffee) {
    let html = '<div class="d-flex align-items-end ">'
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p class="ms-3 roast-type">' + coffee.roast + '</p>';
    html += '</div>'
    return html; //it will return: <div class=coffee><h1>coffee.name</h1><p class= "ms-3">coffee.roast</p></div>
}

// This function will loop through renderCoffee, in the event there is an array
//Any array has to be reversed later
function renderCoffees(coffees) {
    let html = ''; //string Bucket
    for(let i = coffees.length - 1; i >= 0; i--) { // <= the order of [i] will display highest ID # to lowest ID #
        html += renderCoffee(coffees[i]); //html = "renderedCoffee(input[i])"
    }
    return html; //it will return something like this: <div><h1>"NAME"</h1><p>"ROAST"</p></div>
}


//Filters #1: only by Selection Option #1
//Needs another Filter for Text-Input #1
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roast.value;//roast selection value L/M/D, not "all"
    let filteredCoffees = []; //array bucket
    coffees.forEach(function(coffee) { //individualises to coffee
        if (coffee.roast === selectedRoast) {//from the coffee-obj-arr roast L/M/D=== value of L/M/D, All is not included
            filteredCoffees.push(coffee);
        }
    });
    coffeeDiv.innerHTML = renderCoffees(filteredCoffees); //write in the inner coffeeDiv in the format presented in the function rendersCoffee and looped via renderedCoffeeS

    if(selectedRoast === 'all') {
        coffeeDiv.innerHTML = renderCoffees(coffees);
    }
}

//Filters #2: only by text-input #1
function coffeeSearch(e) {
    e.preventDefault();
    let searchTerm = searchCoffee.value.toLowerCase(); //converts input text to lowercase
    let filteredCoffees = [];//array bucket to collect stuff
    coffees.forEach(function(coffee){//looping the var of coffees
        if (coffee.name.toLowerCase().includes(searchTerm)){ //Thank Gil for this tip
            filteredCoffees.push(coffee);
        }
    })
    coffeeDiv.innerHTML = renderCoffees(filteredCoffees);
    //write w/in coffeeDiv in the format displayed in the function renderCoffee the filteredCoffees
}

// +++++++++++++++++++++++++++++++ADD COFFEE SECTION UNFINISHED++++++++++++++++++++++++++++++++


function addCoffeeItem(e) {
    e.preventDefault();
    let newCoffeeArr = []; //bucket for new coffee items arraY
    let newCoffeeObj = { //bucket for new obj
        id: coffees.length + 1, //the length + 1... so this should compute to be i = 15, especially since we are pushing
        name: coffeeQuery.value, //#query-coffee's value
        roast: roastAdd.value //added the roast's value
    };//empty object to collect variables
    newCoffeeArr.push(newCoffeeObj); //pushing the newCoffeeObj within the empty newCoffee Array
    coffeeDiv.innerHTML = renderCoffee(newCoffeeArr);
}
// coffeeDiv.innerHTML = renderCoffee(newCoffee);
//https://stackoverflow.com/questions/40250139/how-can-i-push-an-object-into-an-array




//Option Selector #1
let roast = document.querySelector('#roast-selection'); //given
roast.addEventListener("change",updateCoffees); //given, but modified to change


//Button #1
let submitButton = document.querySelector('#submit'); //given
submitButton.addEventListener('click', updateCoffees); //given


//text input #1
let searchCoffee= document.querySelector('#coffee-search'); //given
searchCoffee.addEventListener('input', coffeeSearch); //created

//I hate the naming convetion used!!!!!!!!!!!!!!!!!!!!!
//linked to the function renderCoffeeS(the for loop), NOT renderCoffee w/o "s" (the format)
//EXPLAINATION:
// write w/in .coffeeDiv in the format provided by the function renderCoffee, the coffees object-array,
// but in a reverse array order
coffeeDiv.innerHTML = renderCoffees(coffees.reverse()); //modified from tbody.innerHTML




// ++++++++++++++++++++++++++++++++++++++ADD COFFEE+++++++++++++++++++++++++

//Selection Option #2
// it is click b/c we are submitting the request to add to "Coffees" - object array
let roastAdd = document.querySelector('#roast-add');
// roast.addEventListener("click",);


//Button #2
let buttonSubmit = document.querySelector('#submit-button');
// buttonSubmit.addEventListener('click', updateCoffees);

//text input #2
let coffeeQuery= document.querySelector('#coffee-query');
// coffeeQuery.addEventListener('input',addCoffeeItem );








