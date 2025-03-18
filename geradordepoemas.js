var substantivos = ['sol', 'lua', 'vento', 'mar'];
var adjetivos = ['brilhante', 'triste', 'furioso', 'calmo'];
var verbos = ['dança', 'canta', 'grita', 'sussurra'];
function gerarPoema() {
    return "O ".concat(substantivos[Math.floor(Math.random() * substantivos.length)], " ").concat(verbos[Math.floor(Math.random() * verbos.length)], " ").concat(adjetivos[Math.floor(Math.random() * adjetivos.length)], ".");
}
console.log(gerarPoema());
