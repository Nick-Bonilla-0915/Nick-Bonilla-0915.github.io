async function findPokemon(){
    try{
        //Taking name or ID then fetching data from api
        const pokeID = document.getElementById("inName").value.toLowerCase();
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeID}`)

        //Checking if fetch is successful
        if(!Response.ok)
        {
            throw new Error("Pokemon Not Found");
        }

        //Receiving data
        const data = await response.json();

        //Updating Pokemon sprite
        const pokeSprite = data.sprites.front_default;
        const spriteShow = document.getElementById("pokeImg");
        spriteShow.src = pokeSprite;
    }
    catch(error)
    {
        console.error(error);
    }
    
        
}

function addPokemon(){
    console.log("BBBBBB");
}