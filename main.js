


let filteredCoffees = [];
let coffeeContainer = document.getElementById('coffee-list');
let searchSubmit = document.getElementById("search-btn");
let searchCoffee = document.getElementById("coffee-search");
let roast = document.getElementById("roast-selection"); // our select tag
searchSubmit.addEventListener("click", updateCoffees);
roast.addEventListener('change', updateCoffees);

let typedCoffee = document.getElementById("add-coffee");





const input = document.getElementById('add-coffee');
input.addEventListener('keypress', updateCoffees);
const log = document.getElementById('coffeeChoice');






// console.log('coffeeContainer: ', coffeeContainer);
// console.log('searchSubmit: ', searchSubmit);
// console.log('searchCoffee: ', searchCoffee);
// console.log('roast: ', roast);



// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light',image:"assets/nathan-dumlao-zUNs99PGDg0-unsplash.jpeg"},
    {id: 2, name: 'Half City', roast: 'light',image:""},
    {id: 3, name: 'Cinnamon', roast: 'light',image:""},
    {id: 4, name: 'City', roast: 'medium',image:""},
    {id: 5, name: 'American', roast: 'medium',image:""},
    {id: 6, name: 'Breakfast', roast: 'medium',image:""},
    {id: 7, name: 'High', roast: 'dark',image:""},
    {id: 8, name: 'Continental', roast: 'dark',image:""},
    {id: 9, name: 'New Orleans', roast: 'dark',image:""},
    {id: 10, name: 'European', roast: 'dark',image:""},
    {id: 11, name: 'Espresso', roast: 'dark',image:""},
    {id: 12, name: 'Viennese', roast: 'dark',image:""},
    {id: 13, name: 'Italian', roast: 'dark',image:""},
    {id: 14, name: 'French', roast: 'dark',image:""},
];



function renderCoffee(coffee) {
    var html = `<div class="coffee-cont">`;
    // html += `<td> + coffee.id + </td>`;
    html += `<figure class><img width="100px" src="${coffee.image}"/></figure>`
    html += `<p class="coffee-name">${coffee.name}</p>`;
    html += `<p class="roast">||${coffee.roast}</p>`;
    html += `</div>`; 

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}


// +++++++++++++++++
function updateCoffees(e) {
    // console.log('updateCoffees(): ');
    console.log('keydown');
    let userTyped =  [];
    filteredCoffees = []; 
    // e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roast.value.toLowerCase()
    
    for (let i = 0; i < coffees.length;i++)
    {
        console.log('coffee roast', coffees[i].roast);
        console.log(selectedRoast);
        if (coffees[i].roast == selectedRoast) {
            filteredCoffees.push(coffees[i]);
        }
        if(selectedRoast === "all"){
            filteredCoffees.push(coffees[i]);
        }
    }
    console.log(filteredCoffees)

    for (let i = 0; i < filteredCoffees.length;i++){
        let coffeeName = input.value.toLowerCase();
        // console.log(coffeeName)
        // console.log(filteredCoffees[i].name.toLowerCase())
            if (filteredCoffees[i].name.toLowerCase().includes(coffeeName)){
                userTyped.push(filteredCoffees[i]);
                
            }  
        }

    // console.log("filteredCoffees: ",filteredCoffees);
    // console.log('roast.value', roast.value);
    // console.log("coffees: ", coffees);


    if(userTyped !== null){
        coffeeContainer.innerHTML = renderCoffees(userTyped);
    }else{
    coffeeContainer.innerHtml = renderCoffees(filteredCoffees);
    }
}

// input.addEventListener('input', function(e) {
//    let userTyped =  []; 
//   console.log(filteredCoffees);

//    for (let i = 0; i < filteredCoffees.length;i++){
//     let coffeeName = input.value.toLowerCase();
//     console.log(coffeeName)
//     coneole.log(filteredCoffees[i].toLowerCase())
//         if (filteredCoffees[i].name.toLowerCase().includes(coffeeName)){
//             userTyped.push(filteredCoffees[i]);
            
//         }
        
//         coffeeContainer.innerHTML = userTyped[i];
        
//     }
    
//     console.log("userTyped: ",userTyped);
// // console.log(input.value)
    
    

// } )     



