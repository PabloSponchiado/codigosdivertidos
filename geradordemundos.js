var gerarMundo = function () {
    var terrenos = ["Montanhas", "Florestas", "Rios", "Planícies", "Cidades"];
    var mapa = Array.from({ length: 5 }, function () {
        return terrenos[Math.floor(Math.random() * terrenos.length)];
    });
    return "Mundo gerado: ".concat(mapa.join(", "));
};
console.log(gerarMundo());
