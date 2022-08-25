function subirPara(altura){
    window.scrollTo({
        top: altura,
        left: 0,
        behavior: "smooth"
    })
}

window.onscroll = function(){
    let scrollbutton = document.getElementById('scrollbutton')

    if(window.scrollY != 0){ // Aparecer botão
        scrollbutton.style.opacity = '1'
    }else{ // Sumir botão
        scrollbutton.style.opacity = '0'
    }
}