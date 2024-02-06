//L’utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.


const word1 = prompt("inserisci la prima parola");
const word2 = prompt("inserisci la seconda parola");

// console.log(word1.lenght);

const resultElement = document.querySelector("#result");

 if(word1.length < word2.length) {
    //parola 1 più corta

    resultElement.innerText = `${word1}" "è più corta di" "{$word2}` ;


 } else if { (word1.length > word2.length)

    resultElement.innerText = `${word2}" "è più corta di" "{$word1}` ;

 } else { 

    resultElement.innerText =   `${word1}" "ha la stessa lunghezza di" "{$word2}` ;
    
 }
