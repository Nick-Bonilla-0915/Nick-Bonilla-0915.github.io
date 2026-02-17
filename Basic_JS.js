let counter = 0;

function updateCounter(){
    document.getElementById("counter").innerHTML = counter;
}

function tickUp(){
    counter++;
    updateCounter();
}

function tickDown(){
    counter--;
    updateCounter();
}