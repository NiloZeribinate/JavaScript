function Adcionar(list1, ...novasVariaveis){
    return [...list1, ...novasVariaveis]
}

let nomes = ['Nilo', 'Pedro', 'Joao', 'Paulo']

let novos = Adcionar(nomes, 'Cleiton', 'Vlademir', 'Jorge')

console.log(novos)