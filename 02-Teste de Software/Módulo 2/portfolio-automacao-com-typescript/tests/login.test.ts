import {test, expect, vi} from 'vitest';

function loginLento(usuario:string): Promise <string> {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(`Bem-vindo, ${usuario}!`);

        }, 5000);
    })
}

test ('Simular login usando fake timers', async ()=>{
    //Ligando a máquina do tempo
    vi.useFakeTimers();
    console.log(`Iniciando LOGIN DE TETAS`);

    //Chamando promise usuário sem await
    const promessaLogin = loginLento('Bomba da Peste');

    //Configurar avanço de 5 segundos
    vi.advanceTimersByTime(5000);

    const resultado = await promessaLogin;

    //Verificar resultado
    expect(resultado).toBe('Bem-vindo, Bomba da Peste!')
    console.log('Sucesso! Teste realizado na velocidade da luz 💡')
    
    //DESLIGANDO A MÁQUINA DO TEMPO
    vi.useRealTimers();
})