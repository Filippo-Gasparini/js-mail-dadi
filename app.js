console.log ('mail')


//Mail
//chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato
//sull’esito del controllo.
//Gioco dei dadi
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.
//Prima di partire a scrivere codice poniamoci qualche domanda:
//Che ci sia un array da qualche parte?
//Se dobbiamo confrontare qualcosa che “cosa” ci serve?


// lista degli utenti che possono accedere
const names = ['riccardo@gmail.com' , 'fabrizio@gmail.com' , 'giovanni@gmail.com' , 'samuel@gmail.com' , 'luca@gmail.com' , 'sara@gmail.com']
console.log (names)

// chiedo all'utente la propria mail
 const userName =  prompt('Inserisci la tua mail');

// controllo se l'utente è nella lista

if (names.includes (userName)) {
    console.log(`Benvenuto, ${userName} sei stato invitato`)


// se non è in lista 

} else if (userName) {
    console.log (`Mi dispiace! ${userName} non sei stato invitato.`)
}

