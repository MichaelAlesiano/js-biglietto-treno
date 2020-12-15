
var numerokm = parseInt(prompt('Quanti km vuoi percorrere?'));
var eta = parseInt(prompt('Quanti anni hai?'));

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

console.log(bigliettointero.toFixed(2) + '€');

document.getElementById('bigliettofinale').innerHTML= bigliettointero.toFixed(2) + '€';
