function trocarImg(filename, animalname){
    document.querySelector('.imagem').setAttribute('src', 'Imagens/'+filename)
    document.querySelector('.imagem').setAttribute('data-animal', animalname)
}

function pegarAnimal(){
    let animal = document.querySelector('.imagem').getAttribute('data-animal')

    alert('O animal da imagem é um '+ animal)
}