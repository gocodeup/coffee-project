//--      --////--    IIFE  --////--      --//
// (() => {
"use strict";
//--      --////--    VARIABLES  --////--      --//
const searchSubmitBtn = document.querySelector("#search-submit");
const roastSelection = document.querySelector("#roast-selection");
const coffeeListWrapper = document.querySelector(".coffee-list-divs");
const searchInput = document.querySelector(("#coffee-search"));
const searchForm = document.querySelector("#search-form");
const addForm = document.querySelector("#add-form");

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
const createNewCoffee = ({ id: coffeeID, name: coffeeName, roast: coffeeRoast }) => {
    let newCoffee = document.createElement("div");
    newCoffee.classList.add("coffee");
    newCoffee.id = `coffee${coffeeID}`;
    newCoffee.innerHTML = `
    <div class="coffee-name-wrapper">
        <h2>${coffeeName}</h2>
    </div>
    <div>
        <p>${coffeeRoast}</p>
    </div>
    `;
    coffeeListWrapper.appendChild(newCoffee);
};
const removeContent = (parent) => {
    while (parent.firstElementChild) {
        parent.removeChild(parent.firstElementChild);
    }
};

//--      --////--    DATA SOURCES  --////--      --//
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
const sortedCoffees = sortedArrayByID(coffees);
sortedCoffees.forEach(coffee => {
    createNewCoffee(coffee);
    window.localStorage.setItem(JSON.stringify(coffee.id), JSON.stringify(coffee));
});

//--      --////--    EVENT LISTENERS  --////--      --//

addForm.addEventListener("submit", e => {
    e.preventDefault();
    console.log("function connected");
    let id = sortedCoffees[sortedCoffees.length - 1].id + 1;
    const name = document.querySelector("#customer-coffee-input").value;
    const roast = document.querySelector("#customer-roast-input").value.toLowerCase();
    const coffee = { id, name, roast };
    sortedCoffees.push(coffee);
    let lastCoffee = sortedCoffees[sortedCoffees.length - 1];
    createNewCoffee(lastCoffee);
    window.localStorage.setItem(`${lastCoffee.id}`, JSON.stringify(lastCoffee));
});

searchInput.addEventListener("input", (e) => {
        e.preventDefault();
        let input = searchInput.value;
        console.log(`event listener active`);
        console.log(searchInput.value);
        removeContent(coffeeListWrapper);
        let filteredCoffees = sortedCoffees.filter(coffee => coffee.name.toLowerCase().includes(input.toLowerCase()));
        console.log(filteredCoffees);
        filteredCoffees.forEach(coffee => {
            createNewCoffee(coffee);
        });
    }
);


// searchSubmitBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     let input = searchInput.value;
//     console.log(`event listener active`);
//     console.log(searchInput.value);
//     removeContent(coffeeListWrapper);
//     let filteredCoffees = sortedCoffees.filter(coffee => coffee.name === input.toLowerCase());
//     filteredCoffees.forEach(coffee => {
//         createNewCoffee(coffee);
//     });
// });

roastSelection.addEventListener("change", (e) => {
    e.preventDefault();
    let input = roastSelection.value.toLowerCase();
    removeContent(coffeeListWrapper);
    if (input === 'all') {
        sortedCoffees.forEach(coffee => {
            createNewCoffee(coffee)
        })
    } else {
        let filteredCoffees = sortedCoffees.filter(coffee => coffee.roast === input.toLowerCase());
        filteredCoffees.forEach(coffee => {
            createNewCoffee(coffee);
        });
    }
});

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