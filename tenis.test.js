const getJogadores = require('./tenis').getJogadores;
const getScore = require('./tenis').getScore;
const getPontuacao = require('./tenis').getPontuacao;
const getJogador = require('./tenis').getJogador;
const validarEmpate = require('./tenis').validarEmpate;

test('Retorna dois jogadores', () => {  
    expect(getJogadores()).toBe(2);
});

test('Retorna pontos', () => {
    let jogador = 1;
    expect(getScore(jogador)).toBeGreaterThanOrEqual(0);
});

test('Get jogardor by id', () => {
    let id = 0;
    expect(getJogador(id).nome).toBe('Jose');
})

test('Atribuir pontos', () => { 
    let id = 0;
    expect(getPontuacao(getJogador(id))).toBe(15);
});

test('Verifica se venceu', () => { 
    let id = 0;
    let jogador = getJogador(id);
    jogador.score = 40
    expect(getPontuacao(jogador)).toBe("Vencedor");
});

test('Verificar empate', () =>{
    let jogador1 = getJogador(0);
    let jogador2 = getJogador(1);

    jogador1.score = 40;
    jogador2.score = 40;

    expect(validarEmpate(jogador1, jogador2)).toBe('Empate');

});