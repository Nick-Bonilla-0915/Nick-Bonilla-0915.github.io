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
        clearList(mList1);
        data.results.forEach(move =>{
            const move = document.createElement('option');
            option.value = move.name;
            option.text = move.name;
            mList1.add(option);
        })

        const mList2 = document.getElementById("move2");
        clearList(mList2);
        data.results.forEach(move =>{
            const move = document.createElement('option');
            option.value = move.name;
            option.text = move.name;
            mList2.add(option);
        })

        const mList3 = document.getElementById("move3");
        clearList(mList3);
        data.results.forEach(move =>{
            const move = document.createElement('option');
            option.value = move.name;
            option.text = move.name;
            mList3.add(option);
        })

        const mList4 = document.getElementById("move4");
        clearList(mList4);
        data.results.forEach(move =>{
            const move = document.createElement('option');
            option.value = move.name;
            option.text = move.name;
            mList4.add(option);
        })

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

//Function to clear move lists
function clearList(selectElement){
    var i, L=selectElement.options.length - 1;
    for(i = L; i >=0; i--){
        selectElement.remove(i);
    }
}