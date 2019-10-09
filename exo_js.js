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
