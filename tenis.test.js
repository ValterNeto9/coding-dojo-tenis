const getJogadores = require('./tenis').getJogadores;
const getScore = require('./tenis').getScore;

test('Retorna dois jogadores', () => {  
    expect(getJogadores).toBe(2);
});

test('Retorna pontos', () => {
    let jogador = 1;
    expect(getScore(jogador)).toBeGreaterThanOrEqual(0);
});
