"use strict";

// USE FOR CARDS LATER MAYBE
var desiredRoast =undefined;
var filteredCoffees = [];
var cardContainer = "";


var initListOfCoffees=function(drinks){
    if(drinks===undefined){
        drinks=coffees;
    }
    if (cardContainer !== "") {
        document.getElementById('card-container').replaceWith(cardContainer);
    }

    cardContainer = document.getElementById('card-container');
    drinks.forEach((coffee) => {
        createCoffeeCard(coffee);
    });
};

var createCoffeeCard=function(coffee){
    if ((coffee.roast.toLowerCase().search(desiredRoast) > -1) || (desiredRoast === 'all')) {
        let card = document.createElement('div');
        card.className = 'card shadow cursor-pointer';

        let cardBody = document.createElement('div');
        cardBody.className = 'card-body2';

        let name = document.createElement('h5');
        name.innerText = coffee.name;
        name.className = 'card-name';

        let roast = document.createElement('p');
        roast.innerText = coffee.roast;
        roast.className = 'card-roast';

        cardBody.appendChild(name);
        cardBody.appendChild(roast);
        card.appendChild(cardBody);
        cardContainer.appendChild(card);
    }
};

var search =  function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data

    //get user selected roast. if it's undefined for some reason, set to 'all'
    var selectedRoast = roastSelection.value;
    if(selectedRoast===undefined){
        selectedRoast='all';
    }



    filteredCoffees=[];
    coffees.forEach(function(coffee) {
        //if the roast matches the user selected roast, or if selectedRoast is 'all'
        //add this coffee to our list
        if ((coffee.roast.toLowerCase().search(selectedRoast.toLowerCase()) > -1 )||
            (selectedRoast.toLowerCase().search('all') > -1)) {
            filteredCoffees.push(coffee);
        }
    });

    //propagate the selected roast to our global tracker value
    desiredRoast=selectedRoast.toLowerCase();
    // alter initial table to desired roast
    document.getElementById('card-container').innerHTML = null;
    initListOfCoffees(filteredCoffees);
};




///Coffee
var coffees = [
    {id: 1, name: 'Atlantic Sunrise', roast: 'light'},
    {id: 2, name: 'Minerva', roast: 'light'},
    {id: 3, name: 'Bakery', roast: 'light'},
    {id: 4, name: 'The Greenbelt', roast: 'medium'},
    {id: 5, name: 'Discovery Green', roast: 'medium'},
    {id: 6, name: 'New York', roast: 'medium'},
    {id: 7, name: 'Boulder', roast: 'medium'},
    {id: 8, name: 'Moab', roast: 'medium'},
    {id: 9, name: 'The Good Morning', roast: 'medium'},
    {id: 10, name: 'Poe', roast: 'dark'},
    {id: 11, name: 'Lovecraft', roast: 'dark'},
    {id: 12, name: 'The Developer', roast: 'dark'},
    {id: 13, name: 'Ethiopian', roast: 'dark'},
    {id: 14, name: 'Espresso', roast: 'dark'},
    {id: 15, name: 'Death Roast', roast: 'dark'},
    {id: 16, name: 'Italiano', roast: 'dark'},
    {id: 17, name: 'Francais', roast: 'dark'},
];
//


var submitButton = document.querySelector('#roastSubmit');
var roastSelection = document.querySelector('#roast-selection');

//add attribute to 'roast-all' that makes it the default selection
document.querySelector('#roast-all').setAttribute("selected","selected");

submitButton.addEventListener('click', search);

//Add event listener to make the roast selection change by just
//changing the dropdown selection
roastSelection.addEventListener('change', search);


var result = "";

initListOfCoffees(undefined);


document.getElementById('searchbar').addEventListener('keydown', function(event) {
    // document.getElementById('card-container').innerHTML = null;
    var drinks = coffees;
    var key = event.key.toLowerCase();
    var charList = 'abcdefghijklmnopqrstuvwxyz';

    //if not a valid character do nothing
    if ((charList.indexOf(key) === -1) && (event.keyCode !== 8)) {
        return;
    }

    //set our desired roast if the user hasn't narrowed their selection
    if(desiredRoast===undefined){
        desiredRoast='all';
    }

    if((event.keyCode === 8) && (result !== "") && (result.length>0)) {
        //if a backspace is input, and our search term still has characters in it (length>0)
        drinks = [];
        document.getElementById('card-container').innerHTML = null;
        result = result.substring(0, result.length - 1);
        coffees.forEach(function (coffee) {
            var compare = coffee.name.toLowerCase();
            //see if any names match the input characters
            if ((compare.search(result) > -1) ||(result === "")) {
                //see if the roast type matches
                if( (coffee.roast.toLowerCase().search(desiredRoast) > -1)||(desiredRoast==='all')) {
                    drinks.push(coffee);
                    return drinks;
                }
            }
        });
        initListOfCoffees(drinks);

    } else if(charList.indexOf(key) !== -1){
        //normal situation of legit characters input that aren't backspaces
        document.getElementById('card-container').innerHTML = null;
        drinks = [];
        result = result + key;
        coffees.forEach(function (coffee) {
            var compare = coffee.name.toLowerCase();
            //see if any names match the input characters
            if ((compare.search(result) > -1) ||(result === "")) {
                //see if the roast type matches
                if( (coffee.roast.toLowerCase().search(desiredRoast) > -1)||(desiredRoast==='all')) {
                    drinks.push(coffee);
                }
            }
        });
        initListOfCoffees(drinks);

    } else {
        //none of the above occured, such as a backspace to a blank string
        drinks.forEach(function (coffee) {
            document.getElementById('card-container').innerHTML = null;
            initListOfCoffees(drinks);
        });
    }

});
