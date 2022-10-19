"use strict"

// variables being declared
var tbody = document.querySelector('#coffees');
var roastSelection = document.querySelector('#roast-selection');
var coffeeSubmit = document.querySelector('#coffee-submit');
var roastName = document.querySelector('#roast-name');
var customName = document.querySelector('#custom-name');
var customSelection = document.querySelector('#custom-selection');
var customCoffeeSubmit = document.querySelector('#custom-coffee-submit');
var rememberMe = document.querySelector('.remember');
var rememberCustomRoast = document.querySelector('.remember-me-too');
var forgetMe = document.querySelector('.forget');
var forgetBtn = document.querySelector('#forget-submit');
var theBtn = document.querySelector('.btn-container');
var hideBtn = document.querySelector('#forget-btn');
var darnBtn = document.querySelector('.good-enough');
var rollBtn = document.querySelector('#dice-roll-btn');

// array of coffees
var coffees = [
    {id: 1, name: 'Light City', roast: 'Light', img:'img/1.webp', bgimg: "img/test.webp", stats: "+1 Strength +2 Intelligence"},
    {id: 2, name: 'Half City', roast: 'Light', img:'img/3.png', bgimg: "img/normal.jpeg", stats: "+1 Strength +2 Intelligence"},
    {id: 3, name: 'Cinnamon', roast: 'Light', img:'img/8.webp', bgimg: "img/fire.jpeg", stats: "+1 Strength +2 Intelligence"},
    {id: 4, name: 'City', roast: 'Medium', img:'img/12.webp', bgimg: "img/water.jpeg", stats: "+3 Intelligence +2 Constitution"},
    {id: 5, name: 'American', roast: 'Medium', img:'img/5.webp', bgimg: "img/test.webp", stats: "+3 Intelligence +2 Constitution"},
    {id: 6, name: 'Breakfast', roast: 'Medium', img:'img/6.webp', bgimg: "img/normal.jpeg", stats: "+3 Intelligence +2 Constitution"},
    {id: 7, name: 'High', roast: 'Dark', img:'img/7.webp', bgimg: "img/water.jpeg", stats: "+3 Wisdom +3 Charisma"},
    {id: 8, name: 'Continental', roast: 'Dark', img:'img/2.jpeg', bgimg: "img/normal.jpeg", stats: "+3 Wisdom +3 Charisma"},
    {id: 9, name: 'New Orleans', roast: 'Dark', img:'img/9.jpeg', bgimg: "img/water.jpeg", stats: "+3 Wisdom +3 Charisma"},
    {id: 10, name: 'European', roast: 'Dark', img:'img/11.webp', bgimg: "img/test.webp", stats: "+3 Wisdom +3 Charisma"},
    {id: 11, name: 'Espresso', roast: 'Dark', img:'img/4.jpeg', bgimg: "img/normal.jpeg", stats: "+3 Wisdom +3 Charisma"},
    {id: 12, name: 'Viennese', roast: 'Dark', img:'img/13.jpeg', bgimg: "img/fire.jpeg", stats: "+3 Wisdom +3 Charisma"},
    {id: 13, name: 'Italian', roast: 'Dark', img:'img/14.jpeg', bgimg: "img/fire.jpeg", stats: "+3 Wisdom +3 Charisma"},
    {id: 14, name: 'French', roast: 'Dark', img:'img/15.webp', bgimg: "img/normal.jpeg", stats: "+3 Wisdom +3 Charisma"},
];

// object placeholder
var customCoffees = [
];

// coffee objects / bootstrap cards
function renderCoffee(coffee) {
    var html = `<div class="container-fluid d-flex justify-content-center col-12 col-md-6 col-lg-4 mb-3">`;
    html += `<div id="${coffee.id}"  class="card coffee-cards" style="background-image: url(${coffee.bgimg})">`;
    html += `<img src="${coffee.img}" class="card-img-top img-fluid coffee-cards-img order rounded-0" alt="...">`;
    html += `<div class="bottom-half">`;
    html += `<h3 class="d-flex justify-content-center card-title p-2 border border-dark border-5 border-bottom-0 border-start-0 border-end-0 m-0">${coffee.name}</h3>`;
    html += `<p class="d-flex justify-content-center mt-2 mb-2">${coffee.roast} Roast</p>`;
    html += `<p class="d-flex justify-content-center fst-italic">${coffee.stats}</p>`;
    html += `</div>`
    // html += `<p class="d-flex justify-content-end m-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cup-hot" viewBox="0 0 16 16">;
    // <path fill-rule="evenodd" d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6H.5ZM13 12.5a2.01 2.01 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5ZM2.64 13.825 1.123 7h11.754l-1.517 6.825A1.5 1.5 0 0 1 9.896 15H4.104a1.5 1.5 0 0 1-1.464-1.175Z"/>;
    // <path d="m4.4.8-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 3.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8Zm3 0-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 6.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8Zm3 0-.003.004-.014.019a4.077 4.077 0 0 0-.204.31 2.337 2.337 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.198 3.198 0 0 1-.202.388 5.385 5.385 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 9.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8Z"/>;
    // </svg></p>`;
    html += `</div>`;
    html += `</div>`;
    return html;
}

