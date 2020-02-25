"use strict";

// USE FOR CARDS LATER MAYBE
var desiredRoast =undefined;

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<h3>' + coffee.name + '</h3>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for (var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }

    return html;
}
/*
//var selectedRoast = 'all';
var search =  function updateCoffees(e) {
    console.log(desiredRoast)
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    console.log(selectedRoast)

    var filteredCoffees = [];
    if(selectedRoast.toLowerCase() === 'all'){
        coffees.forEach(function(coffee) {
            filteredCoffees.push(coffee);
            document.getElementById('result').innerHTML += coffee.name + "<br><br>" + coffee.roast + "<br><br>"
        });
        desiredRoast='all';
        return filteredCoffees;
    }
    coffees.forEach(function(coffee) {
        if (coffee.roast.toLowerCase() === selectedRoast.toLowerCase()) {
            filteredCoffees.push(coffee);
            document.getElementById('result').innerHTML += coffee.name + "<br><br>" + coffee.roast + "<br><br>"
        }
    });
    desiredRoast=selectedRoast.toLowerCase()
    return filteredCoffees;
};
*/

var search =  function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data

    //get user selected roast. if it's undefined for some reason, set to 'all'
    var selectedRoast = roastSelection.value;
    if(selectedRoast===undefined){
        selectedRoast='all';
    }
    var filteredCoffees = [];

    //blank out the list
    document.getElementById('result').innerHTML ="";


    coffees.forEach(function(coffee) {
        //if the roast matches the user selected roast, or if selectedRoast is 'all'
        //add this coffee to our list
        if ((coffee.roast.toLowerCase().search(selectedRoast.toLowerCase()) > -1 )||
            (selectedRoast.toLowerCase().search('all') > -1)) {

            filteredCoffees.push(coffee);
            document.getElementById('result').innerHTML += coffee.name + "<br><br>" + coffee.roast + "<br><br>"
        }
    });

    //propagate the selected roast to our global tracker value
    desiredRoast=selectedRoast.toLowerCase();
    return filteredCoffees;
};
//
//     tbody.innerHTML = renderCoffeeList(filterByRoast(coffees, roastSelection.value));


function updateCoffeesTwo(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedName = nameSelection.value;
    var filteredCoffeesTwo = [];
    coffees.forEach(function(coffee) {
        if (coffee.name.toLowerCase() === selectedName.toLowerCase()) {
            filteredCoffeesTwo.push(coffee);
        }
    });
    // tbody.innerHTML = renderCoffees(filteredCoffeesTwo);
}

// function updateCoffeesTwo(e) {
//     e.preventDefault(); // don't submit the form, we just want to update the data
//     var nameSelection = document.querySelector('#searchbar');
// ​
//     tbody.innerHTML = renderCoffeeList(filterByName(coffees, nameSelection.value));
// }
// ​
// function filterByRoast(coffeeList, value){
//     return coffeeList.filter( coffee => coffee.roast === value)
// }
// ​
// function filterByName(coffeeList, value){
//     return coffeeList.filter( coffee => coffee.name.toLowerCase() === value.toLowerCase())
// }



///Coffee
var coffees = [
    {id: 1, name: 'Atlantic Sunrise', roast: 'light'},
    {id: 2, name: 'Minerva', roast: 'light'},
    {id: 3, name: 'Bakery', roast: 'light'},
    {id: 4, name: 'El Salvador Las Victorias Orange Bourbon', roast: 'light'},
    {id: 5, name: 'The Greenbelt', roast: 'medium'},
    {id: 6, name: 'Discovery Green', roast: 'medium'},
    {id: 7, name: 'New York', roast: 'medium'},
    {id: 8, name: 'Boulder', roast: 'medium'},
    {id: 9, name: 'Moab', roast: 'medium'},
    {id: 10, name: 'The Good Morning', roast: 'medium'},
    {id: 11, name: 'Poe', roast: 'dark'},
    {id: 12, name: 'Lovecraft', roast: 'dark'},
    {id: 13, name: 'The Developer', roast: 'dark'},
    {id: 14, name: 'Ethiopian', roast: 'dark'},
    {id: 15, name: 'Espresso', roast: 'dark'},
    {id: 16, name: 'Death Roast', roast: 'dark'},
    {id: 17, name: 'Italiano', roast: 'dark'},
    {id: 18, name: 'Francais', roast: 'dark'},
];
//


