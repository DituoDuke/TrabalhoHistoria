const revoltaCaixaTemplate = document.querySelector("[data-revolta-template]");
const revoltaCaixaCaixa = document.querySelector("[data-revoltas-caixa-caixa]");
const procurarInput = document.querySelector("[data-procurar]");

let users = []

procurarInput.addEventListener("input", (a) => {
  const valor = a.target.value;
  users.forEach(user => {
    const isVisible = user.nome.toLowerCase().includes(valor.toLowerCase())
    user.element.classList.toggle("hide", !isVisible)
  })
});

let addTemplateClickEvents = () => {
  const caixas = document.querySelectorAll(".caixa")
  
  caixas.forEach(card => {
    card.addEventListener('click', () => {
            const canvas = card.dataset.canvas
            
            window.open(canvas, '_blank');
        })
  })
}

fetch("https://dituoduke.github.io/RevoltasJson/revoltas.json")
  .then((res) => res.json())
  .then((data) => {
    users = data.map((user) => {
      const caixa = revoltaCaixaTemplate.content.cloneNode(true).children[0];
      const nome = caixa.querySelector("[data-nome]");
      const canvas = user.canvas
      caixa.dataset.canvas = user.canvas
      nome.textContent = user.nome;

      revoltaCaixaCaixa.append(caixa);
      return {...user, element: caixa};
    });
  
    addTemplateClickEvents()
  });