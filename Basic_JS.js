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

const fivesArr = [];

function addMultiplesToArray(){
    let index = 0;
    for(let i = counter; i > 0; i--)
    {
        if((i % 5) == 0)
        {
            fivesArr[index] = i;
            index++;
        }
    }

    console.log(fivesArr);
}

function carObject(type, MPG, color){
    this.cType = type;
    this.cMPG = MPG;
    this.cColor = color;

}

function printCarObject(){
    console.log("cType: '" + document.getElementById("carType") + "', cMPG: '" + document.getElementById("carMPG") + "', cColor: '" + document.getElementById("carColor") + "'");
}

function loadCar(a){
    if(a == 1){
        document.getElementById("carType").innerHTML = carObject1.cType;
        document.getElementById("carMPG").innerHTML = carObject1.cMPG;
        document.getElementById("carColor").innerHTML = carObject1.cColor;
    }
    else if(a == 2){
        document.getElementById("carType").innerHTML = carObject2.cType;
        document.getElementById("carMPG").innerHTML = carObject2.cMPG;
        document.getElementById("carColor").innerHTML = carObject2.cColor;
    }
    else if(a == 3)
    {
        document.getElementById("carType").innerHTML = carObject3.ctype;
        document.getElementById("carMPG").innerHTML = carObject3.cMPG;
        document.getElementById("carColor").innerHTML = carObject3.cColor;
    }
}

function changeColor(a){
    var x = document.getElementById("styleParagraph");
    if(a == 1){
        x.style.color = "#FF0000";
    }
    else if(a == 2){
        x.style.color = "#00FF00";
    }
    else if(a == 3){
        x.style.color = "#0000FF";
    }
}