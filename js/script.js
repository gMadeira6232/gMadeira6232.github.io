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

cursos.forEach((curso) => {
	const cardCurso = document.createElement("div");
	cardCurso.className = "curso-card";

	const imagemCurso = document.createElement("img");
	imagemCurso.src = curso.imagem;
	imagemCurso.alt = curso.nome;

	const nomeCurso = document.createElement("h3");
	nomeCurso.textContent = curso.nome;

	const duracaoArea = document.createElement("p");
	duracaoArea.textContent = `${curso.duracaoHoras} horas · ${curso.areaAtuacao}`;

	const inicio = document.createElement("p");
	inicio.textContent = `Início: ${curso.dataInicio}`;

	const fim = document.createElement("p");
	fim.textContent = `Fim: ${curso.dataFim}`;

	const resumo = document.createElement("p");
	resumo.className = "curso-resumo";
	resumo.textContent = curso.resumo;

	const preco = document.createElement("p");
	preco.className = "curso-preco";
	preco.textContent = curso.valor.toLocaleString("pt-BR", {
		style: "currency",
		currency: "BRL",
	});

	const matricula = document.createElement("a");
	matricula.textContent = "Efetuar matrícula";
	matricula.href = "#cursos";
	matricula.className = "botao";

	const rodapeCurso = document.createElement("div");
	rodapeCurso.className = "curso-rodape";
	rodapeCurso.append(preco, matricula);

	cardCurso.append(imagemCurso, nomeCurso, duracaoArea, inicio, fim, resumo, rodapeCurso,);
	gridCursos.appendChild(cardCurso);
});
