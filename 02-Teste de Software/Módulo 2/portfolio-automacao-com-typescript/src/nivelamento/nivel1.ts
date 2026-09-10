// formas de tipar

//forma 1
let idade:number;

//forma 2
const nome = 'Seu Zezo';

//forma 3 - não recomendado por ser redundante
const sobrenome:string = 'da Silva';

//tipagens especiais
type usuario = {'nick':string, 'age':number};

let jogador:usuario = {nick: 'Ricardo', age: 18};

let jogadorVelho = {nick:'Toin', age: 76};

function VerificarIdade(usuarioAtual:usuario) {
    if (usuarioAtual.age >= 21){
        console.log(`✅ Acesso liberado: O jogador ${usuarioAtual.nick} tem ${usuarioAtual.age} anos e pode jogar nosso joguinho muito massa de pei pei.`);
    } else {
        console.log(`❌ Acesso negado: O jogador ${usuarioAtual.nick} tem apenas ${usuarioAtual.age} anos, é menor de idade e não pode jogar nosso joguinho muito massa de pei pei.`);
    }
}

VerificarIdade(jogador);
VerificarIdade(jogadorVelho);



type Celular = {marca:string, ram:number, anoLancamento:number}

let galaxyA17:Celular = {marca: 'SAMSUNG', ram: 8, anoLancamento: 2025}


function verificarRAM (celularAtual:Celular) {
    let resultadoAnalise = 
        
        celularAtual.ram <= 4 
            
            ? `Este celular da marca ${celularAtual.marca}, lançado em ${celularAtual.anoLancamento}, possui apenas ${celularAtual.ram}GB de memória RAM, o que é ❌INSUFICIENTE para rodar PUBG.` 
            
            : `Este celular da marca ${celularAtual.marca}, lançado em ${celularAtual.anoLancamento}, possui ${celularAtual.ram}GB de memória RAM, o que é ✅SUFICIENTE para rodar PUBG.`
    
    console.log(resultadoAnalise)
}

verificarRAM (galaxyA17)