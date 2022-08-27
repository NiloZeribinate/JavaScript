function LoadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(resultado){
            return resultado.json
        })
        .then(function(posts){
            document.getElementById('posts').innerHTML = posts.length + ' posts'
        })
        .catch(function(erro){
            console.log('ERRO!')
        })
}