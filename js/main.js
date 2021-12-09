//import java.import { BufferedReader } from "module";

//br = new BufferedReader(new InputStreamReader(System.in));

//let line = gets().split(" ");
/*
let A = parseInt(line[0]);
let B = parseInt(line[1]);
let total = A + B; // Altere o valor da variável com o cálculo esperado
console.log("X = " + total);

/*
var A = Number(prompt("Valor de A: "));
var B = Number(prompt("Valor de B: "));
var total = A + B;
console.log("X = " + total);
*/
function calcular(){
    var A = parseInt(document.getElementById("dadoa").value);
    var B = parseInt(document.getElementById("dadob").value);
    var X = A + B;

    document.getElementById("mostra").innerHTML = "X = "+X;
}