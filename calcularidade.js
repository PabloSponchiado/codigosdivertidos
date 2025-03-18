var calcularIdade = function (dataNascimento) {
    var hoje = new Date();
    var nascimento = new Date(dataNascimento);
    var idade = hoje.getFullYear() - nascimento.getFullYear();
    var mes = hoje.getMonth() - nascimento.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }
    return idade;
};
console.log(calcularIdade("2000-03-18")); // Resultado: Idade atual
