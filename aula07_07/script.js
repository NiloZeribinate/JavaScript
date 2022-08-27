function PegarTemperatura(){
    return new Promise(
        function(resolve, reject){
            console.log('Pegando temperatura...')

            setTimeout(function(){
                resolve('40°')
            }, 2000)
        }
    )
}


// Usando a promise

let temp = PegarTemperatura()

temp.then(
    function(resultado){
        console.log(`Temperatura: ${resultado}`)
    }
)

temp.catch(
    function(erro){
        console.log("ERRO!")
    }
)