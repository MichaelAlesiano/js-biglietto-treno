// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65


var numerokm = prompt('Quanti km vuoi percorrere?');
var eta = prompt('Quanti anni hai?');

console.log(numerokm);
console.log(eta);

var bigliettointero = (numerokm * 0.21);
var scontogiovani = ((numerokm * 0.21) * 20) / 100;
var scontoover65 = ((numerokm * 0.21) * 40) / 100;

if (eta < 18) {
  var bigliettointero = bigliettointero - scontogiovani;
}else if (eta > 65) {
  var bigliettointero = bigliettointero - scontoover65;
}

document.getElementById('bigliettofinale').innerHTML= bigliettointero;

console.log(bigliettointero);
