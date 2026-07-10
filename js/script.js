function calcularTempo() {



// Entrada

const titulo = document.getElementById("titulo").value;
const duracao = document.getElementById("duracao").valueAsNumber;


// Processamento

let hora = Math.trunc(duracao / 60)
let minuto = duracao % 60

let textoHora = hora == 1 ? "Hora" : "Horas";
let textoMinuto = minuto == 1 ? "Minuto" : "Minutos";



// Saída

document.getElementById("resultado-nome").textContent = `Filme: ${titulo}`

if (hora == 0) {
    document.getElementById("resultado-tempo").textContent = `Ducação: ${minuto} ${textoMinuto}.`
} else if (minuto == 0) {
    document.getElementById("resultado-tempo").textContent = `Ducação: ${hora} ${textoHora}.`
} else {
    document.getElementById("resultado-tempo").textContent = `Ducação: ${hora} ${textoHora} e ${minuto} ${textoMinuto}.`
}


}