var submitButton = document.querySelector('#roastSubmit');
var roastSelection = document.querySelector('#roast-selection');
var nameSelection = document.querySelector('#searchbar');

//add attribute to 'roast-all' that makes it the default selection
document.querySelector('#roast-all').setAttribute("selected","selected");

submitButton.addEventListener('click', search);

//Add event listener to make the roast selection change by just
//changing the dropdown selection
roastSelection.addEventListener('change', search);


coffees.forEach(function (coffee) {
    document.getElementById('result').innerHTML += coffee.name + "<br><br>" + coffee.roast + "<br><br>"
});

var result = "";
/*
document.getElementById('searchbar').addEventListener('keydown', function(event) {
    document.getElementById('result').innerHTML = "";
    var drinks = [];
    var key = event.key.toLowerCase();
    var charList = 'abcdefghijklmnopqrstuvwxyz';
    if ((charList.indexOf(key) === -1) && (event.keyCode !== 8)) {
        coffees.forEach(function (coffee) {
            document.getElementById('result').innerHTML += coffee.name + "<br><br>" + coffee.roast + "<br><br>"
        });
    }
    if(event.keyCode === 8 && result !== "") {
        result = result.substring(0, result.length - 1);
        coffees.forEach(function (coffee) {
            var compare = coffee.name.toLowerCase();
            if ((compare.search(result) > -1) && (selectedRoast === coffee.roast.toLowerCase())) {
                drinks.push(coffee)
            }
        });
        for(var i = 0; i < drinks.length; i++)
            document.getElementById('result').innerHTML += drinks[i].name + "<br><br>" + drinks[i].roast + "<br><br>";


    } else if(charList.indexOf(key) !== -1){
        result = result + key;
        coffees.forEach(function (coffee) {
            var compare = coffee.name.toLowerCase();
            if ((compare.search(result) > -1) && (selectedRoast === coffee.roast.toLowerCase())) {
                drinks.push(coffee)

            }
        });
        for(var i = 0; i < drinks.length; i++)
            document.getElementById('result').innerHTML += drinks[i].name + "<br><br>" + drinks[i].roast + "<br><br>";
    } else {
        coffees.forEach(function (coffee) {
            document.getElementById('result').innerHTML += coffee.name + "<br><br>" + coffee.roast + "<br><br>"
        });
    }

});
*/

var cardContainer;
let createCoffeeCard = (coffee) => {

    let card = document.createElement('div');
    card.className = 'card shadow cursor-pointer';

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body2';

    let name = document.createElement('h5');
    name.innerText = coffee.name;
    name.className = 'card-name';

    let roast = document.createElement('div');
    roast.innerText = coffee.roast;
    roast.className = 'card-roast';

    cardBody.appendChild(name);
    cardBody.appendChild(roast);
    card.appendChild(cardBody);
    cardContainer.appendChild(card);
};

let initListOfCoffees = () => {
    if (cardContainer) {
        document.getElementById('card-container').replaceWith(cardContainer);
        return;
    }

    cardContainer = document.getElementById('card-container');
    coffees.forEach((coffee) => {
        createCoffeeCard(coffee);
    });
};
initListOfCoffees();


