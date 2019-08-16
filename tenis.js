const jogadores = [ {
    score: 5,
    nome: 'Jose',}
}, {JOGADOR2: {
    score: 10,
    nome: 'Matheus',}
}];

let getJogadores = () =>  {
    return jogadores.length;
}

let getScore = (jogador) => {
    return jogadores[jogador].score;
}

module.exports.getJogadores = getJogadores();
module.exports.getScore = getScore();