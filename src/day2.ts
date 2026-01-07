//Database
interface pessoa {
    nome: string
    nascimento: number
}

interface comentario {
    texto: string
    id: number
}

const pessoas: pessoa[] = [
    {nome: 'Davi', nascimento: 2010},
    {nome: 'Marcos', nascimento: 2003},
    {nome: 'Sandra', nascimento: 1984}, 
    {nome: 'Ketlin', nascimento: 2016}
]

const comentarios: comentario[] = [
    {texto: 'Amei isso!', id: 523423},
    {texto: 'Muito bom', id: 823423 },
    {texto: 'Tu é o cara!', id: 2039842},
    {texto: 'Pizza é minha comida favorita desde sempre!', id: 123523} ,
    {texto: 'É isso aí!', id: 542328}
]

//Ex#1 checagens com Some e Every
const data = new Date()
const ano = data.getFullYear()

const alguemDeMaior = pessoas.some((pessoa) => (ano - pessoa.nascimento) >= 18)
const todosDeMaior = pessoas.every((pessoa) => (ano - pessoa.nascimento) >= 18)

console.log('Tem alguma pessoa de maior (+18)?', alguemDeMaior)
console.log('Todas as pessoas são de maior (+18)?', todosDeMaior)
console.log('\n')