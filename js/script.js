import { indicadores, cursos, vagas, candidatos } from "./dados.js";

const gridIndicadores = document.querySelector(".indicadores-grid");

indicadores.forEach((indicador) => {
	const card = document.createElement("div");
	card.className = "indicador-card";
	const valor = document.createElement("h3");
	valor.textContent = indicador.valor;
	const titulo = document.createElement("p");
	titulo.textContent = indicador.titulo;
	card.append(valor, titulo);
	gridIndicadores.appendChild(card);
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

	cardCurso.append(imagemCurso, nomeCurso, duracaoArea, inicio, fim, resumo, rodapeCurso);
	gridCursos.appendChild(cardCurso);
});

const gridOportunidades = document.querySelector(".oportunidades-grid");

vagas.forEach((vaga) => {
	const cardVaga = document.createElement("div");
	cardVaga.className = "vaga-card";

	const nomeVaga = document.createElement("h3");
	nomeVaga.textContent = vaga.nomeVaga;

	const iconeLocal = document.createElement("img");
	iconeLocal.src = "images/marcador.svg";
	iconeLocal.alt = "Icone Marcador Localização";
	iconeLocal.className = "icone-local";

	const localVaga = document.createElement("p");
	localVaga.className = "vaga-local";
	localVaga.textContent = vaga.local;
	localVaga.prepend(iconeLocal);

	const descricaoVaga = document.createElement("p");
	descricaoVaga.textContent = vaga.descricao;

	const candidatura = document.createElement("a");
	candidatura.textContent = "Quero me candidatar";
	candidatura.className = "botao";
	candidatura.href = "#oportunidades";

	cardVaga.append(nomeVaga, localVaga, descricaoVaga, candidatura);
	gridOportunidades.appendChild(cardVaga);
});

const gridCandidatos = document.querySelector(".candidatos-grid");

candidatos.forEach((candidato) => {
	const cardCandidato = document.createElement("div");
	cardCandidato.className = "candidato-card";

	const fotoCandidato = document.createElement("img");
	fotoCandidato.className = "candidato-foto";
	fotoCandidato.src = candidato.foto;
	fotoCandidato.alt = candidato.nome;

	const nomeCandidato = document.createElement("h3");
	nomeCandidato.textContent = candidato.nome;

	const formacaoCandidato = document.createElement("p");
	const destaqueFormacao = document.createElement("strong");
	destaqueFormacao.textContent = "Formação: ";
	formacaoCandidato.append(destaqueFormacao, candidato.formacao);

	const areaCandidato = document.createElement("p");
	areaCandidato.className = "candidato-area";
	areaCandidato.textContent = candidato.areaAtuacao;

	const bioCandidato = document.createElement("p");
	bioCandidato.className = "candidato-bio";
	bioCandidato.textContent = candidato.shortbio;

	const idadeCandidato = document.createElement("p");
	idadeCandidato.textContent = `${candidato.idade} anos`;

	const cabecalhoCandidato = document.createElement("div");
	cabecalhoCandidato.className = "candidato-cabecalho";
	const infoCandidato = document.createElement("div");
	infoCandidato.className = "candidato-info";
	infoCandidato.append(nomeCandidato, areaCandidato, idadeCandidato);
	cabecalhoCandidato.append(fotoCandidato, infoCandidato);

	const emailCandidato = document.createElement("a");
	emailCandidato.className = "candidato-contato candidato-email";
	emailCandidato.textContent = candidato.email;

	const contatoCandidato = document.createElement("p");
	contatoCandidato.className = "candidato-contato";
	contatoCandidato.textContent = `${candidato.telefone} · `;

	const linkedin = document.createElement("a");
	linkedin.textContent = "LinkedIn";
	linkedin.href = candidato.redesSociais;
	linkedin.target = "_blank";
	contatoCandidato.append(linkedin);

	const conectarCandidato = document.createElement("a");
	conectarCandidato.textContent = "Conectar";
	conectarCandidato.className = "botao";
	conectarCandidato.href = "#candidatos";

	cardCandidato.append(cabecalhoCandidato, formacaoCandidato, bioCandidato, emailCandidato, contatoCandidato, conectarCandidato);
	gridCandidatos.appendChild(cardCandidato);
});