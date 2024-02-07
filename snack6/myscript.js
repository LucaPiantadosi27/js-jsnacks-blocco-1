// Calcola la somma e la media dei primi 10 numeri.




let sum = 0;
let myButton = document.querySelector(".btn").addEventListener("click",
    function () {
        let resultElement = document.querySelector("p");
        
        for (let i = 1; i <= 10; i++) {
            sum += i;
        }

        let average = sum / 10;

        resultElement.innerHTML += "La somma dei primi 10 numeri è: " + sum + "<br>";
        resultElement.innerHTML += "La media dei primi 10 numeri è: " + average + "<br>";
    }
);


// altro procedimento



// const userNumber = Number(prompt("Inserisci un numero"));

// let sum = 0;

// for(let i = 1; i <= userNumber; i++) {
    
//     sum += i;

// }


// console.log(`Somma dei primi ${userNumber} numeri: ${sum}`);

// console.log(`Media dei primi ${userNumber} numeri: ${sum / userNumber}`);