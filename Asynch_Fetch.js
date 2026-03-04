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
        const docID = document.getElementById("pokeImg");
        docID.src = pokeSprite;

        //Updating Pokemon cry
        const pokeCry = data.cries.latest;
        docID = document.getElementById("pokeCry");
        docID.src = pokeCry;
    }
    catch(error)
    {
        console.error(error);
    }
    
        
}

function addPokemon(){
    console.log("BBBBBB");
}