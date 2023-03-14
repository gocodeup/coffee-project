//--      --////--    IIFE  --////--      --//
// (() => {
"use strict";
//--      --////--    VARIABLES  --////--      --//
const tbody = document.querySelector("#coffees");
const submitButton = document.querySelector("#submit");
const roastSelection = document.querySelector("#roast-selection");
const coffeeListWrapper = document.querySelector(".coffee-list-divs");
const userSearch = document.querySelector("#coffee-search");

//--      --////--    UTILITY FUNCTIONS  --////--      --//
const sortedArrayByID = (arr) => {
    return arr.sort((a, b) => {
        const el1 = a.id;
        const el2 = b.id;
        if (el1 < el2) {
            return -1;
        } else if (el1 > el2) {
            return 1;
        } else {
            return 0;
        }
    });
};

//--      --////--    CONTENT SOURCES  --////--      --//
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    { id: 1, name: "Light City", roast: "light" },
    { id: 2, name: "Half City", roast: "light" },
    { id: 3, name: "Cinnamon", roast: "light" },
    { id: 4, name: "City", roast: "medium" },
    { id: 5, name: "American", roast: "medium" },
    { id: 6, name: "Breakfast", roast: "medium" },
    { id: 7, name: "High", roast: "dark" },
    { id: 8, name: "Continental", roast: "dark" },
    { id: 9, name: "New Orleans", roast: "dark" },
    { id: 10, name: "European", roast: "dark" },
    { id: 11, name: "Espresso", roast: "dark" },
    { id: 12, name: "Viennese", roast: "dark" },
    { id: 13, name: "Italian", roast: "dark" },
    { id: 14, name: "French", roast: "dark" }
];

//--      --////--    DISPLAY FUNCTIONS  --////--      --//
let sortedCoffees = sortedArrayByID(coffees);

sortedCoffees.forEach(({ id: coffeeID, name: coffeeName, roast: coffeeRoast }) => {
    let newCoffee = document.createElement("div");
    newCoffee.classList.add(`coffee`);
    newCoffee.id = `coffee${coffeeID}`;
    newCoffee.innerHTML = `
<div class="coffee-name-wrapper">
<h2>${coffeeName}</h2>
</div>
<div class="coffee-roast-wrapper">
<p>${coffeeRoast}</p>
</div>
`;
    coffeeListWrapper.appendChild(newCoffee);
});

//--      --////--    FETCH  --////--      --//
fetch('data/db.json')
    .then((response) => response.json())
    .then((json) => console.log(json));


//
// function renderCoffee(coffee) {
//     let html = "<tr class=\"coffee\">";
//     html += "<td>" + coffee.id + "</td>";
//     html += "<td>" + coffee.name + "</td>";
//     html += "<td>" + coffee.roast + "</td>";
//     html += "</tr>";
//
//     return html;
// }

// function renderCoffees(coffees) {
//     let html = "";
//     for (let i = coffees.length - 1; i >= 0; i--) {
//         html += renderCoffee(coffees[i]);
//     }
//     return html;
// }

// function updateCoffees(e) {
//     e.preventDefault(); // don't submit the form, we just want to update the data
//     let selectedRoast = roastSelection.value;
//     let filteredCoffees = [];
//     coffees.forEach(function (coffee) {
//         if (coffee.roast === selectedRoast) {
//             filteredCoffees.push(coffee);
//         }
//     });
//     tbody.innerHTML = renderCoffees(filteredCoffees);
// }

// tbody.innerHTML = renderCoffees(coffees);

// submitButton.addEventListener("click", updateCoffees);
// })();