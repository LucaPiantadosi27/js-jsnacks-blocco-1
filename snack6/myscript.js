// Calcola la somma e la media dei primi 10 numeri.


const userNumber = Number(prompt("Inserisci un numero"));

let sum = 0;

for(let i = 1; i <= userNumber; i++) {
    
    sum += i;

}


console.log(`Somma dei primi ${userNumber} numeri: ${sum}`);

console.log(`Media dei primi ${userNumber} numeri: ${sum / userNumber}`);