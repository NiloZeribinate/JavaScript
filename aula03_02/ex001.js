function soltou(e){
    console.log(e)
    if(e.keyCode == 13){
        let texto = document.getElementById('texto')
        let div = document.getElementById('div01')

        div.innerHTML = texto.value
    }
}