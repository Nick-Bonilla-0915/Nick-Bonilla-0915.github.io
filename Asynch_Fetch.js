function findPokemon(){
    const pokeID = document.getElementById("inName").value.toLowerCase();

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeID}`)
        .then(response => {
            if(!response.ok){
                throw new Error("Pokemon Not Found");
            }
            return response.json();
        })
        .then(data => console.log(data))
        .catch(error => console.error(error));
    
        const pokeSprite = data.sprites.front_default;
        const spriteShow = document.getElementById("pokeImg");
        spriteShow.src = pokeSprite;
}

function addPokemon(){
    console.log("BBBBBB");
}