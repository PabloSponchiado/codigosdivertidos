const gerarMundo = (): string => {
    const terrenos = ["Montanhas", "Florestas", "Rios", "Planícies", "Cidades"];
    const mapa = Array.from({ length: 5 }, () =>
        terrenos[Math.floor(Math.random() * terrenos.length)]
    );
    return `Mundo gerado: ${mapa.join(", ")}`;
};

console.log(gerarMundo());