document.getElementById('searchbar').addEventListener('keydown', function(event) {
    // document.getElementById('card-container').innerHTML = null;
    var drinks = coffees;
    var key = event.key.toLowerCase();
    var charList = 'abcdefghijklmnopqrstuvwxyz';

    //if not a valid character do nothing
    if ((charList.indexOf(key) === -1) && (event.keyCode !== 8)) {
        return;
    }

    //character is valid, so clear values
    document.getElementById('result').innerHTML = "";

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
                    // document.getElementById('result').innerHTML += coffee.name + "<br><br>" + coffee.roast + "<br><br>";
                    return drinks;
                }
            }
        });
        let createCoffeeCard = (coffee) => {

            let card = document.createElement('div');
            card.className = 'card shadow cursor-pointer';

            let cardBody = document.createElement('div');
            cardBody.className = 'card-body2';

            let name = document.createElement('h5');
            name.innerText = coffee.name;
            name.className = 'card-name';

            let roast = document.createElement('div');
            roast.innerText = coffee.roast;
            roast.className = 'card-roast';

            cardBody.appendChild(name);
            cardBody.appendChild(roast);
            card.appendChild(cardBody);
            cardContainer.appendChild(card);
        };

        let initListOfCoffees2 = () => {
            if (cardContainer !== "") {
                document.getElementById('card-container').replaceWith(cardContainer);
            }

            cardContainer = document.getElementById('card-container');
            drinks.forEach((coffee) => {
                createCoffeeCard(coffee);
                console.log(coffee);
            });
        };
        initListOfCoffees2();

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
                    // cardContainer = "";

                    // document.getElementById('result').innerHTML += coffee.name + "<br><br>" + coffee.roast + "<br><br>";
                }
            }
        });
        let createCoffeeCard = (coffee) => {

            let card = document.createElement('div');
            card.className = 'card shadow cursor-pointer';

            let cardBody = document.createElement('div');
            cardBody.className = 'card-body2';

            let name = document.createElement('h5');
            name.innerText = coffee.name;
            name.className = 'card-name';

            let roast = document.createElement('div');
            roast.innerText = coffee.roast;
            roast.className = 'card-roast';

            cardBody.appendChild(name);
            cardBody.appendChild(roast);
            card.appendChild(cardBody);
            cardContainer.appendChild(card);
        };

        let initListOfCoffees2 = () => {
            if (cardContainer !== "") {
                document.getElementById('card-container').replaceWith(cardContainer);
            }

            cardContainer = document.getElementById('card-container');
            drinks.forEach((coffee) => {
                createCoffeeCard(coffee);
                console.log(coffee);
            });
        };
        initListOfCoffees2();
        // var cardContainer;
//                     let createCoffeeCard = (coffee) => {
//
//
//                         let card = document.createElement('div');
//                         card.className = 'card shadow cursor-pointer';
//
//                         let cardBody = document.createElement('div');
//                         cardBody.className = 'card-body2';
//
//                         let name = document.createElement('h5');
//                         name.innerText = coffee.name;
//                         name.className = 'card-name';
//
//                         let roast = document.createElement('div');
//                         roast.innerText = coffee.roast;
//                         roast.className = 'card-roast';
//
//                         cardBody.appendChild(name);
//                         cardBody.appendChild(roast);
//                         card.appendChild(cardBody);
//                         cardContainer.appendChild(card);
//                     };
//
//                     let initListOfCoffees = () => {
//                         if (cardContainer) {
//                             document.getElementById('card-container').replaceWith(cardContainer);
//                             return;
//                         }
//
//                         cardContainer = document.getElementById('card-container');
//                         drinks.forEach((coffee) => {
//                             createCoffeeCard(coffee);
//                         });
//                     };
//                     initListOfCoffees();
    } else {
        //none of the above occured, such as a backspace to a blank string
        drinks.forEach(function (coffee) {
            document.getElementById('card-container').innerHTML = null;
            // document.getElementById('result').innerHTML += coffee.name + "<br><br>" + coffee.roast + "<br><br>"
            cardContainer = "";
            let createCoffeeCard = (coffee) => {

                let card = document.createElement('div');
                card.className = 'card shadow cursor-pointer';

                let cardBody = document.createElement('div');
                cardBody.className = 'card-body2';

                let name = document.createElement('h5');
                name.innerText = coffee.name;
                name.className = 'card-name';

                let roast = document.createElement('div');
                roast.innerText = coffee.roast;
                roast.className = 'card-roast';

                cardBody.appendChild(name);
                cardBody.appendChild(roast);
                card.appendChild(cardBody);
                cardContainer.appendChild(card);
            };

            let initListOfCoffees = () => {
                if (cardContainer) {
                    document.getElementById('card-container').replaceWith(cardContainer);
                    return;
                }

                cardContainer = document.getElementById('card-container');
                coffees.forEach((coffee) => {
                    createCoffeeCard(coffee);
                });
            };
            initListOfCoffees();
        });
    }

});


