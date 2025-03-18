var tomarDecisao = function (pergunta) {
    var respostas = ["Sim", "Não", "Talvez", "Depende"];
    var decisao = respostas[Math.floor(Math.random() * respostas.length)];
    return "Pergunta: \"".concat(pergunta, "\" - Decis\u00E3o: ").concat(decisao);
};
console.log(tomarDecisao("Devo viajar este ano?"));
