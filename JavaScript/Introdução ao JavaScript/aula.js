const precoEtalnol = 5.79;
const preoGasolina = 6.66;
const kmPorLitro = 10;
const distanciaEmKM = 100;
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = distanciaEmKM / kmPorLitro;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtalnol;
    console.log(valorGasto.toFixed(2)); 
} else {
    const valorGasto = litrosConsumidos * preoGasolina;
    console.log(valorGasto.toFixed(2));
}

const valrGasto = litrosConsumidos * preçoEtanol;
console.log(valrGasto.toFixed(2));
