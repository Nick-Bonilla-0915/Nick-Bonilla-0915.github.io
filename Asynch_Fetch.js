function findPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon/5')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    
}

function addPokemon(){
    console.log("BBBBBB");
}