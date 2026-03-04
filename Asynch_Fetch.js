//Function to fetch pokemon from API
async function findPokemon(){
    try{
        //Taking name or ID then fetching data from api
        const pokeID = document.getElementById("inName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeID}`);

        //Checking if fetch is successful
        if(!response.ok)
        {
            throw new Error("Pokemon Not Found");
        }

        //Receiving data
        const data = await response.json();

        //Updating Pokemon sprite
        const pokeSprite = data.sprites.front_default;
        const pokeSpriteDocID = document.getElementById("pokeImg");
        pokeSpriteDocID.src = pokeSprite;

        //Updating Pokemon cry
        const pokeCries = data.cries.latest;
        const pokeCryDocID = document.getElementById("pokeCry");
        pokeCryDocID.src = pokeCries;
        const criesParent = document.getElementById("cryParent");
        criesParent.load();

        //Updating Pokemon Moves
        const mList1 = document.getElementById("move1");

        const mList2 = document.getElementById("move2");

        const mList3 = document.getElementById("move3");

        const mList4 = document.getElementById("move4");
    }
    catch(error)
    {
        console.error(error);
    }
}

//Function to add pokemon to team
function addPokemon(){
    console.log("BBBBBB");
}