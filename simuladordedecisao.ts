const tomarDecisao = (pergunta: string): string => {
    const respostas = ["Sim", "Não", "Talvez", "Depende"];
    const decisao = respostas[Math.floor(Math.random() * respostas.length)];
    return `Pergunta: "${pergunta}" - Decisão: ${decisao}`;
};

console.log(tomarDecisao("Devo viajar este ano?"));
