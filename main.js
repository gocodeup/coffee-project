"use strict"

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

//CALLING THE DOM
let displayedCoffee = document.querySelector('#coffees');
let selectedRoast = document.querySelector('.selectEl');
let submitBtn = document.getElementById('addBtn');
let roastSelection = document.querySelector('#roast-selection');
let coffeeSearchBar = document.querySelector('#coffee-search');
let addRoast = document.getElementById('add-roast');
let addName = document.getElementById('add-coffee');


// coffee to be displayed
let filteredCoffee = [];
//--------------------------------------

// this function renders the html into what is being displayed
function renderCoffeeDiv(coffee) {
    let html = '';

    if (coffee.roast === 'light') {
        html += `<div class="col-6 card">

          <img src="https://i.imgur.com/e40rBBn.jpeg" class="card-img-top" alt="...">
          <div class="card-body">
                
                <h2 class="coffee-name">${coffee.name}</h2>
                <p class="coffee-roast">${coffee.roast}</p>
            
          </div>
        </div>`

    } else if (coffee.roast === 'medium') {
        html += `<div class="col-6 card">
        
          <img src="https://i.imgur.com/ROnndBi.jpeg" class="card-img-top" alt="...">
          <div class="card-body">
                
                <h2 class="coffee-name">${coffee.name}</h2>
                <p class="coffee-roast">${coffee.roast}</p>
            
          </div>
        </div>`

    } else {
        html += `<div class="col-6 card">

          <img src="https://i.imgur.com/znwB08l.jpeg" class="card-img-top" alt="...">
          <div class="card-body">
                
                <h2 class="coffee-name">${coffee.name}</h2>
                <p class="coffee-roast">${coffee.roast}</p>
            
          </div>
        </div>`

    }

        }
    return html;
}
//--------------------------------------

// this function pushes the coffee array of objects into the function above
function renderAllCoffeesList(coffees) {
    let html = '';
    for(let i = 0; i < coffees.length; i++) {
        html += renderCoffeeDiv(coffees[i]);
    }
    return html;
};


// updating what is being displayed based on the roast selection
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    filteredCoffee = [];
    let selectedRoast = roastSelection.value;
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast || selectedRoast === 'all') {
            filteredCoffee.push(coffee);
            return displayedCoffee.innerHTML = renderAllCoffeesList(filteredCoffee);
        }
    });
};
//--------------------------------------

// this function is checking what is being searched
function checkCoffeeName () {
    let search = coffeeSearchBar.value;
    let searchedCoffee = [];
    for(let i = 0; i < filteredCoffee.length; i++) {
        if ((filteredCoffee[i].name.toLowerCase()).includes(search) || (filteredCoffee[i].name.toUpperCase()).includes(search)) {
            searchedCoffee.push(filteredCoffee[i])
            console.log(searchedCoffee);
        }
    }
    return displayedCoffee.innerHTML = renderAllCoffeesList(searchedCoffee);
}
//--------------------------------------

//THIS FUNCTION WILL TAKE THE STRING AND CAPITALIZE THE FIRST TWO LETTERS
const capitalizeName = x => {
    const split = x.split(' ');
    for (let i = 0; i < split.length; i++) {
        split[i] = split[i][0].toUpperCase() + split[i].substring(1);
    }
    return split.join(' ');
}

//ADDING COFFEE SECTION
function addCoffee() {
    let roastValue = addRoast.value.toLowerCase();
    // console.log(roastValue);
    let nameValue = addName.value;
    // console.log(nameValue);
    let newCoffee = {
        id: coffees.length + 1,
        name: capitalizeName(nameValue),
        roast: roastValue
    }

    coffees.push(newCoffee);
    return displayedCoffee.innerHTML = renderAllCoffeesList(coffees);
}

//EVENT LISTENERS
displayedCoffee.innerHTML = renderAllCoffeesList(coffees);

selectedRoast.addEventListener('change', updateCoffees);

coffeeSearchBar.addEventListener("keyup", (e) => checkCoffeeName());
submitBtn.addEventListener('click', (e) => addCoffee());