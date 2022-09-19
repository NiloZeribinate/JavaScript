/*function LoadPosts() {
    document.getElementById("posts").innerHTML = 'Carregando...';
    
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(resultado){
            return resultado.json()
        })
            .then(function(posts){
                ExibirPosts(posts)
            })
        .catch(function(error){
            console.log('ERRO!')
        })
}*/

async function LoadPosts(){
    document.getElementById("posts").innerHTML = 'Carregando...';
    
    let fet = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await fet.json()
    ExibirPosts(json)
}

function ExibirPosts(listaDePosts){
    let html = ''

    for(i in listaDePosts){
        html += '<h3>'+listaDePosts[i].title+'</h3>'
        html += '<p>'+listaDePosts[i].body+'</p> <br>'
        html += '<hr>'
    }

    document.getElementById("posts").innerHTML = html
}