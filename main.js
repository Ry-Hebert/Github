//https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get
let searchResults = null;
let processedResults = null;
let hasRequested = 0;

myFunction1 = () =>
{
if(hasRequested === 0)
{
    fetch(`https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get`)
    .then(response =>
        {
            searchResults = response;
        })
    processedResults = JSON.parse(searchResults.items);
    hasRequested++;  
}

console.log(hasRequested);

processedResults.forEach(element => 
{
    console.log(element.name)
});

}