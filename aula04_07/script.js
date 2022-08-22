let mostrandoMenu = false

function menuToggle(){
    mostrandoMenu = !mostrandoMenu

    if(mostrandoMenu){
        document.getElementById('menu-area').style.width = '200px'
    }else{
        document.getElementById('menu-area').style.width = '0'
    }
}