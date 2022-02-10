var resultI;
/*-----------------------------------------buttons----------------------------------------*/

function clearScreen(){
    document.getElementById("value-screen").innerHTML = "";
}

function ans(){
    document.getElementById("value-screen").innerHTML = resultI;
}

function del(){
    document.getElementById("value-screen").innerHTML = document.getElementById("value-screen").textContent.slice(0,-1);
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

function add(){
    document.getElementById("value-screen").innerHTML += "+";
}

function subtract(){
    document.getElementById("value-screen").innerHTML += "-";
}

function multiply(){
    document.getElementById("value-screen").innerHTML += "*";
}

function divide(){
    document.getElementById("value-screen").innerHTML += "/";
}

function modulo(){
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
}