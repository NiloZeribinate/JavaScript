function subirPara(altura){
    window.scrollTo({
        top: altura,
        left: 0,
        behavior: "smooth"
    })
}

window.onscroll = function(){
    if(window.scrollY != 0){
        document.getElementById('scrollbutton').style.opacity = '1'
    }else{
        document.getElementById('scrollbutton').style.opacity = '0'
    }
}