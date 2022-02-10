var resultI;
var newInput=0; //reset screen after result
/*-----------------------------------------buttons----------------------------------------*/

function clearScreen(){
    document.getElementById("value-screen").innerHTML = "";
}

function ans(){
    if (resultI==undefined){
        resultI="";
    }
    document.getElementById("value-screen").innerHTML += resultI;
}

function del(){
    document.getElementById("value-screen").innerHTML = document.getElementById("value-screen").textContent.slice(0,-1);
}

function num1(){
    if (newInput==1){
        document.getElementById("value-screen").innerHTML = "";
        document.getElementById("history-screen").innerHTML += "=" + resultI + "<br>";
        newInput=0;
    }
    document.getElementById("value-screen").innerHTML += "1";
}

function num2(){
    if (newInput==1){
        document.getElementById("value-screen").innerHTML = "";
        document.getElementById("history-screen").innerHTML += "=" + resultI + "<br>";
        newInput=0;
    }
    document.getElementById("value-screen").innerHTML += "2";
}

function num3(){
    if (newInput==1){
        document.getElementById("value-screen").innerHTML = "";
        document.getElementById("history-screen").innerHTML += "=" + resultI + "<br>";
        newInput=0;
    }
    document.getElementById("value-screen").innerHTML += "3";
}

function num4(){
    if (newInput==1){
        document.getElementById("value-screen").innerHTML = "";
        document.getElementById("history-screen").innerHTML += "=" + resultI + "<br>";
        newInput=0;
    }
    document.getElementById("value-screen").innerHTML += "4";
}

function num5(){
    if (newInput==1){
        document.getElementById("value-screen").innerHTML = "";
        document.getElementById("history-screen").innerHTML += "=" + resultI + "<br>";
        newInput=0;
    }
    document.getElementById("value-screen").innerHTML += "5";
}

function num6(){
    if (newInput==1){
        document.getElementById("value-screen").innerHTML = "";
        document.getElementById("history-screen").innerHTML += "=" + resultI + "<br>";
        newInput=0;
    }
    document.getElementById("value-screen").innerHTML += "6";
}

function num7(){
    if (newInput==1){
        document.getElementById("value-screen").innerHTML = "";
        document.getElementById("history-screen").innerHTML += "=" + resultI + "<br>";
        newInput=0;
    }
    document.getElementById("value-screen").innerHTML += "7";
}

function num8(){
    if (newInput==1){
        document.getElementById("value-screen").innerHTML = "";
        document.getElementById("history-screen").innerHTML += "=" + resultI + "<br>";
        newInput=0;
    }
    document.getElementById("value-screen").innerHTML += "8";
}

function num9(){
    if (newInput==1){
        document.getElementById("value-screen").innerHTML = "";
        document.getElementById("history-screen").innerHTML += "=" + resultI + "<br>";
        newInput=0;
    }
    document.getElementById("value-screen").innerHTML += "9";
}

function num0(){
    if (newInput==1){
        document.getElementById("value-screen").innerHTML = "";
        document.getElementById("history-screen").innerHTML += "=" + resultI + "<br>";
        newInput=0;
    }
    document.getElementById("value-screen").innerHTML += "0";
}

function decimal(){
    if (newInput==1){
        document.getElementById("value-screen").innerHTML = "";
        document.getElementById("history-screen").innerHTML += "=" + resultI + "<br>";
        newInput=0;
    }
    document.getElementById("value-screen").innerHTML += ".";
}

function add(){
    if (newInput==1){
        document.getElementById("history-screen").innerHTML += "=" + resultI + "<br>";
    }
    newInput=0;
    document.getElementById("value-screen").innerHTML += "+";
}

function subtract(){
    if (newInput==1){
        document.getElementById("history-screen").innerHTML += "=" + resultI + "<br>";
    }
    newInput=0;
    document.getElementById("value-screen").innerHTML += "-";
}

function multiply(){
    if (newInput==1){
        document.getElementById("history-screen").innerHTML += "=" + resultI + "<br>";
    }
    newInput=0;
    document.getElementById("value-screen").innerHTML += "*";
}

function divide(){
    if (newInput==1){
        document.getElementById("history-screen").innerHTML += "=" + resultI + "<br>";
    }
    newInput=0;
    document.getElementById("value-screen").innerHTML += "/";
}

function modulo(){
    if (newInput==1){
        document.getElementById("history-screen").innerHTML += "=" + resultI + "<br>";
    }    newInput=0;
    document.getElementById("value-screen").innerHTML += "%";
}

function lParenthesis(){
    if (newInput==1){
        document.getElementById("value-screen").innerHTML = "";
        document.getElementById("history-screen").innerHTML += "=" + resultI + "<br>";
        newInput=0;
    }
    document.getElementById("value-screen").innerHTML += "(";
}

function rParenthesis(){
    if (newInput==1){
        document.getElementById("value-screen").innerHTML = "";
        document.getElementById("history-screen").innerHTML += "=" + resultI + "<br>";
        newInput=0;
    }
    document.getElementById("value-screen").innerHTML += ")";
}

function positivenegative(){
    if (newInput==1){
        document.getElementById("value-screen").innerHTML = "";
        document.getElementById("history-screen").innerHTML += "=" + resultI + "<br>";
        newInput=0;
    }
    document.getElementById("value-screen").innerHTML += "-";
}

/*-----------------------------------------operations----------------------------------------*/

function equal(){
    var equation = document.getElementById("value-screen").textContent;
    if (isNaN(equation)==true){ //check if equation is only a number
        resultI = eval(equation);
        document.getElementById("value-screen").innerHTML = resultI;
        document.getElementById("history-screen").innerHTML += equation + "<br>";
        newInput=1;
    }
}