//Chiedi un numero di 4 cifre all’utente
//e calcola la somma di tutte le cifre che compongono il numero.



let myButton = document.querySelector(".btn").addEventListener("click",
    function () {
        let inputElement = document.getElementById("userChoice");
        let inputValue = inputElement.value;

        if (!isNaN(inputValue) && inputValue.length === 4) {
            let sum = 0;

            for (let i = 0; i < inputValue.length; i++) {
                sum += +inputValue[i];

            }

            let resultElement = document.querySelector("p");


            resultElement.innerHTML = "";

            resultElement.innerHTML = "La somma delle cifre è: " + sum;

        } else {
            alert("Inserisci un numero di 4 cifre valido.");
        }
    }
);