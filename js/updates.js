"use strict";

/*
 Creator: Deshawn Marquis, Williams,
 GitHub Profile: https://github.com/MarquisTheCoder,
 Date Created: 9/19/22,
 Time Created: 12:13 PM,
 File Name: updates.js,
 File Description:
 file dedicated to tracking updates to the webpage
 */
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

// Updates the page based on submit
submitButton.addEventListener('click', updateCoffees);
//updates page on input of search bar
document.getElementById('search-coffee').oninput = () => updateCoffees();
//updates page on input from selection
document.getElementById('roast-selection').oninput = () => updateCoffees();

