let search1 = null;
let search2 = null;
let results = document.querySelector("#searchResults");

myFunction1 = () => 
{
    document.getElementById("myDropdown1").classList.toggle("show");
}

myFunction2 = () => 
{
    document.getElementById("myDropdown2").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = (event) => 
{
  if (!event.target.matches('.dropbtn')) 
  {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) 
    {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) 
      {
        openDropdown.classList.remove('show');
      }
    }
  }
};

filterFunc = (pram1, pram2) =>
{
if(pram1 === 1)
{
 search1 = pram2;
 return;
} 
if(pram1 == 2)
{
  search2 = pram2;
  return;
}
else{console.error('Error: Your search turned up no results.');}
};

returnResults = () =>
{
  fetch(`https://swapi.co/api/${search1}/${search2}/`)
      .then(function(response)
      {
        return response.json();
      })
      .then(function(myJson)
      {
        let tryThis = JSON.stringify(myJson);
        results.appendChild(document.createElement('li')).textContent=tryThis;

        console.log(tryThis); //verify the correct object is being passing via console. 
      });
};

//fetch('https://swapi.co/api/'+pram2+'/')
//    .then(function(response)
//    {
//      return response.json();
//    })
//    .then(function(myJson)
//    {
//      search1 = myJson;
//      console.log(JSON.stringify(myJson)); //verify the correct object is being passing via console. 
//    });