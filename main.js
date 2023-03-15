"use strict"

function renderCoffee(coffee) {
    let html = `
        <div class="coffee"> 
        <h4 class="id">${coffee.id}</h4>
            <h4>${coffee.name}</h4> 
            <p>${coffee.roast}</p>
        </div>`
    return html;
}

// function renderCoffee(coffee) {
//     let html =
//         '<div class="coffee">';
//     html += '<div class="ID">' + coffee.id + '</div>';
//     html += '<h4>' + coffee.name + '</h4>';
//     html += '<p>' + coffee.roast + '</p>';
//
//     return html;
// }

// function renderCoffee(coffee) {
//     let html = `<div>
// <h4>${coffee.name}</h4>
// <p>${coffee.roast}</p>
// </div>`
// }



function renderCoffees(coffees) {
    let html = '';
    coffees.sort((a,b) =>
        a.id - b.id)
    for(let i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    // for(let i = coffees.length - 1; i >= 0; i--) {
    //     html += renderCoffee(coffees[i]);
    // }
    return html;
}

function updateCoffees(e) {
    // e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (selectedRoast === 'all') {
            filteredCoffees = coffees;
        } else {
            filteredCoffees = coffees.filter(coffee => coffee.roast === selectedRoast)
        }

    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}


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

let submitButton = document.querySelector('#submit');
let tbody = document.querySelector('#coffees');
let roastSelection = document.querySelector('#roast-selection');
let input = document.getElementById("search");

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);


//inputs the entered value by key or coffee and filters by coffee name. Replaces previous array with current array.
const searchInput = document.querySelector("[data-search]")
searchInput.addEventListener("input", (e) =>{
    const value = e.target.value
    let matchingCoffees = []
    coffees.forEach(coffee => {
        if (coffee.name.toLowerCase().includes(value)){
            matchingCoffees.push(coffee)
        }
    })
    tbody.innerHTML = renderCoffees(matchingCoffees)
});

//Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("myBtn").click();
    }
});

let coffeeName = document.querySelector('#input2')
let roastAddition = document.querySelector("#roast-selection2")
let submitACoffee = document.querySelector('#submit2')
let newCoffee;


function addANewCoffee(){
    let newCoffee = {id: coffees.length + 1, name: coffeeName.value, roast: roastAddition.value}
    if (coffeeName.value === "") {
        alert("Please eneter a coffee name!");
    } else {
        coffees.push(newCoffee);
        coffeeName.value = "";
        console.log(`Added new coffee "${newCoffee.name}"`);
    }
}

submitACoffee.addEventListener('click', function(){
    addANewCoffee();
})