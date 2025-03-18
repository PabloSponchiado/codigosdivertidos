function gerarNomeDeDragao() {
    var partes = ['Dra', 'Zor', 'Thal', 'Mir', 'Gar', 'Xan', 'Oth', 'Ryn'];
    return partes[Math.floor(Math.random() * partes.length)] +
        partes[Math.floor(Math.random() * partes.length)];
}
console.log(gerarNomeDeDragao());
