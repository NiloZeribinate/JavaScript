function NovaInfo(info){
    let novasInfo = {
        ...info,
        id: 0,
        token: 'dksajkfjkjaf',
        data_cadastro: new Date()
    }

    return novasInfo
}


console.log( NovaInfo( {nome:'Nilo', sobrenome:'Zeribinate'} ) )