//ADDING ALL CONTAINERS QUERYSELECTORS
const contain =  document.querySelector('.contain1');
const result =  document.querySelector('.result');
const bc = document.querySelector('.buttons-contain');
let resultado = document.createElement('h1');
//ADDING ALL QUERY SELECTORS BUTTONS
const zero = document.querySelector('.zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');

//DEFINING CALC CONTAINERS AREAS
//MAIN CONTAINER
contain.style.width = '300px';
contain.style.height = '400px';
//RESULT CONTAINER
result.style.width = '290px';
result.style.height = '100px';
//BUTTONS CONTAINER
bc.style.width = '290px';
bc.style.height = '290px';

//DEFINING VARIABLES
let valueA = 0;
let valueB = "";
let str = ""
let operador ="";
///CALC MAIN FUNCTIONS 
function add(a,b){
    let res=Math.floor(a+b);
    console.log (res);
}
function subtract(a,b){
    let res=Math.floor(a-b);
    console.log (res);
}
function multiply(a,b){
    let res=Math.floor(a*b);
    console.log (res);
}
function divive(a,b){
    let res=Math.floor(a/b);
    console.log (res);
}
   /*function operate(valueA,valueB){*/  

const NUMBER_KEYS= new Set([
    '0','1','2','3','4','5','6','7','8','9','1','.',
]) ;
    
const OPER_KEYS= new Set([
    '+','/','x','-','+','=',
]);

const CODI_KEYS = new Set([
    'AC','DEL','+/-'
])


const buttons =  document.querySelectorAll('button');
buttons.forEach(button=>{
        button.addEventListener('click',()=>{
            
            const key= button.dataset.key;
    
            if (NUMBER_KEYS.has(key)){
                resultado = document.createElement('h1');
                resultado.textContent= key;
                console.log(resultado);
                result.appendChild(resultado);
                console.log ('presiono un numero');
                console.log (key);
                     }
            else if (OPER_KEYS.has(key)){
                resultado = document.createElement('h1');
                resultado.textContent= key;
                if (key !== '='){
                    result.appendChild(resultado);
                    console.log ('presion un operador');
                    console.log (key);
                }
                else if ( key === '=') {
                    str = result.textContent;
                    console.log (result.textContent);
                    operator(str);
                 
                }
            }
            else if (CODI_KEYS.has(key)){
                console.log ('presiono una tecla de accion');
            }
        });
    });

class Calculator{
    powerCalc(valorA,valorB, operador){
        this.a = Number(valorA);
        this.b = Number(valorB);
        this.c = operador;
        this.calculate = function(){
            if (this.c === "xx"){
                fin =( this.a**this.b)
                result.append(fin);
                console.log( `${this.a} ** ${this.b} = ${this.a**this.b}`);
            } 
            else if (this.c === "/"){
                fin =( this.a/this.b)
                result.append(fin);
                console.log( `${this.a} / ${this.b} = ${this.a/this.b}`);
             }    
             else if (this.c === "x"){
                fin =( this.axthis.b)
                result.append(fin);
                console.log( `${this.a} * ${this.b} = ${this.a*this.b}`);
             }   
             else if (this.c === "+"){
                let fin = document.createElement('h1');
                fin =( this.a+this.b)
                result.append(fin);
                console.log( `${this.a} + ${this.b} = ${this.a+this.b}`);
             }     
             else if (this.c === "-"){
                fin =( this.a-this.b)
                result.append(fin);
                console.log( `${this.a} - ${this.b} = ${this.a-this.b}`);
             }                      
        };
    }
}

function operator(){
    for (let char of str){if (isNaN(char)){operador += char;}}
// Paso 1: Dividir la cadena por el operador "+"
let parts = str.split(operador);
// Paso 2: Convertir las partes a números
let valorA = parseInt(parts[0]);
let valorB = parseInt(parts[1]);
// Paso 3: Crear una instancia de la clase Calculator y pasar los valores
let powerCalc =  new Calculator();
powerCalc.powerCalc (valorA,valorB,operador);
let result1 = powerCalc.calculate(str); 
console.log (result1);
}
