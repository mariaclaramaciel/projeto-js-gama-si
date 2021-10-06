//Pegar um input 
//Se for SIM, mostra categorias disponiveis, pergunta qual categoria ela escolhe
//Se for NÃO, mostra todos os livros em ordem crescente pelaquantidade de páginas

const livros = require('./database')
const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro?S/N')

if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis:')
    console.log('Suspense', '/Realismo Mágico', '/Ciências Sociais',
     '/Ficção', '/Autoajuda')
    
    const entradaCategoria = readline.question('Qual categoria você escolhe:')

    const retorno = livros.filter(livro => livro.categorias === entradaCategoria)

    console.table(retorno)
} else {
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log('Essas são todas os livros disponíveis:')
    console.table(livrosOrdenados)
}

