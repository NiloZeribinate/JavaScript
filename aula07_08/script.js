function LoadPosts() {
    document.getElementById("posts").innerHTML = 'Carregando...';
    
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(resultado){
            return resultado.json()
        })
            .then(function(posts){
                document.getElementById('posts').innerHTML = posts.length + ' posts'
                console.log(posts)
            })
        .catch(function(error){
            console.log('ERRO!')
        })
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