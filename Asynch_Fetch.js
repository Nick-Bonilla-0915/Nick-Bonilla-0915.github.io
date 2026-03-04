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
    
}

function addPokemon(){
    console.log("BBBBBB");
}