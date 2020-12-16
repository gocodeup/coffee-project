(function(){
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
    coffees.forEach(function(coffee){
        var owndiv = document.createElement('div');
        var h4 = document.createElement('h4');
        var small = document.createElement('small');
        owndiv.setAttribute("class","col-sm-6 col-md-6 col-lg-6");
        //small.setAttribute("class","text-muted");
        h4.innerHTML = coffee.name;
        owndiv.appendChild(h4);
        small.innerHTML = " "+coffee.roast;
        h4.appendChild(small);
        var app = document.querySelector('#coffeeholder');
        app.appendChild(owndiv);
    });

    const addForm = document.forms['addcoffee'];
    var listener = function(e){
        e.preventDefault();
        const value = addForm.querySelector('input[type="text"]').value;
        const smvalue = document.forms['addcoffee']['addroast'].value;
        console.log(smvalue)
        //create element
        const div = document.createElement('div');
        const h4 = document.createElement('h4');
        const small = document.createElement('small');
        //append to dom
        //small.setAttribute("class","text-muted");
        div.setAttribute("class", "col-sm-6 col-md-6 col-lg-6")
        h4.innerHTML = value;
        div.appendChild(h4);
        small.innerHTML = " "+smvalue;
        h4.appendChild(small);
        app = document.querySelector('#coffeeholder');
        app.appendChild(div);
    }
    //creates button to add new coffee
    document.getElementById('btn2').addEventListener('click',listener);


    const list = document.querySelector('#coffeeholder');
    const searchList = e =>{
        const term = e.target.value.toLowerCase();
        const coffees = list.getElementsByTagName('h4');
        const roastChoice = document.forms['searchCoffee']['roastSelection'].value.toLowerCase();
        const coffeeArr = Array.from(coffees)
        //console.log(typeof(coffeeArr[0].firstElementChild.innerHTML))
        Array.from(coffees).forEach(function(coffee){
            const name = coffee.innerHTML;
            const roastType = coffee.firstElementChild.innerHTML.toLowerCase();
            if((roastChoice === 'light')&& name.toLowerCase().indexOf(term)!==-1 && roastType.toLowerCase().indexOf('light')!==-1){
                coffee.style.display = 'block';
            }
            else if((roastChoice === 'medium')&& name.toLowerCase().indexOf(term)!==-1 && roastType.toLowerCase().indexOf('medium')!==-1){
                coffee.style.display = 'block';
            }else if((roastChoice === 'dark')&& name.toLowerCase().indexOf(term)!==-1 && roastType.toLowerCase().indexOf('dark')!==-1){
                coffee.style.display = 'block';
            }else if((roastChoice === 'all')&& name.toLowerCase().indexOf(term)!==-1){
                coffee.style.display = 'block';
            }else{
                coffee.style.display = 'none';
            }
        })
    }
    document.getElementById('roastSelection').addEventListener('change', searchList);
    document.getElementById('coffee-name').addEventListener('keyup', searchList);

})();
