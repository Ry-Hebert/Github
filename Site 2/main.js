//https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get
let searchResults = null;
let jsonResults = null;
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
    hasRequested++;  
}

console.log(hasRequested);

searchResults.array.forEach(element => 
{
    console
});

}