(function () {

    "use strict"

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
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

    var coffeeBtns = document.querySelectorAll(".coffee-select");
    var dark = document.getElementById("dark-btn");
    var medium = document.getElementById("medium-btn");
    var light = document.getElementById("light-btn");
    var coffeeCart = document.querySelector("#cart");
    var cartBtn = document.querySelector(".add-to-cart-btn");
    var searchCoffee = document.querySelector("#searchBar");
    var selectRoast = document.querySelector("#roastSelect");
    var cards = document.querySelectorAll(".coffee-card");
    var cardContainer = document.querySelector(".coffee-card-container");
    var searchContainer = document.querySelector(".search-container");
    var cardContainerAttr = cardContainer.getAttribute("class");
    var cardAttr = cards[0].getAttribute("class");
    var userQty = document.getElementById("userQty");
    var modalSelector = '#quantity';
    var size = document.querySelector("#size");
    var checkout = document.querySelector("#checkout");
    var coffeeName = document.querySelector("#coffeeName");
    var userEmail = document.querySelector("#userEmail");
    var subscribeBtn = document.querySelector("#subscribe");
    var emailInput = document.querySelector("#emailInput");
    var finalPurchase = document.querySelector("#itemsBought");
    var gif = document.querySelector("#purchaseBtn");
    cartBtn.style.display = "none";

    //set individual html structure
    function renderCoffee(coffee) {
        var html = '<div class="form-check coffee-btn">';
        //removed Id
        html += '<input class="form-check-input radio-coffee" type="radio" name="exampleRadios"' + " id=" +  coffee.roast + " value=" + coffee.name.split(" ").join("-") + ">";
        html += '<label class="form-check-label" for="exampleRadios">' + coffee.name + '</label>';
        html += '</div>';
        return html;
    }


    function sortCoffees(coffee){
        var html = '<label for="exampleRadios">';
        html += '<input class="form-check-input radio-coffee" type="radio" name="exampleRadios"' + " value=" + coffee.split(" ").join("-") + ">";
        html += '</label>';
        return html;
    }


    //set options
    function renderCart(item) {
        return '<option value="test" class="coffee">' + item + '</option>';
    }


    //set html to array passed into function
    function renderCoffees(coffees) {
        var html = '';
        for (var i = 0; i <= coffees.length - 1; i++) {
            html += renderCoffee(coffees[i]);

        }
        return html;
    }


    //function passed into the event listener as a callback to show the coffees
    function updateCoffees(e) {
        e.preventDefault(); // don't submit the form, we just want to update the data
        var darkBucket = [];
        var mediumBucket = [];
        var lightBucket = [];
        coffees.forEach(function (coffee) {
            switch (coffee.roast) {
                case "dark":
                    darkBucket.push(coffee);
                    break;
                case "medium":
                    mediumBucket.push(coffee);
                    break;
                case "light":
                    lightBucket.push(coffee);
                    break;
            }
        });
        coffeeBtns[0].innerHTML = renderCoffees(darkBucket);
        coffeeBtns[1].innerHTML = renderCoffees(mediumBucket);
        coffeeBtns[2].innerHTML = renderCoffees(lightBucket);

        var input = document.querySelectorAll(".radio-coffee");
        addToCart(input);
        searchCoffees(coffees);
        displayCart(input);
    }

    function addToCart(items) {
        userQty.addEventListener("input", ()=> {
            if (!isNaN(userQty.value)) {
                cartBtn.style.display = "inline-block";
            } else {
                cartBtn.style.display = "none";
            }
        })
            cartBtn.addEventListener("click", () => {
                for (const item of items) {
                    if (item.checked && userQty.value.length > 0) {
                        coffeeCart.innerHTML += renderCart(item.value.split("-").join(" ") + ", Qty " + userQty.value + ", size: " + size.value);
                        $(modalSelector).modal('hide');
                    }

                }
                for (const purchases of coffeeCart) {
                    if (finalPurchase.innerText !== (purchases.innerText)) {
                        finalPurchase.innerHTML += '<br>' + purchases.innerText;
                    }
                }
                checkout.onclick = () => {
                    $('#purchased').modal('show');
                }
            })
    }

    function displayCart(items) {
            for (const item of items) {
                item.addEventListener("click", () => {
                    $(modalSelector).modal('show');
                        if (item.checked) {
                            coffeeName.innerText = "selected: " + item.value;
                        }
                })
            }
    }

    function roasts(coffees) {
        var roastBucket = [];
        coffees.forEach((coffee) => {
            if (roastBucket.indexOf(coffee.roast) === -1) {
                roastBucket.unshift(coffee.roast);
            }
        });
        return roastBucket;
    }

    function searchCoffees(searchedCoffees) {
        var lowercaseSearch = searchCoffee.value.toLowerCase()
        if (lowercaseSearch !== "") {
            searchContainer.innerHTML = "";
            for (const coffee of searchedCoffees) {
                if (coffee.name.toLowerCase().includes(lowercaseSearch)) {
                        searchContainer.innerHTML += '<input type="radio"' + ' name="coffeeButtons" class="searchedCoffee"' + ' value=' + coffee.name + ">" + coffee.name;
                }
            }
            var anotherCoffeeSearchButton = document.querySelectorAll(".searchedCoffee")
            for (let i = 0; i < anotherCoffeeSearchButton.length; i++) {
                anotherCoffeeSearchButton[i].addEventListener("click", function(){
                    $(modalSelector).modal('show');
                });
            }
            searchContainer.style.display = "inline-block";
            cardContainer.setAttribute("class", "d-none");
            coffees.forEach((coffee) => {
                if (coffee.roast.startsWith(lowercaseSearch)) {
                    searchContainer.innerHTML += '<input type="radio"' + ' name="coffeeButtons"' + ' value=' + coffee.roast + coffee.name + ">";
                }
            });
        } else {
            searchContainer.innerHTML = "";
            searchContainer.style.display = "none";
            cardContainer.setAttribute("class", cardContainerAttr);
        }
    }

    function selectRoasts() {
        for (let i = 0; i < cards.length; i++) {
            if (selectRoast.value.toLowerCase() !== "all roasts") {
            if (!cards[i].getAttribute("data-roast").includes(selectRoast.value.toLowerCase())) {
                cards[i].setAttribute("class", "d-none");
            } else {
           cards[i].setAttribute("class", cardAttr);
            }
            } else {
                cards[i].setAttribute("class", cardAttr);
            }
        }
    }

    selectRoast.addEventListener("change", selectRoasts);
    searchCoffee.addEventListener("input", updateCoffees);
    dark.addEventListener("click", updateCoffees);
    medium.addEventListener("click", updateCoffees);
    light.addEventListener("click", updateCoffees);

    dark.onclick = () => {
        coffeeBtns[0].classList.toggle("coffee-select");
    }
    medium.onclick = () => {
        coffeeBtns[1].classList.toggle("coffee-select");
    }

    light.onclick = () => {
        coffeeBtns[2].classList.toggle("coffee-select");
    }

    subscribeBtn.onclick = () => {
        if (emailInput.value.includes("@")){
        $('#newsletter').modal('show');
        userEmail.innerHTML = emailInput.value;
        }
    }
    gif.onclick = () => {
        $('#gif').modal('show');
    }
})();