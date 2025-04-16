// Objeto para guardar os horários de cada botão
const horarios = {
    inicio: null,
    almoco: null,
    voltei: null,
    fui: null
};

// Função para obter a hora atual formatada
function obterHoraAtual() {
    const agora = new Date();
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');
    return `${horas}:${minutos}:${segundos}`;
}

// Função para lidar com o clique dos botões
function registrarClique(id) {
    const hora = obterHoraAtual();
    horarios[id] = hora;
    console.log(`Botão "${id}" clicado às ${hora}`);
}

// Ativar os botões (remover se você quiser ativar de outro jeito)
document.querySelectorAll('.btn').forEach(btn => btn.disabled = false);

// Adicionar os eventos aos botões
document.getElementById('inicio').addEventListener('click', () => registrarClique('inicio'));
document.getElementById('almoco').addEventListener('click', () => registrarClique('almoco'));
document.getElementById('voltei').addEventListener('click', () => registrarClique('voltei'));
document.getElementById('fui').addEventListener('click', () => registrarClique('fui'));