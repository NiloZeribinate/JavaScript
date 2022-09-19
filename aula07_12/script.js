async function enviar(){
    let arquivo = document.getElementById('arquivo').files[0]

    let body = new FormData()
    
    body.append('title', 'Titulo')
    body.append('arquivo', arquivo)

    let req = await fetch('https://meusite.com.br/upload', {
        method: 'POST',
        body: body,
        headers: {
            
        }
    })
}