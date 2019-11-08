const jogadores = [{
    score: 0,
    nome: 'Jose',
    vantagem: 0
}, {
    score: 0,
    nome: 'Matheus',
    vantagem: 0
}];

let getJogadores = () => {
    return jogadores.length;
}

let getScore = (jogador) => {
    return jogadores[jogador].score;
}

let getJogador = (jogador) => {
    return jogadores[jogador];
}

let getPontuacao = (jogador) => {
    let pontuacoes = {0: 15, 15: 30, 30: 40, 40: 40}

    if (pontuacoes[jogador.score] === 40)
    {
        //if(jogador.vantagem === 2){
            return "Vencedor"
        //}
    }
    else{
        return pontuacoes[jogador.score]
    }
} 

let setVantagem = (jogador , vantagem) =>{
    jogador.vantagem = vantagem;
} 

let validarEmpate = (jogador1, jogador2) =>{
    if(jogador1.score === 40 && jogador2.score === 40){
        return 'Empate'
    }
}

let validarVantagem = (jogador1, jogador2) => {
    let pontuacaoJogador1 = getPontuacao(jogador1);
    let pontuacaoJogador2 = getPontuacao(jogador2);

    if (pontuacaoJogador1 > pontuacaoJogador2){
        
        return jogador1.nome;
    } 
        return jogador2.nome;
}


module.exports.getJogadores = getJogadores;
module.exports.getScore = getScore;
module.exports.getPontuacao = getPontuacao;
module.exports.getJogador = getJogador;
module.exports.validarEmpate = validarEmpate;
module.exports.validarVantagem = validarVantagem;
module.exports.setVantagem = setVantagem;