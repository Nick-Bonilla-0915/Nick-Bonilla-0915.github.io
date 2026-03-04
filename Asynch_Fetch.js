function findPokemon(){
    fetch('https://pokeapi.co/api/v2/5/')
        .then(res => res.json())
        .then(data => console.log(data));
}

function addPokemon(){
    console.log("BBBBBB");
}