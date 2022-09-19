"use strict"

//main body selector
let tbody = document.querySelector('#coffees');

//search selectors
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');

//add coffee selectors
let additionSelector = document.querySelector('#select-addition');
let additionSearch = document.querySelector('#addition-name');
let additionSubmit = document.querySelector('#addition-submit');

additionSubmit.addEventListener('click', () => {
     let newCoffeeObject = {};
     newCoffeeObject.id = coffees[coffees.length - 1].id + 1;
     newCoffeeObject.name = additionSearch.value;
     newCoffeeObject.roast = additionSelector.value;
     
     if(coffees.filter(coffee => coffee.name === newCoffeeObject.name).length === 0){
          coffees.push(newCoffeeObject);
          updateCoffees();
     }
})

function renderCoffee(coffee) {
     let data = '';
     
     // $.ajax('https://coffee.alexflipnote.dev/random').done(function(data, status){
     //      console.log(data)
     // })
     
     // fetch('https://coffee.alexflipnote.dev/random.json').then(response => response.json()).then(data => console.log(data))
     // fetch('https://coffee.alexflipnote.dev/random')
     //      .then(response => response.json())
     //      .then(data => alert(data))
     //      .catch(err => console.log(err))
     //
     console.log(data);
     let html = '<section class="coffee d-flex justify-content-center align-content-center text-white">' +
     '<img class="d-flex align-content-center " src="https://coffee.alexflipnote.dev/random" style="height: 50px;' +
          ' width: auto; border-radius: 25px;">' +
     '<h2 class="d-flex display-3">' + coffee.name + '</h2>'+
     '<p class="d-flex display-5 p-2">' + coffee.roast + '</p>' +
     '</section>';
     return html;
}

function renderCoffees(coffees){
     return coffees.reduce( (current, next) => 
           current += renderCoffee(next) , '');
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


tbody.innerHTML = renderCoffees(coffees);
