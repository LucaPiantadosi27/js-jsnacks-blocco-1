//Stampa il cubo dei primi N numeri,
//(partendo da 1, il numero N indicato dall'utente è compreso)
//dove N è un numero indicato dall’utente.

let myButton = document.querySelector(".btn").addEventListener("click",
    function () {
        let inputElement = document.getElementById("userChoice");
        let resultElement = document.querySelector("p");

        let inputValue = +inputElement.value;

        if (!isNaN(inputValue) && inputValue > 0) {
            resultElement.innerHTML = "";

            for (let i = 1; i <= inputValue; i++) {
                let cubo = Math.pow(i, 3);

                resultElement.innerHTML += "Il cubo di " + i + " è: " + cubo + "<br>";
            }
        } else {
            alert("Inserisci un numero valido e maggiore di zero.");
        }
    }
);


// ALTRO PROCEDIMENTO


// const number = "4";

// const listElement = document.querySelector("ul");

// for (let i = 1; i <= number; i++) {

//     // const cube = i * i * i;
//     const cube = i**3;

//     //Ricorda altro percorso a lezione||||

//     // fare il cubo di un numero tramite il ciclo for (non best practice, semplicemente per esempio)
//     // let cube = i;
//     // for(let j = 0; j < 2; j++) {
//     //     cube = cube * i;
//     // }

//     // |||||| //

//     // aggiungo gli altri elementi alla lista
    
//     const newEl = document.createElement("li");
//     newEl.innerText = cube;
//     listElement.append(newEl);

// }

// document.querySelector("h2").innerText = `Ecco i cubi dei primi ${number} numeri`;