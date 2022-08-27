function showDate(){
    let data = new Date()

    let h = data.getHours()
    let m = data.getMinutes()
    let s = data.getSeconds()
    
    let texto = ''

    if(h < 10){texto += '0' + h + ':'} else texto += h + ':'
    if(m < 10){texto += '0' + m + ':'} else texto += m + ':'
    if(s < 10){texto += '0' + s} else texto += s

    document.querySelector('.texto > p').innerText = texto
}

let timer = setInterval(showDate, 1000)

showDate()