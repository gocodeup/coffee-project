"use strict"

function renderCoffee(coffee) {
     let html = '<section class="coffee">'
     html += '<p><h2>' + coffee.name + '</h2></hp>';
     html += '<p>' + coffee.roast + '</p>';
     html += '</section>';

     return html;
}

function renderCoffees(coffees) {
     let html = '';
     for(let i = 0; i < coffees.length; i++) {
          html += renderCoffee(coffees[i]);
     }
     return html;
}

document.getElementById('search-coffee').oninput = function(){
     updateCoffees();
}
document.getElementById('roast-selection').oninput = function (){
     updateCoffees();
}

function updateCoffees() {

     // e.preventDefault(); // don't submit the form, we just want to update the data
     let selectedRoast = roastSelection.value;
     let filteredCoffees = [];

     //gets the search inputs value and makes it lowercase to make
     // filtering easy.
     let search  =  document.getElementById('search-coffee').value
     search = search.toLowerCase();

     //checks the searches input
     //for testing purposes
     console.log(search)

     //checks selected roast if all
     //displays all roasts regardless of
     //type.
     if (selectedRoast === 'all'){

          //iterates through the coffee array and
          //checks the roast and if the search is
          // actively being used. It displays
          //only coffees that match the search.
          coffees.forEach((coffee) => {
               if(coffee.roast !== selectedRoast) {
                    if(search === ''){
                         filteredCoffees.push(coffee);
                    }else{
                         if(coffee.name.toLowerCase().includes(search)){
                              filteredCoffees.push(coffee);
                         }
                    }

               }
          })
     }else{

          //does the same thing as the above function but
          //filters by roast.
          coffees.forEach(function (coffee) {
               if (coffee.roast === selectedRoast) {
                    if(search === ''){
                         filteredCoffees.push(coffee);
                    }else{
                         if(coffee.name.toLowerCase().includes(search)){
                              filteredCoffees.push(coffee);
                         }
                    }

               }
          });
     }

     //calls renderCoffees to output the filtered array
     tbody.innerHTML = renderCoffees(filteredCoffees);
}


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
//our coffee array
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

//input from the webpage
let tbody = document.querySelector('#coffees');

let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

// Updates the page based on submit
submitButton.addEventListener('click', updateCoffees);