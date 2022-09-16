"use strict"

let currentId = 0;
const updateId = () => currentId+=1;

let coffeeType = {
     medium: [],
     dark:[],
     light: []
}

function renderCoffee() {
     
     updateId();
     
     let selectValue = document.querySelector('#coffee-roast-addition').value
     let name = document.querySelector('#addition-coffee').value
     let coffeeListSection = document.getElementById('coffee-list');
     
     let newCoffee = `<section id="${currentId}" class="${selectValue} d-flex" >` +
                         `<h3>${name}</h3>` + `<span style="color: #666666">${selectValue}</span>`+
                     "</section>"
     
     if(!coffeeType[selectValue].includes(name)){
          coffeeType[selectValue].push(name);
          coffeeListSection.innerHTML += newCoffee;
     }
     
     
     

}
document.getElementById('search-coffee').oninput = (event) => {
     let x = document.getElementById('search-coffee').value
     alert(x)
}
document.getElementById('addition-coffee-button').onclick = () => {
     renderCoffee();
     
}





