// Exercice 1.1

var nb_1 = 15;
var nb_2 = 4;
var ex1_result = nb_1 + nb_2;
console.log(ex1_result);

function getAddition(){
    document.getElementById('ex1_result').innerHTML = ex1_result;  
}

// Exercice 1.2

var nb_3 = 5;
var nb_4 = 3;
var ex1_2_result = nb_3 * nb_4;
console.log(ex1_2_result);

function getMultiplication(){
    document.getElementById('ex1_2_result').innerHTML = ex1_2_result;  
}

// Exercice 1.3 

var nb_5 = 12; 
var nb_6 = 5; 
var ex1_3_result = nb_5 % nb_6;
console.log(ex1_3_result);

function getDivision(){
    document.getElementById('ex1_3_result').innerHTML = ex1_3_result;  
}

// Exercice 1.4 

var nb_7= 15;
var nb_8= 10; 
var ex1_4_result = nb_7 - nb_8;
console.log(ex1_4_result);

function getSoustraction(){
    nb_7= document.getElementById("nb_7").value;
    nb_8 = document.getElementById("nb_8").value;
    var ex1_4_result = nb_7 - nb_8;
    document.getElementById('ex1_4_result').innerHTML = ex1_4_result;  
}

// Exercice 1.5

var nb_9= 14; 
var nb_10= 2; 
var ex1_5_result = nb_9 * nb_10;
console.log(ex1_5_result);

function getMultiplication(){
    nb_9= document.getElementById("nb_9").value;
    nb_10 = document.getElementById("nb_10").value;
    var ex1_5_result = nb_9 * nb_10;
    document.getElementById('ex1_5_result').innerHTML = ex1_5_result;  
} 

// Exercice 2.1 

var nb_11= 4; 
var nb_12= 8; 
var ex2_1_result = nb_11 / nb_12;
console.log(ex2_1_result);

function getDivision(){
    nb_11= document.getElementById("nb_11").value;
    nb_12 = document.getElementById("nb_12").value;
    var ex2_1_result = nb_11 / nb_12;
    document.getElementById('ex2_1_result').innerHTML = ex2_1_result;  
} 

// Exercice 2.2 

var nb_13= 4; 
var nb_14= 4; 
var ex2_2_result = nb_13 + nb_14;
console.log(ex2_2_result);

function getAddition(){
    nb_13= document.getElementById("nb_13").value;
    nb_14 = document.getElementById("nb_14").value;
    var ex2_2_result = nb_13*1 + nb_14*1;
    document.getElementById('ex2_2_result').innerHTML = ex2_2_result;  
} 

// Exercice 3

var nb_15 = 82;
var nb_16 = 8;
var ex3_result = nb_15 / nb_16;
console.log(ex3_result);
document.getElementById('ex3_result').innerHTML = ex3_result; 
window.onload = ex3_result;  

// Exercice 4 

var nb_9= 0;
var ex4_result = nb_9; 
console.log (ex4_result); 

function plusTen(){
    var ex4_result= nb_9 +10; 
    document.getElementById('ex4_result').innerHTML = ex4_result;  
}

function diviseFive(){
    var ex4_result= nb_9 +10 /5; 
    document.getElementById('ex4_result').innerHTML = ex4_result; 
}

function multiplyHeight(){
    var ex4_result= nb_9 +10 /5 *8; 
    document.getElementById('ex4_result').innerHTML = ex4_result; 
}

function minusTwo(){
    var ex4_result= nb_9 +10 /5 *8 -2; 
    document.getElementById('ex4_result').innerHTML = ex4_result; 
}
    
function combinePlusTenMinusTwo(){
    var ex4_result= nb_9 +10 /5 *8 -2 +10 -2; 
    document.getElementById('ex4_result').innerHTML = ex4_result; 
}

function resetExo4(){
    document.getElementById('ex4_result').innerHTML = ex4_result; 
}

// Exercice 5 

var ex5_result = Math.floor(Math.random() * (1000 - 50) + 50);
function ex5_result(){
document.getElementById('ex5_result').innerHTML = ex5_result;
window.onload = ex5_result;
console.log(ex5_result);
}


// Exercice 6

var nb_16= 12; 
var ex6_result= nb_16 / 2; 
console.log(ex6_result);
document.getElementById('ex6_result').innerHTML = ex6_result; 


// Exercice 7 

var nb_17= 4; 
var nb_18= 5; 
var ex7_result= nb_17 - nb_18;
console.log(ex7_result); 
document.getElementById('ex7_result').innerHTML = ex7_result; 

// Exercice 8

// Je n'ai pas compris la consigne 

// Exercice 9 

function convertToPound(){
    var kg = document.getElementById('ex9_input1').value; 
    var convertToPound = kg *2.20462; 
    document.getElementById ('ex9_1_result').innerHTML = convertToPound; 
    }

function convertToKg(){
    var pound = document.getElementById('ex9_input2').value; 
    var convertToKg = pound * 0.45; 
    document.getElementById ('ex9_2_result').innerHTML = convertToKg; 
}

// Exercice 10

var phrase = ""; 
function iterateWords () {
    var mot = document.getElementById ("mot"). value; 
    phrase = phrase + mot; document. getElementById ('phrase'). innerHTML = phrase; } 
    
function resetWords () {phrase = ""; document.getElementById ('phrase'). innerHTML = phrase; } 