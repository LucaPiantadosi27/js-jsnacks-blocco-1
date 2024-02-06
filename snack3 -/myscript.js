//Crea un array vuoto.
//Chiedi per 6 volte all’utente di inserire un numero,
//Solo se è dispari inseriscilo nell’array.
//Stampa a schermo il contenuto dell'array

//Array vuoto
const numberList = [];



// Chiedi per 6 volte all’utente di inserire un numero
for (let i = 0; i < 6 ; i++) {

    const number = Number(prompt(`Inserisci il ${i + 1}° numero`));  
    

    // valido
    if(number == null || isNaN(number)){
        
        alert("Non hai inserito un numero, quindi non verrà contato");

    } else {

        // Solo se è dispari inseriscilo nell’array.
        if(number % 2 != 0) {
            numberList.push(number);
        }

    }
