const substantivos = ['sol', 'lua', 'vento', 'mar'];
const adjetivos = ['brilhante', 'triste', 'furioso', 'calmo'];
const verbos = ['dança', 'canta', 'grita', 'sussurra'];

function gerarPoema(): string {
  return `O ${substantivos[Math.floor(Math.random() * substantivos.length)]} ${verbos[Math.floor(Math.random() * verbos.length)]} ${adjetivos[Math.floor(Math.random() * adjetivos.length)]}.`;
}
console.log(gerarPoema());