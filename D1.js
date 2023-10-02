/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// Le principali tipologie di dati in JavaScript sono:

let stringa = "Ciao";

/* Questo tipo di dato, "Ciao", viene chiamato stringa. Si tratta di una serie di caratteri messi in sequenza uno dopo l'altro. Possono formare le parole, ma il computer non conosce bene come funzionano, quindi non sa che lo stiamo salutando. Lui leggera solamente che ci sono le 4 lettere C - i - a - o.
Si identificano facilmente  grazie alle virgolette "" (ed è importante metterle) che le racchiudono, in questo modo il computer saprà che stiamo utilizzando una stringa.
Per "carattere", però, il computer intende anche dei numeri, come sotto: */

let stringa2 = "12345";

// Per questo sono importanti le virgolette "" per le stringhe, poichè senza di queste il computer vedrà i numeri come un tipo di dato diverso da una stringa, ovvero....

let numero = 100;

/*...numeri! Questi funzionano proprio come i numeri della matematica, e ci si possono fare operazioni come addizione + o sottrazione -.
Anche i numeri decimali (con la virgoletta) come 10,5 sono considerati numeri dal linguaggio.*/

let vero = true;

/* C'è poi un altro tipo di dato, che si usa spesso, che si chiama "booleano". Questo sembra complicato, ma è molto semplice: è un gioco di "vero o falso"!
Ad esempio, è vero che 1 è minore di 5? Sì, è vero, e quindi il computer (quando glielo chiediamo) ci dira "true", che significa proprio "vero"!
Altrimenti, se chiedessimo se 1 è maggiore di 5, che è falso, il computer ci dirà: "false", "falso"! */

// Ci sono poi altri tipi di dati, ma questi sono un po' strani:

let scatola;

/* Se dicessimo al computer di creare una scatola, ma senza dirgli che tipo di dato metterci dentro, lui non lo saprà! Pero sà che alla scatola non è stato affidato nessun tipo di dato, 
per cui ci metterà un valore tutto suo chiamato "undefined", ovvero "non definito" (perchè al computer non piacciono le cose lasciate in sospeso!) 
Attenzione però: il computer potrebbe confondersi da solo, quindi meglio usare il tipo scritto sotto!*/

let cassetto = null;

/* Anche se il computer sa che non ci abbiamo messo niente, è sempre meglio dirgli che il contenitore è vuoto e che lo riempiremo dopo!
"null" serve proprio a questo, a dire al computer che abbiamo un cassetto vuoto, e che dopo lo riempiremo con qualcosa! */


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name = "Alessio";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num1 = 12;
let num2 = 20;
let somma = num1 + num2;

console.log(somma);


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

name = "Rocchigiani";

console.log (name);

/*Una variabile dichiarata tramite il comando let non potrà essere nuovamente dichiarata, tuttavia sarà possibile assegnarle un nuovo valore
tramite una semplice assegnazione (name = "Rocchigiani"). In questo modo,
sebbene abbiamo inizialmente dichiarato la variabile name con un valore di "Alessio", da questo momento in poi la variabile name conterrà il valore stringa "Rocchigiani".
Per evitare modifiche inaspettate/indesiderate delle variabili che ci interessa mantenere inalterate, esiste il costrutto const, il quale creerà una variabile 
impossibile da alterare nel suo valore dichiarato, sebbene sia comunque possibile utilizzarla come un'altra variabile qualunque.*/

const cognome = "Rocchigiani";

console.log (cognome);

// Utilizzando il construtto const, sappiamo per certo che la variabile cognome manterrà il suo valore di "Rocchigiani"
/* Se tentassimo di modificarla, come sotto (rimuovi il commento e salva), la console ci informerà dell'errore, 
poichè JS non accetta una modifica arbitraria al valore delle const */

// cognome = "Rossi"
// console.log (cognome)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
 
/* SCRIVI QUI LA TUA RISPOSTA */
let y = 4;
let sottrazione = y - x;

console.log(sottrazione);


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john";
let name2 = "John";

console.log(name1 === name2);