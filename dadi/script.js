console.log ('Dadi');




//Gioco dei dadi
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.





// scrivo i numeri da 1 a 6

// Funzione per generare un numero casuale tra 1 e 6
function generaNumero() {
    return Math.floor(Math.random()*6) +1 ;
}

// Lancio i dadi per il giocatore e il computer
let puntoGiocatore = generaNumero();
let puntoComputer = generaNumero();


// punteggio del computer e giocatore

console.log (`Punteggio del giocatore ${puntoGiocatore}`);
console.log (`Punteggio del computer ${puntoComputer}`);


// assegno il vincitore 

if (puntoGiocatore > puntoComputer) {
    console.log ('Il vincitore è il giocatore');

} else if (puntoComputer > puntoGiocatore) {
    console.log ('Il vincitore è il computer');
}
  