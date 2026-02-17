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

let loopOut = "";
let oddLoopOut = "";

function runForLoop(){
    loopOut = "";
    for(let i = 0; i <= counter; i++)
    {
        loopOut += i + " ";
    }

    updateForLoopResult();
}

function showOddNumbers(){
    oddLoopOut = "";
    for(let i = 0; i <= counter; i++)
    {
        if((i % 2) == 1)
        {
            oddLoopOut += i + " ";
        }
    }

    updateOddNumberResult();
}

function updateForLoopResult(){
    document.getElementById("forLoopResult").innerHTML = loopOut;
}

function updateOddNumberResult(){
    document.getElementById("oddNumberResult").innerHTML = oddLoopOut;
}