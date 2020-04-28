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
if(pram1 == 1)
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
  while (results.firstChild)
  {
    results.removeChild(results.firstChild);
  }

  fetch(`https://swapi.py4e.com/api/films/${search2}/`)
      .then(function(response)
      {
        return response.json();
      })
      .then(function(myJson)
      {
        let tryThis = JSON.stringify(myJson);
        if(search1 == 'characters')
        {
          for(let i = 0; i < myJson.characters.length; i++)
          {
            let searchAPI = myJson.characters[i];
            fetch(searchAPI)
              .then(function(response)
              {
                return response.json();
              })
              .then(function(myJson2)
              {
                  results.appendChild(document.createElement('li', {id : 'results-items'})).textContent=myJson2.name;
              })
          }
        }
        if(search1 == 'planets')
        {
          for(let i = 0; i < myJson.planets.length; i++)
          {
            let searchAPI = myJson.planets[i];
            fetch(searchAPI)
              .then(function(response)
              {
                return response.json();
              })
              .then(function(myJson2)
              {
                  results.appendChild(document.createElement('li')).textContent=myJson2.name;
              })
          }
        }
        if(search1 == 'starships')
        {
          for(let i = 0; i < myJson.starships.length; i++)
          {
            let searchAPI = myJson.starships[i];
            fetch(searchAPI)
              .then(function(response)
              {
                return response.json();
              })
              .then(function(myJson2)
              {
                  results.appendChild(document.createElement('li')).textContent=myJson2.name;
              })
          }
        }
        if(search1 == 'vehicles')
        {
          for(let i = 0; i < myJson.vehicles.length; i++)
          {
            let searchAPI = myJson.vehicles[i];
            fetch(searchAPI)
              .then(function(response)
              {
                return response.json();
              })
              .then(function(myJson2)
              {
                  results.appendChild(document.createElement('li')).textContent=myJson2.name;
              })
          }
        }
        if(search1 == 'species')
        {
          for(let i = 0; i < myJson.species.length; i++)
          {
            let searchAPI = myJson.species[i];
            fetch(searchAPI)
              .then(function(response)
              {
                return response.json();
              })
              .then(function(myJson2)
              {
                  results.appendChild(document.createElement('li')).textContent=myJson2.name;
              })
          }
        }

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

/*
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
*/