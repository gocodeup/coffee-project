
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

//creating variables for each coffee.name and coffee.roast to change the style of text in the html
const coffeeList = coffees.map(function(coffee) {
    if (coffee.roast == 'light') {
        return "<span style=font-size:6vw>" + coffee.name + "</span>" + "<span style='color:orange;font-size:3vw'>" + coffee.roast + "</span>" + "<br>" ;
    } else if (coffee.roast == 'medium') {
        return "<span style=font-size:6vw>" + coffee.name + "</span>" + "<span style='color:brown;font-size:3vw'>" + coffee.roast + "</span>" + "<br>" ;
    } else {
        return "<span style=font-size:6vw>" + coffee.name + "</span>" + "<span style='color:black;font-size:3vw'>" + coffee.roast + "</span>" + "<br>" ;
    }
});

document.getElementById('coffee-list').innerHTML = (coffeeList.join(''));