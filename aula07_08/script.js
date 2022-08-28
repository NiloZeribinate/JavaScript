function LoadPosts() {
    document.getElementById("posts").innerHTML = 'Carregando...';
    
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(resultado){
            return resultado.json()
        })
            .then(function(posts){
                document.getElementById('posts').innerHTML = posts.length + ' posts'
            })
        .catch(function(error){
            console.log('ERRO!')
        })
}