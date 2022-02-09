/*-----------------------------------------numbers----------------------------------------*/

function clearScreen(){
    document.getElementById("value-screen").innerHTML = "";
}

function num1(){
    document.getElementById("value-screen").innerHTML += "1";
}

function num2(){
    document.getElementById("value-screen").innerHTML += "2";
}

function num3(){
    document.getElementById("value-screen").innerHTML += "3";
}

function num4(){
    document.getElementById("value-screen").innerHTML += "4";
}

function num5(){
    document.getElementById("value-screen").innerHTML += "5";
}

function num6(){
    document.getElementById("value-screen").innerHTML += "6";
}

function num7(){
    document.getElementById("value-screen").innerHTML += "7";
}

function num8(){
    document.getElementById("value-screen").innerHTML += "8";
}

function num9(){
    document.getElementById("value-screen").innerHTML += "9";
}

function num0(){
    document.getElementById("value-screen").innerHTML += "0";
}

function decimal(){
    document.getElementById("value-screen").innerHTML += ".";
}

/*-----------------------------------------operations----------------------------------------*/
var firstNumI,firstNumS,resultI,resultS,op;
function add(){
    firstNumS = document.getElementById("value-screen").textContent;
    firstNumI = parseInt(firstNumS);
    document.getElementById("value-screen").innerHTML = "";
    op = 1;
}

function subtract(){
    firstNumS = document.getElementById("value-screen").textContent;
    firstNumI = parseInt(firstNumS);
    document.getElementById("value-screen").innerHTML = "";
    op = 2;
}

function multiply(){
    firstNumS = document.getElementById("value-screen").textContent;
    firstNumI = parseInt(firstNumS);
    document.getElementById("value-screen").innerHTML = "";
    op = 3;
}

function divide(){
    firstNumS = document.getElementById("value-screen").textContent;
    firstNumI = parseInt(firstNumS);
    document.getElementById("value-screen").innerHTML = "";
    op = 4;
}

function modulo(){
    firstNumS = document.getElementById("value-screen").textContent;
    firstNumI = parseInt(firstNumS);
    document.getElementById("value-screen").innerHTML = "";
    op = 5;
}

function positivenegative(){
    var currentNumS = document.getElementById("value-screen").textContent;
    var currentNumI = parseInt(currentNumS);
    if (currentNumI > 0 || currentNumS == ""){
        document.getElementById("value-screen").innerHTML = "-".concat(currentNumS);
    }
    else if (currentNumI < 0){
        currentNumI = currentNumI * -1;
        document.getElementById("value-screen").innerHTML = firstNumI.toString();
    }
    else if (currentNumS == "-"){
        document.getElementById("value-screen").innerHTML = "";
    }
}

function equal(){
    var secondNumS = document.getElementById("value-screen").textContent;
    var secondNumI = parseInt(secondNumS);
    document.getElementById("value-screen").innerHTML = "";
    if (op==1){
        resultI = firstNumI + secondNumI;
        resultS = resultI.toString();
        document.getElementById("value-screen").innerHTML = resultS;
    }
    else if (op==2){
        resultI = firstNumI - secondNumI;
        resultS = resultI.toString();
        document.getElementById("value-screen").innerHTML = resultS;
    }
    else if (op==3){
        resultI = firstNumI * secondNumI;
        resultS = resultI.toString();
        document.getElementById("value-screen").innerHTML = resultS;
    }
    else if (op==4){
        resultI = firstNumI / secondNumI;
        resultS = resultI.toString();
        document.getElementById("value-screen").innerHTML = resultS;
    }
    else if (op==5){
        resultI = firstNumI % secondNumI;
        resultS = resultI.toString();
        document.getElementById("value-screen").innerHTML = resultS;
    }
}