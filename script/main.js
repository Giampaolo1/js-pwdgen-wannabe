// chiedere nome
var nome = prompt("Per generare la password inserisci qui il tuo nome");
// salutare e chieder cognome
var cognome = prompt("ciao " + nome + ", inserisci ora il tuo cognome");
// chiedere colore
var colore = prompt("Grazie, come ultimo step inserisci ora il tuo colore preferito");

// calcolo (output)
var outputfin = nome + cognome + colore +"19"

// seleziono elemento html in cui fare output
var htmlElement = document.getElementById("result");

// output finale su elemento selezionato
htmlElement.innerHTML = "La prima parte della tua password è: " + (nome+cognome);

var htmlElement = document.getElementById("result2");
htmlElement.innerHTML = "La prima parte della tua password è: " + (nome+cognome) + "La seconda parte la trovi stampata in Console Log";

console.log (colore+"19")
