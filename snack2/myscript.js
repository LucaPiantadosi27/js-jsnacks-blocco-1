//Il software deve chiedere per 10 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.



let numbers = []; 
let inputCount = 0;
let myButtonElement = document.querySelector(".btn").addEventListener("click",




    function(){
    let numberElement = document.getElementById("choiceNumber");
    let inputValue = Number(numberElement.value);
    console.log(inputValue)

    console.log(numbers)

    if(!isNaN(inputValue)){
        numbers.push(inputValue);
        inputCount++;

        numberElement.value = "";

        if (inputCount===10){
            calculateSum();
        }

    }else{
        console.log("inserisci un numero valido")
    }
 } 
 
)
function calculateSum() {
    let sum = 0;
    
    for (let i = 0; i < numbers.length ; i++){
        sum += numbers[i];

} console.log(sum)

let result = document.querySelector("P").innerHTML = sum;
}