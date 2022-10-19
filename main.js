"use strict"

// Variables being declared
// ref var for html
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
var customCoffees = [
    // [];
    // = [
    // {},
    // {id: 15, name: '', roast: '', img: ''},

    /*-------- uncomment to work on images ---------*/
    // {id: 0, name: '', roast: '', img: ''},
    // {id: 0, name: '', roast: '', img: ''},
    // {id: 0, name: '', roast: '', img: ''},
    // {id: 0, name: '', roast: '', img: ''},
    // {id: 0, name: '', roast: '', img: ''},
];
// Coffee Objects --> Bootstrap Cards
function renderCoffee(coffee) {
    var html = `<div class="container-fluid justify-content-center col-12 col-md-6 col-lg-4 mb-3">`;
    html += `<div id="${coffee.id}"  class="card h-100 coffee-cards" style="background-image: url(${coffee.bgimg})">`;
    html += `<img src="${coffee.img}" class="card-img-top coffee-cards-img order rounded-0" alt="...">`;
    html += `<h3 class="d-flex justify-content-center card-title p-2 border border-dark border-5 border-bottom-0 border-start-0 border-end-0 m-0">${coffee.name}</h3>`
    html += `<p class="d-flex justify-content-center mt-2 mb-2">${coffee.roast} Roast</p>`;
    html += `<p class="d-flex justify-content-center fst-italic">${coffee.stats}</p>`;
    html += `<p class="d-flex justify-content-end m-0 pb-1 pe-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cup-hot" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6H.5ZM13 12.5a2.01 2.01 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5ZM2.64 13.825 1.123 7h11.754l-1.517 6.825A1.5 1.5 0 0 1 9.896 15H4.104a1.5 1.5 0 0 1-1.464-1.175Z"/>
  <path d="m4.4.8-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 3.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8Zm3 0-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 6.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8Zm3 0-.003.004-.014.019a4.077 4.077 0 0 0-.204.31 2.337 2.337 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.198 3.198 0 0 1-.202.388 5.385 5.385 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 9.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8Z"/>
</svg></p>`;
    html += `</div>`;
    html += `</div>`;
    return html;
}
// Presenting Coffee Cards in Ascending Order
function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        // console.log("coffees[i]: ", coffees[i]);
        html += renderCoffee(coffees[i]);
    }
    return html;
}
// todo: include ability to search incomplete terms.  Ex:  Search 'city' and return (City, Light City, Half City)
// Preset Option Search Function
function updateCoffees(e) {
    if (e) {
        e.preventDefault(); // don't submit the form, we just want to update the data
    }
    console.log("coffees: ", coffees);
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
    filteredCoffees.sort((coffeea, coffeeb) => coffeea.id < coffeeb.id? 0:-1)
    console.log(filteredCoffees)
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
// gives the custom placeholder object a coffee name from input

function newObjectName() {
    customCoffees.name = customName.value
    // var newName = customName.value
}
// gives the custom placeholder object a new roast from the input
function newObjectRoast() {

    let newId = coffees.length +2;

    if (customSelection.value === "Light") {
        // let newId = coffees.length +2;
        let lightCustom = {id: newId, name: customName.value, roast: customSelection.value, img:'img/light_city.jpeg'};
        coffees.unshift(lightCustom);
        //  customCoffees.img = 'img/italy.jpeg'
        //  customCoffees.roast = customSelection.value
    } else if (customSelection.value === "Medium") {
        let mediumCustom = {id: newId, name: customName.value, roast: customSelection.value, img:'img/american.jpeg'};
        coffees.unshift(mediumCustom);
        // customCoffees.img = 'img/shrek.png'
        // customCoffees.roast = customSelection.value
    } else if (customSelection.value === "Dark") {
        let heavyCustom = {id: newId, name: customName.value, roast: customSelection.value, img:'img/viennese.jpeg'};
        coffees.unshift(heavyCustom);
        // customCoffees.img = 'img/european.jpeg'
        // customCoffees.roast = customSelection.value
    } else {
        let whoopsCustom = {id: newId, name: customName.value, roast: customSelection.value, img:'img/high.jpeg'};
        coffees.unshift(whoopsCustom);
        // customCoffees.img = 'img/city.jpeg'
        // customCoffees.roast = customSelection.value
    }

    /*------- uncomment to work on images -----*/
    // if (customSelection.value === "Light") {
    //     customCoffees[0].img = 'img/american.jpeg'
    //     customCoffees[0].roast = customSelection.value
    //     customCoffees[0].name = customName.value
    //     customCoffees[0].id = 15;
    //     coffees.unshift(customCoffees[0]);
    // } else if (customSelection.value === "Medium") {
    //     customCoffees[1].img = 'img/breakfast.jpeg'
    //     customCoffees[1].roast = customSelection.value
    //     customCoffees[1].name = customName.value
    //     customCoffees[1].id = 16;
    //     coffees.unshift(customCoffees[1]);
    // } else if (customSelection.value === "Dark") {
    //     customCoffees[2].img = 'img/city.jpeg'
    //     customCoffees[2].roast = customSelection.value
    //     customCoffees[2].name = customName.value
    //     customCoffees[2].id = 17;
    //     coffees.unshift(customCoffees[2]);
    // } else {
    //     customCoffees[3].img = 'img/french.jpeg'
    //     customCoffees[3].roast = customSelection.value
    //     customCoffees[3].name = customName.value
    //     customCoffees[3].id = 18;
    //     coffees.unshift(customCoffees[3]);
    // }
}
//     updates the coffee object to add the newly custom coffee to the array of coffees
function updateCoffeesObject(e) {
    if (e) {
        e.preventDefault(); // don't submit the form, we just want to update the data
    }
    console.log(customCoffees);

    // coffees.unshift(customCoffees);
    localStorage.setItem('name', customName.value);
    localStorage.setItem('value', customSelection.value);
    nameDisplayCheck();
    // calls updateCoffees again to render the updated coffee object (with the new custom coffee)
    updateCoffees();
}
function clearLocal() {
    localStorage.removeItem('name');
    localStorage.removeItem('value');
    nameDisplayCheck();
}
function nameDisplayCheck() {
    if (localStorage.getItem('name') && localStorage.getItem('value')) {
        /*------ uncomment to add more coffees -----*/
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
// Event Responses
// coffeeSubmit.onclick = updateCoffees
roastSelection.onchange = updateCoffees
roastName.onkeyup = updateCoffees
customName.onkeyup = newObjectName
customSelection.onchange = newObjectRoast
customCoffeeSubmit.onclick = updateCoffeesObject

forgetBtn.onclick = clearLocal
darnBtn.onclick = hideForget
updateCoffees();
// submitButton.addEventListener('click', updateCoffees);


// another
// grab values from input
// create anew obj
// append obj to existing display (push/unshift to array)

// grab the value as hte user types
// let addedCoffee;
// roastName.onkeyup(function(){
//     addedCoffee = roastName.value;
// })

// create a new array (customCoffees)
// on submit ->
// create a new object
// pass the values grabbed as properties:values to the newly created object
// push the obj into the array
// coffees.unshift(customCoffees)