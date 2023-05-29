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

function add(){
    debugger;
    namez=document.getElementById("add").value;
    roastz=document.getElementById("add-1").value;
    new_id=coffees[coffees.length-2].id+1;
    if (namez!="" || roastz!=""){
        var xx={};
        xx["id"]=new_id;
        xx["name"]=namez;
        xx["roast"]=roastz;
    }
    coffees.push(xx);
    search();

}

function search(){
debugger;
  var roastFilter = document.getElementById('search-1').value.toLowerCase();
  var nameFilter = document.getElementById('search').value.toLowerCase();
  
   var filteredCoffees = coffees.filter(function(coffee) {
    var roastMatch = coffee.roast.toLowerCase().includes(roastFilter);
    var nameMatch = coffee.name.toLowerCase().includes(nameFilter);
    
    return roastMatch && nameMatch;
  });

  displayCoffees(filteredCoffees);
}
function displayCoffees(coffees) {
  var coffeeList = document.getElementById('coffeeList');
  coffeeList.innerHTML = '';
  
  coffees.forEach(function(coffee) {
    var coffeeItem = document.createElement('div');
    coffeeItem.setAttribute("class","col-6 d-flex'")
    coffeeItem.innerHTML = `<span class='d-flex'><h5 class='px-1'>${coffee.name}</h5><span style='color:white' class='mt-1'>${coffee.roast}</span></span>`;
    coffeeList.appendChild(coffeeItem);
  });
}
