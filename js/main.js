"use strict"

let currentId = 0;
let coffeeType = {
     medium: [],
     dark:[],
     light: []
}

function renderCoffee(name, type) {
     let selectValue = document.getElementById('coffee-roast-addition')
     let newCoffee = `<section id=${currentId} class="${type}" >\n` +
                         `\t\t\t\t<h3>${name}</h3>\n` +
                         `\t\t\t\t<span>${selectValue.value}</span>\n` +
                     "</section>"
     currentId += 1;
     
    let coffeeListSection = document.getElementById('coffee-list');
    coffeeListSection.innerHTML += newCoffee;
}

document.getElementById('addition-coffee-button').onclick = () => {
     renderCoffee('test', 'dark');
}





