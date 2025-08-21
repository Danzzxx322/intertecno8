// Navegação por botão
function irPara(pagina) {
  window.location.href = pagina;
}

// Dica aleatória do dia
const dicas = [
  "Coma frutas todos os dias 🍎",
  "Beba bastante água 💧",
  "Inclua vegetais em todas as refeições 🌱",
  "Evite refrigerantes e ultraprocessados 🚫",
  "Participe da preparação dos alimentos para aprender e se divertir!"
];

document.addEventListener("DOMContentLoaded", () => {
  const dicaEl = document.getElementById("dica-dia");
  if(dicaEl){
    const aleatoria = dicas[Math.floor(Math.random() * dicas.length)];
    dicaEl.textContent = aleatoria;
  }
});
