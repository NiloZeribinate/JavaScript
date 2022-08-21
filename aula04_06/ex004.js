let carro = {
    nome: 'Fiat',
    modelo: 'Uno',
    peso: 800,
    ligado: false,
    
    ligar: function(){
        this.ligado = true
        console.log(`VRUM VRUM!! (${this.nome} ${this.modelo} foi ligado)`)
    },

    acelerar: function(){
        if(this.ligado){
            console.log(`RAAAAANNN!!! (${this.nome} ${this.modelo} acelerou)`)
        }else{
            console.log(`O ${this.nome} ${this.modelo} está desligado.`)
        }
    }
}

//carro.ligar()
carro.acelerar()