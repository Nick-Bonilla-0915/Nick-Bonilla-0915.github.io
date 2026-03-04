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
        fillList(mList1, data);
        

        const mList2 = document.getElementById("move2");
        clearList(mList2);
        fillList(mList2, data);

        const mList3 = document.getElementById("move3");
        clearList(mList3);
        fillList(mList3, data);

        const mList4 = document.getElementById("move4");
        clearList(mList4);
        fillList(mList4, data);

    }
    catch(error)
    {
        console.error(error);
    }
}

//Function to add pokemon to team
function addPokemon(){
    //Getting all set values
    const teamMemberSprite = document.getElementById("pokeImg").src;
    const tMSprite = document.createElement('img');
    tMSprite.src = teamMemberSprite;
    const memMove1 = document.createTextNode(document.getElementById("move1").value);
    const memMove2 = document.createTextNode(document.getElementById("move2").value);
    const memMove3 = document.createTextNode(document.getElementById("move3").value);
    const memMove4 = document.createTextNode(document.getElementById("move4").value);
    const teamBlock = document.getElementById("team");

    //Creating element
    const teamMember = document.createElement("section");
    teamMember.appendChild(tMSprite);
    teamMember.appendChild(memMove1);
    teamMember.appendChild(memMove2);
    teamMember.appendChild(memMove3);
    teamMember.appendChild(memMove4);

    //Appending element
    teamBlock.appendChild(teamMember);
}

//Function to clear move lists
function clearList(selectElement){
    var i, L=selectElement.options.length - 1;
    for(i = L; i >=0; i--){
        selectElement.remove(i);
    }
}

//Function to fill move lists
function fillList(selectElement, data){
    data.moves.forEach(move => {
        const moveOption = document.createElement('option');
        moveOption.value = move.name;
        moveOption.text = move.name;
        selectElement.add(moveOption);
    })
}