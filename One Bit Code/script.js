function Calcular(event){
    console.log('Função iniciada')

    event.preventDefault()
    let valueTips = document.querySelector('input#conta').value
    let qualiService = document.querySelector('select#servicoQual').value
    let quantPeoples = document.querySelector('input#pessoasQuant').value

    if(valueTips > 0 && qualiService != 0 && quantPeoples > 0){
        let msg = document.getElementById("totalTips")
        let gorjetaValue = valueTips*qualiService/quantPeoples

        if(quantPeoples == 1){
            document.getElementById('each').style.display = "none"
        }else{
            document.getElementById('each').style.display = "block"
            console.log('Oxi')
        }

        msg.innerText = `A gorjeta será de R$ ${gorjetaValue.toFixed(2).replace('.', ',')}`
        msg.style.display = "block"
    }else{
        alert('Digite os dados corretamente')
    }
}

document.getElementById("totalTips").style.display = "none"
document.getElementById("each").style.display = "none"

document.getElementById("tipsForm").addEventListener('submit', Calcular)