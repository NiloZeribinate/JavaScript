function Mostrar(){
    imagem = document.getElementById('inpImagem').files[0]

    img = document.createElement('img')
    img.src = URL.createObjectURL(imagem)
    img.style.width = '250px'
    document.getElementById('img').appendChild(img)
}