import { indicadores, cursos } from "./dados.js";

const grid = document.querySelector(".indicadores-grid");

indicadores.forEach((indicador) => {
    const card = document.createElement("div");
    card.className = "indicador-card";
    const valor = document.createElement("h3");
    valor.textContent = indicador.valor;
    const titulo = document.createElement("p");
    titulo.textContent = indicador.titulo;
    card.append(valor, titulo);
    grid.appendChild(card);
});

const gridCursos = document.querySelector(".cursos-grid");

const cardCurso = document.createElement("div");
cardCurso.className = "curso-card";
const imagemCurso = document.createElement("img");
imagemCurso.src = cursos[0].imagem;
imagemCurso.alt = cursos[0].nome;
const nomeCurso = document.createElement("h3");
nomeCurso.textContent = cursos[0].nome;
cardCurso.append(imagemCurso, nomeCurso);
gridCursos.appendChild(cardCurso);