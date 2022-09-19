//from here until line 43 will make the coffees appear on the page on loading

//starting list of coffees
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

// prepare list of coffees to be inserted into array
function renderCoffee(coffee) {
    let html = `<div class="coffee"><h1>${coffee.name}</h1><p>${coffee.roast}</p></div>`;
    return html;
}

//make it into an array
let htmlArray = [];
function renderCoffees(coffees) {
    htmlArray = [];
    for(let i = 0; i < coffees.length; i++) {
        htmlArray.push (renderCoffee(coffees[i]));
    }
    return htmlArray;
}

//reference of where to put it
let tbody = document.querySelector('#coffees');
//run the function
tbody.innerHTML = renderCoffees(coffees).join(``);
/*----------------The above renders the coffees on the page-----------------*/


// this part of the process should limit rendering to only coffes that match BOTH ROAST AND NAME

//additional references to items on the page
let roastSelection = document.querySelector('#roast-selection');
let coffeeName = document.querySelector('#coffee-name');
let submitButton = document.querySelector('#submit');

//this is the function intended to update currently visible coffee. Needs fixing
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let searchName = coffeeName.value;
    let filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if ((coffee.roast === selectedRoast || selectedRoast === `all`) && coffee.name.toLowerCase().includes(searchName.toLowerCase())) {
            filteredCoffees.push(coffee);
        }
        tbody.innerHTML = renderCoffees(filteredCoffees).join(``);
    });
}

submitButton.addEventListener('click', updateCoffees);
coffeeName.addEventListener(`keyup`, updateCoffees);


/*----------------The above controls searching for coffees-----------------*/

// the following adds a coffee to the beginning of the page.
// these are variables for references to page items
let roastSelectionInput = document.querySelector(`#roast-selection-input`);
let coffeeNameInput = document.querySelector(`#coffee-name-input`);
let submitInput = document.querySelector(`#submit-input`);

function addNewCoffee (e){
    e.preventDefault();
    let html = `<div class="coffee"><h1>${coffeeNameInput.value}</h1><p>${roastSelectionInput.value}</p></div>`;

    htmlArray.unshift(html);
    tbody.innerHTML = htmlArray.join(``);
}

submitInput.addEventListener(`click`, addNewCoffee);

