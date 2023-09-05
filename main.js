"use strict";

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: "Light City", roast: "light"},
    {id: 2, name: "Half City", roast: "light"},
    {id: 3, name: "Cinnamon", roast: "light"},
    {id: 4, name: "City", roast: "medium"},
    {id: 5, name: "American", roast: "medium"},
    {id: 6, name: "Breakfast", roast: "medium"},
    {id: 7, name: "High", roast: "dark"},
    {id: 8, name: "Continental", roast: "dark"},
    {id: 9, name: "New Orleans", roast: "dark"},
    {id: 10, name: "European", roast: "dark"},
    {id: 11, name: "Espresso", roast: "black"},
    {id: 12, name: "Viennese", roast: "black"},
    {id: 13, name: "Italian", roast: "black"},
    {id: 14, name: "French", roast: "black"},
];

//TODO: This is the beginning of local Storage use. Makes data persistent.
//declares empty array to push all coffees to local storage
let storedCoffee = [];
//grabs the local array data from local storage (will only exist if user has visited and used our site before), will be null if first visit/use
storedCoffee = JSON.parse(localStorage.getItem(`storedCoffee`));

//storedCoffee variable will always be null on first page visit since the local storage key has not yet been stored, so we need to account for this by adding all the coffees from our coffees array into it. Otherwise, renderedCoffees function displays nothing.
if (storedCoffee === null) {
    storedCoffee = coffees;
    localStorage.setItem("storedCoffee", JSON.stringify(storedCoffee));
    storedCoffee = JSON.parse(localStorage.getItem(`storedCoffee`));
    renderCoffees(storedCoffee);
}

//variable targeting the HTML section where the rendered coffees are displayed
var tbody = document.querySelector("#coffees");

//variable targeting the roast selection of the first form
var roastSelection = document.querySelector("#roast-selection");

//displays all the coffee inside storedCoffee on the screen
tbody.innerHTML = renderCoffees(storedCoffee);

// puts cards on the screen
function renderCoffee(coffee) {
    var html = "<div class=\"coffee d-flex justify-content-between\">";
    html += "<div>"
    html += "<h2>" + coffee.name + "</h2>";
    html += "<p>" + coffee.roast + "</p>";
    html += "</div>"
    html += "<div>"
    //Adds images to coffee names
    html += "<img src=\"" + coffee.image + "\" alt=\"" + coffee.name + "\" style='height: 100px; width: 100px; border-top-left-radius: 20px;\n" + "border-bottom-right-radius: 20px;'>"
    html += "</div>"
    html += "</div>";

    return html;
}

//sorts the coffees by id in descending order so that newest coffees are displayed first when filtered by roast selection all.
//enforces text format of Added Coffee Names to be consistent when displayed in HTML.
function renderCoffees(coffees) {
    coffees.image = "";

    for (let i = 0; i < coffees.length; i++) {
        if (coffees[i].roast === "light") {
            coffees[i].image = "img/light-roast.jpeg";
        } else if (coffees[i].roast === "medium") {
            coffees[i].image = "img/medium-roast.jpeg";
        } else if (coffees[i].roast === "dark") {
            coffees[i].image = "img/dark-roast.jpeg";
        } else {
            coffees[i].image = "img/extra-dark.jpeg";
        }
    }
    let str = "";
    for (let i = 0; i < coffees.length; i++) {
        str = coffees[i].name.split(" ");
        str.forEach((word, index) => {
            let firstLetter = word.charAt(0).toUpperCase();
            let rest = word.slice(1).toLowerCase();
            str[index] = firstLetter + rest;
        });
        str = str.join(" ");
        coffees[i].name = str;
    }
    var html = "";
    for (var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees.sort()[i]);
    }
    return html;
}

//updates the rendered coffees by roast type
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    storedCoffee.forEach(function (coffee) {
        if (selectedRoast === "all") {
            tbody.innerHTML = renderCoffees(storedCoffee);
        } else if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
            tbody.innerHTML = renderCoffees(filteredCoffees);
        }
    });
}

// Event listener triggered when roast selection is changed
roastSelection.addEventListener(`change`, updateCoffees);

//Function to update the rendered coffee list to match results based on what the user is typing into the Coffee Name input
let coffeeSearch = document.getElementById("coffee-name");
let filteredCoffeeNames = [];
function updateValue(event) {
    event.preventDefault();
    console.log(event.target.value);
    for (let i = 0; i < storedCoffee.length; i++) {
        if (
            storedCoffee[i].name
                .toLowerCase()
                .includes(event.target.value.toLowerCase())
        ) {
            filteredCoffeeNames.push(storedCoffee[i]);
        }
    }
    tbody.innerHTML = renderCoffees(filteredCoffeeNames);
    filteredCoffeeNames = [];
}
// Event listener triggered when the user types inside the targeted input
coffeeSearch.addEventListener(`input`, updateValue);

//TODO:Beginning of code for add a coffee form
//variable storing the add coffee form so we can target it
let addCoffeeForm = document.querySelector(".add-coffee-form");

//event listener for add coffee form that runs when the form is submitted
addCoffeeForm.addEventListener(`submit`, (event) => {
    event.preventDefault();
    //variable that stores the data entered into all form inputs
    let formData = new FormData(addCoffeeForm);
    console.log(formData);

    //variable that stores the values of formData in an object
    //uses the form input HTML name attributes as the object property
    let formObj = Object.fromEntries(formData);
    console.log(formObj);

    //checks if the added coffee name exists, prevents user from submitting same coffee name more than once
    for (let i = 0; i < storedCoffee.length; i++) {
        if (storedCoffee[i].name.toLowerCase() === formObj.name.toLowerCase()) {
            return alert("coffee already exists");
        }
    }
    storedCoffee.push(formObj);
    for (let i = 0; i < storedCoffee.length; i++) {
        if (storedCoffee[i].id === "") {
            storedCoffee[i].id = i + 1;
        }
    }
    localStorage.setItem("storedCoffee", JSON.stringify(storedCoffee));
    storedCoffee = JSON.parse(localStorage.getItem(`storedCoffee`));
    tbody.innerHTML = renderCoffees(storedCoffee);
});