// iterating through object for html js
function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

// functions for preset forms / we also flow through this function for customs & dice-roll
function updateCoffees(e) {
    if (e) {
        e.preventDefault();
    }
    let searchTerm = roastName.value
    var selectedRoast = roastSelection.value;
    var filteredCoffees = coffees.filter(currentCoffee => {
        if (currentCoffee.roast === selectedRoast || selectedRoast === "All") {
            if (searchTerm) {
                return searchTerm.toLowerCase().includes(currentCoffee.name.toLowerCase())
            } else {
                return true
            }
        }
    });

    filteredCoffees.sort((coffeea, coffeeb) => coffeea.id < coffeeb.id ? 0 : -1)
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// functions creating new custom coffees
function newObjectName() {
    customCoffees.name = customName.value;
}
function newObjectRoast() {
    let newId = coffees.length +2;
    if (customSelection.value === "Light") {
        let lightCustom = {id: newId, name: customName.value, roast: customSelection.value, img:'img/two.jpeg', bgimg: "img/water.jpeg", stats: "+3 Constitution -2 Intelligence"};
        coffees.unshift(lightCustom);
    } else if (customSelection.value === "Medium") {
        let mediumCustom = {id: newId, name: customName.value, roast: customSelection.value, img:'img/one.jpeg', bgimg: "img/fire.jpeg", stats: "+3 Constitution -2 Intelligence"};
        coffees.unshift(mediumCustom);
    } else if (customSelection.value === "Dark") {
        let heavyCustom = {id: newId, name: customName.value, roast: customSelection.value, img:'img/three.jpeg', bgimg: "img/normal.jpeg", stats: "+3 Constitution -2 Intelligence"};
        coffees.unshift(heavyCustom);
    } else {
        let whoopsCustom = {id: newId, name: customName.value, roast: customSelection.value, img:'img/four.jpeg', bgimg: "img/fire.jpeg", stats: "+3 Constitution -2 Intelligence"};
        coffees.unshift(whoopsCustom);
    }
}

// functions setting/removing local storage & displaying/hiding forms/buttons
function updateCoffeesObject(e) {
    if (e) {
        e.preventDefault();
    }
    console.log(customCoffees);
    localStorage.setItem('name', customName.value);
    localStorage.setItem('value', customSelection.value);
    nameDisplayCheck();
    updateCoffees();
}
function clearLocal() {
    localStorage.removeItem('name');
    localStorage.removeItem('value');
    nameDisplayCheck();
}
function nameDisplayCheck() {
    if (localStorage.getItem('name') && localStorage.getItem('value')) {
        /*----- uncomment to add more coffees -----*/
        rememberMe.style.display = 'none';
        rememberCustomRoast.style.display = 'none';
        theBtn.style.display = 'none';
        hideBtn.style = 'display';
    }
}
function hideForget() {
    if (customSelection.value === 'select') {
        hideBtn.style.display = 'none';
    }
}

// functions for roll the dice event
function randomCard(items) {
    return [Math.floor(Math.random()*items.length)];
}
function rollingDice(e) {
    if (e) {
        e.preventDefault();
    }
    var playTheGame = coffees[randomCard(coffees)];
    coffees.length = 0;
    coffees.unshift(playTheGame);
    updateCoffees();
}

// onchange events
roastSelection.onchange = updateCoffees;
customSelection.onchange = newObjectRoast;

// onkeyup events
roastName.onkeyup = updateCoffees;
customName.onkeyup = newObjectName;


// onclick events
customCoffeeSubmit.onclick = updateCoffeesObject;
rollBtn.onclick = rollingDice;
forgetBtn.onclick = clearLocal;
darnBtn.onclick = hideForget;

// renders cards when page loads
updateCoffees();