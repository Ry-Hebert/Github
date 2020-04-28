//  Global Variables
const results = document.querySelector("#api-search-results"); //Shortens the Code needed to input new elements into the HTML
let customCount = 0; //Stores the number of times a user has input a new item suggestion. 
let hasRequested = 0; //Used to verify if the API has already been quired to reduce excessive calls.
let hasRequested1 = 0; //Used to verify if the API has already been quired to reduce excessive calls.
let hasRequested2 = 0; //Used to verify if the API has already been quired to reduce excessive calls.
let bigQuerry = null;

//  First Checks if the API has already been queried, If it hasn't then reference it and display information retrieved.
myFunction1 = () =>
{
let searchResults = null;
RmPrevious();

    //Used to see if the API has been queried already and reduce excessive calls.
    if(hasRequested === 0)
    {
            fetch(`https://fortnite-public-api.theapinetwork.com/prod09/items/list`)
            .then(function(response)
            {
            return response.json();
            })
            .then(function(myJson)
            {
                searchResults = myJson;
                bigQuerry=myJson;                
                console.log(searchResults)
                // Loop through the length of the returned list and create DOM elements
                for(let i = 0; i < myJson.length; i++)
                    {   
                        let itemShort = myJson[i];
                        let cImage = myJson[i].images.background;

                        let itemInfo = 
                        {
                        'name': `${itemShort.name}`,
                        'cost': `${itemShort.cost}`,
                        'rarity': `${itemShort.rarity}`
                        }

                        //Create Cards Display
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
                    } 
            });
            hasRequested++; //Tell the Function that the API has been queried. 
    }
    else
    {
        for(let i = 0; i < bigQuerry.length; i++)
        {   
            let itemShort = myJson[i];
            let cImage = myJson[i].images.background;

            let itemInfo = 
            {
            'name': `${itemShort.name}`,
            'cost': `${itemShort.cost}`,
            'rarity': `${itemShort.rarity}`
            }

            //Create Cards Display
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
        } 
    }
}

myFunction2 = () =>
{
let searchResults = null;
RmPrevious();
            fetch(`https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get`)
            .then(function(response)
            {
            return response.json();
            })
            .then(function(myJson)
            {
                searchResults = myJson;
                //
                // Loop through the length of the returned list and create DOM elements
                for(let i = 0; i < myJson.items.length; i++)
                    {   
                        let itemShort = myJson.items[i];
                        let cImage = myJson.items[i].item.images.background;

                        let itemInfo = 
                        {
                        'name': `${itemShort.name}`,
                        'cost': `${itemShort.cost}`,
                        'rarity': `${itemShort.item.rarity}`
                        }

                        //Create Cards Display
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
                    } 
            });
}

myFunction3 = () =>
{
let searchResults = null;
RmPrevious();
            fetch(`https://fortnite-public-api.theapinetwork.com/prod09/items/popular`)
            .then(function(response)
            {
            return response.json();
            })
            .then(function(myJson)
            {
                searchResults = myJson;
                //
                // Loop through the length of the returned list and create DOM elements
                for(let i = 0; i < myJson.data[3].entries.length; i++)
                    {   
                        let itemShort = myJson.data[3].entries[i];
                        let cImage = myJson.data[3].entries[i].images.background;

                        let itemInfo = 
                        {
                        'name': `${itemShort.name}`,
                        'cost': `${itemShort.cost}`,
                        'rarity': `${itemShort.rarity}`
                        }

                        //Create Cards Display
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
                    } 
            });
}

myFunction4 = () =>
{
let searchResults = null;
RmPrevious();
            fetch(`https://fortnite-public-api.theapinetwork.com/prod09/items/popular`)
            .then(function(response)
            {
            return response.json();
            })
            .then(function(myJson)
            {
                searchResults = myJson;
                //
                // Loop through the length of the returned list and create DOM elements
                for(let i = 0; i < myJson.data[2].entries.length; i++)
                    {   
                        let itemShort = myJson.data[2].entries[i];
                        let cImage = myJson.data[2].entries[i].images.background;

                        let itemInfo = 
                        {
                        'name': `${itemShort.name}`,
                        'cost': `${itemShort.cost}`,
                        'rarity': `${itemShort.rarity}`
                        }

                        //Create Cards Display
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
                    } 
            });
}

myFunction5 = () =>
{
let searchResults = null;
RmPrevious();
            fetch(`https://fortnite-public-api.theapinetwork.com/prod09/items/popular`)
            .then(function(response)
            {
            return response.json();
            })
            .then(function(myJson)
            {
                searchResults = myJson;
                //
                // Loop through the length of the returned list and create DOM elements
                for(let i = 0; i < myJson.data[1].entries.length; i++)
                    {   
                        let itemShort = myJson.data[1].entries[i];
                        let cImage = myJson.data[1].entries[i].images.background;

                        let itemInfo = 
                        {
                        'name': `${itemShort.name}`,
                        'cost': `${itemShort.cost}`,
                        'rarity': `${itemShort.rarity}`
                        }

                        //Create Cards Display
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
                    } 
            });
}

//  Provides functionality for card flipping action.
cardFlip = (i) =>
{
document.querySelector(`#card${i}`).classList.toggle('is-flipped');
}

RmPrevious = () =>
{
    while (results.firstChild)
    {
        results.removeChild(results.firstChild);
    }
}

//  User Input Card Generator.
formSubmit = () =>
{
//Pull data from html fields.
let name = document.querySelector('#fItem_name').value;
let rarity = document.querySelector('#rarity').value;

//Creates Card Display
results.innerHTML += 
                    `<div id='cardCustom${customCount}' class='card' onclick="cardFlip('Custom${customCount}')">
                        <div class='front' style='background-image: url("assets/images/question_block.png");'></div>
                        <div class='back' style='background-color: #000;'>
                            <ul>
                                <li>${name}</li>
                                <li>Cost: ???</li>
                                <li>Rarity: ${rarity}</li>
                            </ul>
                        </div>
                    </div>`;
customCount++; //Update the number of user elements to keep elements unique.
}