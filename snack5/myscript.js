//Stampa il cubo dei primi N numeri,
//(partendo da 1, il numero N indicato dall'utente è compreso)
//dove N è un numero indicato dall’utente.



const number = "4";

const listElement = document.querySelector("ul");

for (let i = 1; i <= number; i++) {

    // const cube = i * i * i;
    const cube = i**3;

    //Ricorda altro percorso a lezione||||

    // fare il cubo di un numero tramite il ciclo for (non best practice, semplicemente per esempio)
    // let cube = i;
    // for(let j = 0; j < 2; j++) {
    //     cube = cube * i;
    // }

    // |||||| //

    // aggiungo gli altri elementi alla lista
    
    const newEl = document.createElement("li");
    newEl.innerText = cube;
    listElement.append(newEl);

}

document.querySelector("h2").innerText = `Ecco i cubi dei primi ${number} numeri`;