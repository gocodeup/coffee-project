(function (){
    "use strict"

// TODO: maybe add a clear button for local storage
// localStorage.clear();

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
//our coffee samples
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

//coffee in local storage stored here for use
    let coffeesLocalStorage = [];

//set original list in local storage
    for (let i=0; i < coffees.length; i++){
        setCoffeeLocal(coffees[i], i+1);
    }
//get list from local storage
    coffeesLocalStorage = getCoffeesLocal();

// stores location for coffee view and produces the initial coffee view
    const coffeeView = document.querySelector('#coffees');

    coffeeView.innerHTML = renderCoffees(coffeesLocalStorage);

// stores the location for coffee search input and for the roast selection
    const coffeeSearch = document.querySelector('#coffeeName');
    const roastSelection = document.querySelector('#roast-selection');

//sets event listener that calls updateCoffee function whenever a person inputs values in the search bar or selects a roast type
//called function will return a filtered list to the html
    coffeeSearch.addEventListener('input', updateCoffees);
    roastSelection.addEventListener('input', updateCoffees);

//stores the location for added coffee section and roast to add
//sets event listener that calls add coffee whenever the submit button is pressed
//called function adds the coffee to the coffee view
    const roastAdd = document.querySelector("#roastAdd");
    const coffeeAdd = document.querySelector('#coffeeNameAdd');
    const submitCoffeeAdd = document.querySelector("#newCoffeeAdd");

    submitCoffeeAdd.addEventListener("click", addCoffee);

// creates a html string for a single coffee
    function renderCoffee(coffee) {
        return `
    <div id="coffees" class="row">
     <div class="col-2 text-capitalize d-flex fs-4">${coffee.name}</div>
     <div class="col-1">${coffee.roast}</div>
    </div>`;
    }

// connects the single coffee html into one html string
    function renderCoffees(coffees) {
        let html = '';
        for(let i = 0; i < coffees.length; i++) {
            html += renderCoffee(coffees[i]);
        }
        return html;
    }

//updates coffee view to show filtered coffees from search and selected roast
    function updateCoffees(event) {
        event.preventDefault(); // don't submit the form, we just want to update the data
        let selectedRoast = roastSelection.value;
        let searchCoffee = coffeeSearch.value;
        let filteredCoffees = [];

        //if "all", will not check a roast value
        //otherwise if statement will check to make sure coffee item will match both roast and search
        coffeesLocalStorage.forEach(function(coffee) {
            if(selectedRoast === "all"){
                if (coffee.name.toLowerCase().includes(searchCoffee.toLowerCase())) {
                    filteredCoffees.push(coffee);
                }
            }
            else{
                if (coffee.roast === selectedRoast && coffee.name.toLowerCase().includes(searchCoffee.toLowerCase())) {
                    filteredCoffees.push(coffee);
                }
            }
        });

        coffeeView.innerHTML = renderCoffees(filteredCoffees);
    }

//adds coffee to local storage
    function addCoffee(event){
        let roastName = roastAdd.value;
        let coffeeName = coffeeAdd.value;
        let newCoffee = {
            id: localStorage.length+1,
            name: coffeeName,
            roast: roastName
        };

        setCoffeeLocal(newCoffee, localStorage.length +1);
        coffeesLocalStorage = getCoffeesLocal();

        coffeeView.innerHTML = renderCoffees(coffeesLocalStorage);
    }

//set coffee to local storage
    function setCoffeeLocal(newCoffee, id){
        // stores the object into the value of the key-value pair as a json string
        let jsonObj = JSON.stringify(newCoffee);
        //set a key for the key value pair
        localStorage.setItem(`${id}`, jsonObj);

        return 0;
    }

//get all coffee from local storage
    function getCoffeesLocal(){
        let coffeeList = [];

        for (let i=0; i < localStorage.length; i++){
            //gets coffee value from local storage
            let str = localStorage.getItem(`${i+1}`);
            //turns from a json string to an obj
            const parsedObj = JSON.parse(str);
            // TODO: remove this console log
            console.log(parsedObj)
            coffeeList.push(parsedObj);
        }
        return coffeeList;
    }
})();