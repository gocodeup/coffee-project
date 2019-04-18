let coffId      = document.getElementById('coffees');
let coffeeLight = document.getElementById('cp-light');
let coffeeMed   = document.getElementById('cp-medium');
let coffeeDark  = document.getElementById('cp-dark');
let coffeeEss   = document.getElementById('cp-espresso');


let originalCoffee = [
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

let coffees = originalCoffee.reverse();

let lightCoffee =   coffees.filter(lCoff => lCoff.roast == 'light');
let medCoffee =     coffees.filter(mCoff => mCoff.roast == 'medium');
let darkCoffee =    coffees.map((dCoff) => {
    return dCoff.id + dCoff.name + dCoff.roast;
});


let allCoffees =    coffees.map(coffee => "<p>" + coffee.id + ". " + coffee.name + " " + coffee.roast + "</p>").join('');

let allCoffee = coffees.filter(aCoff => {
    let p = document.createElement('p');
    p.innerText = aCoff.id + ' . ';
    p.innerText += ' name: ' + aCoff.name;
    p.innerText += ' roast: ' + aCoff.roast;
    coffId.appendChild(p);
});

let mouseEventL = () => {
    coffeeLight.addEventListener('mouseenter', function (e) {
        coffId.innerHTML = lightCoffee;
    }, false)
};
mouseEventL();

let mouseEventM = () => {
    coffeeMed.addEventListener('mouseenter', function (e) {
        coffId.innerHTML = medCoffee;
    }, false)
};
mouseEventM();

let mouseEventD = () => {
    coffeeDark.addEventListener('mouseenter', function (e) {
        coffId.innerHTML = darkCoffee;
    }, false)
};
mouseEventD();

let mouseEventE = () => {
    coffeeEss.addEventListener('mouseover', function (e) {
        coffId.innerHTML = allCoffees;
    })
}
mouseEventE();

// Create event lister that takes in value of div it's hovering
// Create function that takes in event listener and displays the correct coffee based on mouse enter






