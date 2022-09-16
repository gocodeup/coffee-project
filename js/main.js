"use strict"

let currentId = 0;
let coffeeType = {
     medium: [],
     dark:[],
     light: []
}

function renderCoffee() {
     
     let selectValue = document.querySelector('#coffee-roast-addition').value
     let name = document.querySelector('#addition-coffee').value
     
     let newCoffee = `<section id="${currentId}" class="${selectValue}" >` +
                         `<h3>${name}</h3>` +
                         `<span>${selectValue}</span>` +
                     "</section>"
     let newCoffeeElement = document.createElement(newCoffee);
     
     currentId += 1;
     
    let coffeeListSection = document.getElementById('coffee-list');
    coffeeListSection.appendChild(newCoffeeElement);
}

document.getElementById('addition-coffee-button').onclick = () => {
     renderCoffee('test', 'dark');
     
}





