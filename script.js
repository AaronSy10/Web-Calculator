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
        newInput=0;
    }
    document.getElementById("value-screen").innerHTML += "1";
}

function num2(){
    if (newInput==1){
        document.getElementById("value-screen").innerHTML = "";
        newInput=0;
    }
    document.getElementById("value-screen").innerHTML += "2";
}

function num3(){
    if (newInput==1){
        document.getElementById("value-screen").innerHTML = "";
        newInput=0;
    }
    document.getElementById("value-screen").innerHTML += "3";
}

function num4(){
    if (newInput==1){
        document.getElementById("value-screen").innerHTML = "";
        newInput=0;
    }
    document.getElementById("value-screen").innerHTML += "4";
}

function num5(){
    if (newInput==1){
        document.getElementById("value-screen").innerHTML = "";
        newInput=0;
    }
    document.getElementById("value-screen").innerHTML += "5";
}

function num6(){
    if (newInput==1){
        document.getElementById("value-screen").innerHTML = "";
        newInput=0;
    }
    document.getElementById("value-screen").innerHTML += "6";
}

function num7(){
    if (newInput==1){
        document.getElementById("value-screen").innerHTML = "";
        newInput=0;
    }
    document.getElementById("value-screen").innerHTML += "7";
}

function num8(){
    if (newInput==1){
        document.getElementById("value-screen").innerHTML = "";
        newInput=0;
    }
    document.getElementById("value-screen").innerHTML += "8";
}

function num9(){
    if (newInput==1){
        document.getElementById("value-screen").innerHTML = "";
        newInput=0;
    }
    document.getElementById("value-screen").innerHTML += "9";
}

function num0(){
    if (newInput==1){
        document.getElementById("value-screen").innerHTML = "";
        newInput=0;
    }
    document.getElementById("value-screen").innerHTML += "0";
}

function decimal(){
    if (newInput==1){
        document.getElementById("value-screen").innerHTML = "";
        newInput=0;
    }
    document.getElementById("value-screen").innerHTML += ".";
}

function add(){
    newInput=0;
    document.getElementById("value-screen").innerHTML += "+";
}

function subtract(){
    newInput=0;
    document.getElementById("value-screen").innerHTML += "-";
}

function multiply(){
    newInput=0;
    document.getElementById("value-screen").innerHTML += "*";
}

function divide(){
    newInput=0;
    document.getElementById("value-screen").innerHTML += "/";
}

function modulo(){
    newInput=0;
    document.getElementById("value-screen").innerHTML += "%";
}

function lParenthesis(){
    document.getElementById("value-screen").innerHTML += "(";
}

function rParenthesis(){
    document.getElementById("value-screen").innerHTML += ")";
}

function positivenegative(){
    document.getElementById("value-screen").innerHTML += "-";
}

/*-----------------------------------------operations----------------------------------------*/

function equal(){
    var equation = document.getElementById("value-screen").textContent;
    resultI = eval(equation);
    document.getElementById("value-screen").innerHTML = resultI; 
    newInput=1;
}