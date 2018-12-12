let searchResults = null;
let processedResults = null;
let hasRequested = 0;
const results = document.querySelector("#api-search-results");
let customCount = 0;

//
myFunction1 = () =>
{
if(hasRequested === 0) //Used to see if the API has been queried already and reduce excessive calls. 
{
        fetch(`https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get`)
        .then(function(response)
        {
          return response.json();
        })
        .then(function(myJson)
        {
            let tryThis = JSON.stringify(myJson);
            
            searchResults = myJson;
            
            //Trouble Shooting Tools
            //console.log(tryThis); //verify the correct object is being passing via console.
            //console.log(myJson.items.length);

            for(let i = 0; i < myJson.items.length; i++)
                {   
                    let cImage = myJson.items[i].item.images.background;
                    let itemShort = myJson.items[i];
                    
                    let itemInfo = 
                    {
                       'name': `${itemShort.name}`,
                       'cost': `${itemShort.cost}`,
                       'rarity': `${itemShort.item.rarity}`
                    }
                    results.innerHTML += 
                    `<div id='card${i}' class='card' onclick="cardFlip(${i})">
                        <div class='front' style='background-image: url("${cImage}");'></div>
                        <div class='back' style='background-color: #000;'>
                            <ul>
                                <li>${itemInfo.name}</li>
                                <li>Cost: ${itemInfo.cost}</li>
                                <li>Rarity: ${itemInfo.rarity}</li>
                            </ul>
                        </div>
                    </div>`;
                    //results.appendChild(document.createElement('div')).textContent=myJson.items[i].name;
                    //results.appendChild(document.createElement('img')).textContent=myJson.items[i].name;
                } 
        });
        hasRequested++;  
}
//Trouble Shooting Tools
//console.log(hasRequested);
//console.log(searchResults);
}

cardFlip = (i) =>
{
document.querySelector(`#card${i}`).classList.toggle('is-flipped');
}

formSubmit = () =>
{
let formData = document.querySelector('#fAddNewItem');
let name = document.querySelector('#fItem_name').value;
let rarity = document.querySelector('#rarity').value;
results.innerHTML += 
                    `<div id='cardCustom${customCount}' class='card' onclick="cardFlip('Custom${customCount}')">
                        <div class='front' style='background-image: url("assets/question_block.png");'></div>
                        <div class='back' style='background-color: #000;'>
                            <ul>
                                <li>${name}</li>
                                <li>Cost: ???</li>
                                <li>Rarity: ${rarity}</li>
                            </ul>
                        </div>
                    </div>`;
customCount++;
}