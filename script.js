//ADDING ALL CONTAINERS QUERYSELECTORS
const contain =  document.querySelector('.contain1');
const result =  document.querySelector('.result');
const bc = document.querySelector('.buttons-contain');
let resultado = document.createElement('h1');

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
let valueB = 0;
let str = 0
let operador ="";

function clear(){
    result.textContent="";
    valueA = 0;
    valueB = 0;
    str= "";
    operador = "";
    resultado =  "";
    result.appendChild(resultado);

}
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

///VERIFYING IF A KEY IS PRESS ON THE KEYBOARD
document.addEventListener('keydown', (event)=>{
    key =  event.key;
    if (key === 'Enter') key =  '=';
    if (key === 'Backspace') key = 'DEL';
    if (key === '*') key = 'x';
   
    if (NUMBER_KEYS.has(key)){
        resultado = document.createElement('h1');
        resultado.textContent= key;
        result.appendChild(resultado);

    }
    else if (OPER_KEYS.has(key)){
        resultado = document.createElement('h1');
        resultado.textContent= key;
        if (key !== '='){
            result.appendChild(resultado);
        }
        else if ( key === '=') {
            str = result.textContent;
            operator(str);
          }
    }
    else if (CODI_KEYS.has(key)){
        if  (key === 'AC'){
            clear();
        }
        else if (key === 'DEL'){
            result.textContent= result.textContent.slice(0,-1);
        }
        else if (key === '+/-'){
            let currentValue =  parseFloat(result.textContent);
            if (!isNaN(currentValue)){
                currentValue = - currentValue;
                result.textContent = currentValue;
            }
            else {
                alert('No hay un numero valido en pantalla');
            }
        }
}})


///VERIFYING IF A BUTTON WAS CLICK ON THE HTML
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
                  
                }
                else if ( key === '=') {
                    str = result.textContent;
                    operator(str);
                 }
            }
            else if (CODI_KEYS.has(key)){
                if  (key === 'AC'){
                    clear();
                }
                else if (key === 'DEL'){
                    result.textContent= result.textContent.slice(0,-1);
                }
                else if (key === '+/-'){
                    let currentValue =  parseFloat(result.textContent);
                    if (!isNaN(currentValue)){
                        currentValue = - currentValue;
                        result.textContent = currentValue;
                    }
                    else {
                        alert('No hay un numero valido en pantalla');
                    }
                }
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
                result.textContent = valorA= ( this.a**this.b);
                valorB= 0;                    
                operador = "";
                  
            } 
            else if (this.c === "/"){
                if (this.b !== 0) {
                    result.textContent = valorA= ( this.a/this.b);
                    valorB= 0;                    
                    operador = "";

                } else {
                    result.textContent = "Error: División por 0";
                }
               
                
             }    
             else if (this.c === "x"){
                result.textContent = valorA= ( this.a*this.b);
                valorB= 0;                    
                operador = "";
      
             }   
             else if (this.c === "+"){
                
                result.textContent = valorA= ( this.a+this.b);
                valorB= 0;                    
                operador = "";
           
             }     
             else if (this.c === "-"){

                result.textContent = valorA= (this.a-this.b);
                valorB= 0;
             
             }                      
        };
    }
}

function operator(){
    for (let char of str){if (isNaN(char)){operador += char;}}
// Paso 1: Dividir la cadena por el operador "+"
let parts = str.match(/([+-]?\d*\.?\d+)/g);
// Paso 2: Convertir las partes a números
let valorA = parseFloat(parts[0]);
let valorB = parseFloat(parts[1]);
// Paso 3: Crear una instancia de la clase Calculator y pasar los valores
let powerCalc =  new Calculator();
powerCalc.powerCalc (valorA,valorB,operador);
let result = powerCalc.calculate(str); 
console.log (result);
}