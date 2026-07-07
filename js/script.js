function calcularTempo() {

// Entrada

let nome = document.getElementById("nome-filme").value;
let resultadoNome = document.getElementById("resultado-nome");

let minutos = document.getElementById("tempo-filme").valueAsNumber;
let resultadoTempo = document.getElementById("resultado-tempo");

// Processamento

let horas = Math.trunc(minutos / 60)
let sobra = minutos % 60;

let textoHora = horas == 1 ? "Hora" : "Horas";
let textoMinuto = sobra == 1 ? "Minuto" : "Minutos";

// Saída

resultadoNome.textContent = "FIlme: " + nome;

if (horas == 0) {
    resultadoTempo.textContent = `Duração: ${sobra} ${textoMinuto}`
} else if (sobra == 0) {
    resultadoTempo.textContent = `Duração: ${horas} ${textoHora}`
} else {
    resultadoTempo.textContent = `Duração: ${horas} ${textoHora} e ${sobra} ${textoMinuto}.`
}

}


// if (horas == 0) {
//     resultadoTempo.textContent = `Duração: ${sobra} Minuto(s).`
// } else if (horas == 1 && sobra <= 0) {
//     resultadoTempo.textContent = `Duração: ${horas} Hora.`
// } else if (horas == 1 && sobra >= 1) {
//     resultadoTempo.textContent = `Duração: ${horas} Hora e ${sobra} Minutos.`
// } else if (horas > 1 && sobra <= 0) {
//     resultadoTempo.textContent = `Duração: ${horas} Horas.`
// } else if (horas > 1 && sobra >= 1) {
//     resultadoTempo.textContent = `Duração: ${horas} Horas e ${sobra} Minutos.`
// }