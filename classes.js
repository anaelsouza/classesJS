// let jogador ={
//     nome: 'Neymar',
//     posicao: 'Atacante',
//     numGols:400
// }

const jogador = function(nome, posicao, numGols){
    nome = nome,
    posicao = posicao,
    gols= numGols

    this.getNome = function(){
        return nome
    }
        this.getpos = function(){
        return posicao
    }
        this.getgols = function(){
        return gols
    }


}

const Rodrigo = new jogador('Rodrigo', 'Atacante', 400)
console.log(Rodrigo.getNome())
const Lucas = new jogador('Lucas', 'Zagueiro', 100)
console.log(Lucas.getNome())
