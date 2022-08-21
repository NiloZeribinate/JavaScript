let telefoneAtivo = false

function mostrarTelefone(elemento){
    console.log(telefoneAtivo)
    
    telefoneAtivo = !telefoneAtivo
    
    if(telefoneAtivo){
        elemento.innerText = "Esconder Telefone"
        document.getElementById('telefone').style.display = 'block'
    }else{
        elemento.innerText = "Mostrar Telefone"
        document.getElementById('telefone').style.display = 'none'
    }
}