const racas = [
    "Índio Gigante",
    "Plymouth Rock",
    "Leghorn",
    "Orpington",
    "Rhode Island Red",
    "Brahma"
];

const botao = document.getElementById("mostrarBtn");
const lista = document.getElementById("lista");

botao.addEventListener("click", () => {
    lista.innerHTML = "";

    const ul = document.createElement("ul");

    racas.forEach(raca => {
        const li = document.createElement("li");
        li.textContent = raca;
        ul.appendChild(li);
    });

    lista.appendChild(ul);
});