//
//
// "use strict";
//
// // USE FOR CARDS LATER MAYBE
// var desiredRoast =undefined;
//
// function renderCoffee(coffee) {
//     var html = '<div class="coffee">';
//     html += '<h3>' + coffee.name + '</h3>';
//     html += '<p>' + coffee.roast + '</p>';
//     html += '</div>';
//
//     return html;
// }
//
// function renderCoffees(coffees) {
//     var html = '';
//     for (var i = 0; i < coffees.length; i++) {
//         html += renderCoffee(coffees[i]);
//     }
//
//     return html;
// }
// /*
// //var selectedRoast = 'all';
// var search =  function updateCoffees(e) {
//     console.log(desiredRoast)
//     e.preventDefault(); // don't submit the form, we just want to update the data
//     var selectedRoast = roastSelection.value;
//     console.log(selectedRoast)
//
//     var filteredCoffees = [];
//     if(selectedRoast.toLowerCase() === 'all'){
//         coffees.forEach(function(coffee) {
//             filteredCoffees.push(coffee);
//             document.getElementById('result').innerHTML += coffee.name + "<br><br>" + coffee.roast + "<br><br>"
//         });
//         desiredRoast='all';
//         return filteredCoffees;
//     }
//     coffees.forEach(function(coffee) {
//         if (coffee.roast.toLowerCase() === selectedRoast.toLowerCase()) {
//             filteredCoffees.push(coffee);
//             document.getElementById('result').innerHTML += coffee.name + "<br><br>" + coffee.roast + "<br><br>"
//         }
//     });
//     desiredRoast=selectedRoast.toLowerCase()
//     return filteredCoffees;
// };
// */
//
// var search =  function updateCoffees(e) {
//     e.preventDefault(); // don't submit the form, we just want to update the data
//
//     //get user selected roast. if it's undefined for some reason, set to 'all'
//     var selectedRoast = roastSelection.value;
//     if(selectedRoast===undefined){
//         selectedRoast='all';
//     }
//     var filteredCoffees = [];
//
//     //blank out the list
//     document.getElementById('result').innerHTML ="";
//
//
//     coffees.forEach(function(coffee) {
//         //if the roast matches the user selected roast, or if selectedRoast is 'all'
//         //add this coffee to our list
//         if ((coffee.roast.toLowerCase().search(selectedRoast.toLowerCase()) > -1 )||
//             (selectedRoast.toLowerCase().search('all') > -1)) {
//
//             filteredCoffees.push(coffee);
//             console.log(filteredCoffees);
//             document.getElementById('result').innerHTML += coffee.name + "<br><br>" + coffee.roast + "<br><br>"
//         }
//     });
//
//     //propagate the selected roast to our global tracker value
//     desiredRoast=selectedRoast.toLowerCase();
//     return filteredCoffees;
// };
// //
// //     tbody.innerHTML = renderCoffeeList(filterByRoast(coffees, roastSelection.value));
//
//
// function updateCoffeesTwo(e) {
//     e.preventDefault(); // don't submit the form, we just want to update the data
//     var selectedName = nameSelection.value;
//     var filteredCoffeesTwo = [];
//     coffees.forEach(function(coffee) {
//         if (coffee.name.toLowerCase() === selectedName.toLowerCase()) {
//             filteredCoffeesTwo.push(coffee);
//         }
//     });
//     // tbody.innerHTML = renderCoffees(filteredCoffeesTwo);
// }
//
// // function updateCoffeesTwo(e) {
// //     e.preventDefault(); // don't submit the form, we just want to update the data
// //     var nameSelection = document.querySelector('#searchbar');
// // ​
// //     tbody.innerHTML = renderCoffeeList(filterByName(coffees, nameSelection.value));
// // }
// // ​
// // function filterByRoast(coffeeList, value){
// //     return coffeeList.filter( coffee => coffee.roast === value)
// // }
// // ​
// // function filterByName(coffeeList, value){
// //     return coffeeList.filter( coffee => coffee.name.toLowerCase() === value.toLowerCase())
// // }
//
//
//
// ///Coffee
// var coffees = [
//     {id: 1, name: 'Atlantic Sunrise', roast: 'light'},
//     {id: 2, name: 'Minerva', roast: 'light'},
//     {id: 3, name: 'Bakery', roast: 'light'},
//     {id: 4, name: 'El Salvador Las Victorias Orange Bourbon', roast: 'light'},
//     {id: 5, name: 'The Greenbelt', roast: 'medium'},
//     {id: 6, name: 'Discovery Green', roast: 'medium'},
//     {id: 7, name: 'New York', roast: 'medium'},
//     {id: 8, name: 'Boulder', roast: 'medium'},
//     {id: 9, name: 'Moab', roast: 'medium'},
//     {id: 10, name: 'The Good Morning', roast: 'medium'},
//     {id: 11, name: 'Poe', roast: 'dark'},
//     {id: 12, name: 'Lovecraft', roast: 'dark'},
//     {id: 13, name: 'The Developer', roast: 'dark'},
//     {id: 14, name: 'Ethiopian', roast: 'dark'},
//     {id: 15, name: 'Espresso', roast: 'dark'},
//     {id: 16, name: 'Death Roast', roast: 'dark'},
//     {id: 17, name: 'Italiano', roast: 'dark'},
//     {id: 18, name: 'Francais', roast: 'dark'},
// ];
// //
// // tbody.innerHTML = renderCoffeeList(coffees);
// // ​
// // submitTwoButton.addEventListener('click', updateCoffeesTwo);
// // submitButton.addEventListener('click', updateCoffees);
// // ​
// // document.getElementById('searchbar').addEventListener('keyup', function(event) {
// //     var searchString = event.target.value.toLowerCase();
// // ​
// //     tbody.innerHTML = renderCoffeeList(filterResults(coffees, searchString));
// // });
//
//
// // var tbody = document.querySelector('#coffees');
// var submitButton = document.querySelector('#roastSubmit');
// var roastSelection = document.querySelector('#roast-selection');
// var nameSelection = document.querySelector('#searchbar');
//
// //add attribute to 'roast-all' that makes it the default selection
// document.querySelector('#roast-all').setAttribute("selected","selected");
//
// // tbody.innerHTML = renderCoffees(coffees);
// // var submitTwoButton = document.querySelector('#submitTwo');
// // submitTwoButton.addEventListener('click', search);
// submitButton.addEventListener('click', search);
//
// //Add event listener to make the roast selection change by just
// //changing the dropdown selection
// roastSelection.addEventListener('change', search);
//
//
// coffees.forEach(function (coffee) {
//     document.getElementById('result').innerHTML += coffee.name + "<br><br>" + coffee.roast + "<br><br>"
// });
//
// var result = "";
// var cardContainer;
// let createCoffeeCard = (coffee) => {
//
//     let card = document.createElement('div');
//     card.className = 'card shadow cursor-pointer';
//
//     let cardBody = document.createElement('div');
//     cardBody.className = 'card-body2';
//
//     let name = document.createElement('h5');
//     name.innerText = coffee.name;
//     name.className = 'card-name';
//
//     let roast = document.createElement('div');
//     roast.innerText = coffee.roast;
//     roast.className = 'card-roast';
//
//     cardBody.appendChild(name);
//     cardBody.appendChild(roast);
//     card.appendChild(cardBody);
//     cardContainer.appendChild(card);
// };
//
// let initListOfCoffees = () => {
//     if (cardContainer) {
//         document.getElementById('card-container').replaceWith(cardContainer);
//         return;
//     }
//
//     cardContainer = document.getElementById('card-container');
//     coffees.forEach((coffee) => {
//         createCoffeeCard(coffee);
//     });
// };
// initListOfCoffees();
//
//
// document.getElementById('searchbar').addEventListener('keydown', function(event) {
//     document.getElementById('card-container').innerHTML = "";
//     var drinks = [];
//     var key = event.key.toLowerCase();
//     var charList = 'abcdefghijklmnopqrstuvwxyz';
//
//     //if not a valid character do nothing
//     if ((charList.indexOf(key) === -1) && (event.keyCode !== 8)) {
//         drinks = coffees;
//         cardContainer = "";
//         let createCoffeeCard = (coffee) => {
//
//             let card = document.createElement('div');
//             card.className = 'card shadow cursor-pointer';
//
//             let cardBody = document.createElement('div');
//             cardBody.className = 'card-body2';
//
//             let name = document.createElement('h5');
//             name.innerText = coffee.name;
//             name.className = 'card-name';
//
//             let roast = document.createElement('div');
//             roast.innerText = coffee.roast;
//             roast.className = 'card-roast';
//
//             cardBody.appendChild(name);
//             cardBody.appendChild(roast);
//             card.appendChild(cardBody);
//             cardContainer.appendChild(card);
//         };
//
//         let initListOfCoffees = () => {
//             if (cardContainer) {
//                 document.getElementById('card-container').replaceWith(cardContainer);
//                 return;
//             }
//
//             cardContainer = document.getElementById('card-container');
//             drinks.forEach((coffee) => {
//                 createCoffeeCard(coffee);
//             });
//         };
//         initListOfCoffees();
//         return;
//     }
//
//     //character is valid, so clear values
//     drinks = [];
//     document.getElementById('result').innerHTML = "";
//
//     //set our desired roast if the user hasn't narrowed their selection
//     if(desiredRoast===undefined){
//         desiredRoast='all';
//         drinks = coffees;
//     }
//
//     if((event.keyCode === 8) && (result !== "") && (result.length>0)) {
//         //if a backspace is input, and our search term still has characters in it (length>0)
//
//         result = result.substring(0, result.length - 1);
//         coffees.forEach(function (coffee) {
//             var compare = coffee.name.toLowerCase();
//             //see if any names match the input characters
//             if ((compare.search(result) > -1) ||(result === "")) {
//                 //see if the roast type matches
//                 if((coffee.roast.toLowerCase().search(desiredRoast) > -1)||(desiredRoast==='all')) {
//                     drinks = [];
//                     drinks.push(coffee);
//                     var cardContainer;
//                     createCoffeeCard = (coffee) => {
//                         let card = document.createElement('div');
//                         card.className = 'card shadow cursor-pointer';
//
//                         let cardBody = document.createElement('div');
//                         cardBody.className = 'card-body2';
//
//                         let name = document.createElement('h5');
//                         name.innerText = coffee.name;
//                         name.className = 'card-name';
//
//                         let roast = document.createElement('div');
//                         roast.innerText = coffee.roast;
//                         roast.className = 'card-roast';
//
//                         cardBody.appendChild(name);
//                         cardBody.appendChild(roast);
//                         card.appendChild(cardBody);
//                         cardContainer.appendChild(card);
//                     };
//
//                     let initListOfCoffees = () => {
//                         if (cardContainer) {
//                             document.getElementById('card-container').replaceWith(cardContainer);
//                             return;
//                         }
//
//                         cardContainer = document.getElementById('card-container');
//                         drinks.forEach((coffee) => {
//                             createCoffeeCard(coffee);
//                         });
//                     };
//                     initListOfCoffees();
//                     document.getElementById('result').innerHTML += coffee.name + "<br>" + coffee.roast + "<br><br>";
//                 }
//             }
//             // return;
//         });
//
//
//     } else if(charList.indexOf(key) !== -1){
//         //normal situation of legit characters input that aren't backspaces
//         result = result + key;
//         coffees.forEach(function (coffee) {
//             var compare = coffee.name.toLowerCase();
//             //see if any names match the input characters
//             if ((compare.search(result) > -1) ||(result === "")) {
//                 //see if the roast type matches
//                 if( (coffee.roast.toLowerCase().search(desiredRoast) > -1)||(desiredRoast==='all')) {
//                     drinks.push(coffee);
//                     var cardContainer;
//                     let createCoffeeCard = (coffee) => {
//
//
//                         let card = document.createElement('div');
//                         card.className = 'card shadow cursor-pointer';
//
//                         let cardBody = document.createElement('div');
//                         cardBody.className = 'card-body2';
//
//                         let name = document.createElement('h5');
//                         name.innerText = coffee.name;
//                         name.className = 'card-name';
//
//                         let roast = document.createElement('div');
//                         roast.innerText = coffee.roast;
//                         roast.className = 'card-roast';
//
//                         cardBody.appendChild(name);
//                         cardBody.appendChild(roast);
//                         card.appendChild(cardBody);
//                         cardContainer.appendChild(card);
//                     };
//
//                     let initListOfCoffees = () => {
//                         if (cardContainer) {
//                             document.getElementById('card-container').replaceWith(cardContainer);
//                             return;
//                         }
//
//                         cardContainer = document.getElementById('card-container');
//                         drinks.forEach((coffee) => {
//                             createCoffeeCard(coffee);
//                         });
//                     };
//                     initListOfCoffees();
//                     document.getElementById('result').innerHTML += coffee.name + "<br><br>" + coffee.roast + "<br><br>";
//                     console.log(cardContainer);
//                 }
//             }
//         });
//         // return;
//     } else {
//         //none of the above occurred, such as a backspace to a blank string
//         console.log("test");
//         coffees.forEach(function (coffee) {
//             var cardContainer;
//             let createCoffeeCard = (coffee) => {
//                 let card = document.createElement('div');
//                 card.className = 'card shadow cursor-pointer';
//
//                 let cardBody = document.createElement('div');
//                 cardBody.className = 'card-body2';
//
//                 let name = document.createElement('h5');
//                 name.innerText = coffee.name;
//                 name.className = 'card-name';
//
//                 let roast = document.createElement('div');
//                 roast.innerText = coffee.roast;
//                 roast.className = 'card-roast';
//
//                 cardBody.appendChild(name);
//                 cardBody.appendChild(roast);
//                 card.appendChild(cardBody);
//                 cardContainer.appendChild(card);
//             };
//
//             let initListOfCoffees = () => {
//                 if (cardContainer) {
//                     document.getElementById('card-container').replaceWith(cardContainer);
//                     return;
//                 }
//
//                 // cardContainer = document.getElementById('card-container');
//                 drinks.forEach((coffee) => {
//                     createCoffeeCard(coffee);
//                 });
//             };
//             initListOfCoffees();
//             document.getElementById('result').innerHTML += coffee.name + "<br><br>" + coffee.roast + "<br><br>"
//         });
//         // return;
//     }
// });

// Card testing



