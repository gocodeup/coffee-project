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
    cartBtn.style.display = "none";

    function renderCoffee(coffee) {
        var html = '<div class="form-check coffee-btn">';
        //removed Id
        html += '<input class="form-check-input radio-coffee" type="radio" name="exampleRadios"' + " id=" +  coffee.roast + " value=" + coffee.name.split(" ").join("-") + ">";
        html += '<label class="form-check-label" for="exampleRadios">' + coffee.name + '</label>';
        html += '</div>';
        return html;
    }

    function renderCart(item) {
        return '<option value="test" class="coffee">' + item + '</option>';
    }

    function renderCoffees(coffees) {
        var html = '';
        for (var i = 0; i <= coffees.length - 1; i++) {
            html += renderCoffee(coffees[i]);

        }

        return html;
    }

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
        searchCoffees(input);
        displayCart(input);
    }

    function addToCart(items) {
        userQty.addEventListener("input", ()=> {
            if (!isNaN(userQty.value)) {
                cartBtn.style.display = "inline-block";
                console.log("is a number");
            } else {
                cartBtn.style.display = "none";
                console.log("is not a number");
            }
        })
            cartBtn.addEventListener("click", () => {
                for (const item of items) {
                    if (item.checked && userQty.value.length > 0) {
                        coffeeCart.innerHTML += renderCart(item.value.split("-").join(" ") + " Qty " + userQty.value);
                        $(modalSelector).modal('hide');
                    }

                }
            })

    }

    function displayCart(items) {
            for (const item of items) {
                item.addEventListener("click", () => {
                    $(modalSelector).modal('show');
                })
            }
    }

    function searchCoffees(searchedCoffees) {
        var lowercaseSearch = searchCoffee.value.toLowerCase()
        if (lowercaseSearch !== "") {
            for (const coffee of searchedCoffees) {
                if (coffee.value.toLowerCase().startsWith(lowercaseSearch)) {
                        searchContainer.innerHTML = ""
                        searchContainer.innerHTML += '<input type="radio"' + ' name="coffeeButtons" class="searchedCoffee"' + ' value=' + coffee.value + " checked>" + coffee.value;
                }
            }

            searchContainer.style.display = "inline-block";
            cardContainer.setAttribute("class", "d-none");
        } else {
            searchContainer.innerHTML = "";
            searchContainer.style.display = "none";
            cardContainer.setAttribute("class", cardContainerAttr);
        }
        var searched = document.querySelectorAll(".searchedCoffee");

        for (const found of searched) {
            console.log(found.value.toLowerCase().startsWith(lowercaseSearch));
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


})();