var coffees = [
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


let hoverOverCoffee = document.getElementById('cp-light');
let cpTest = document.getElementById('cp-test-background');
let coffeeLight = document.getElementById('cp-light');
let coffeeMed = document.getElementById('cp-medium');
let coffeeDark = document.getElementById('cp-dark');
let coffeeEss = document.getElementById('cp-espresso');


coffees.forEach(function(coffee) {
    let p = document.createElement('p');
    p.innerText = coffee.id + " ";
    p.innerText += coffee.name + " ";
    p.innerText += coffee.roast + " ";
    document.getElementById('coffees').appendChild(p);
});

let mouseEvent  = function () {
    coffeeLight.addEventListener('mouseenter', function (e){
        document.getElementById('coffees').innerText = '';
    }, false)
};

mouseEvent();

let mouseEventLeave = function () {
    hoverOverCoffee.addEventListener('mouseleave', function(e) {

    }, false)
};

mouseEventLeave();





