const pessoas = [
    { nome: 'Davi', nascimento: 2010 },
    { nome: 'Marcos', nascimento: 2003 },
    { nome: 'Sandra', nascimento: 1984 },
    { nome: 'Ketlin', nascimento: 2016 }
];
const comentarios = [
    { texto: 'Amei isso!', id: 523423 },
    { texto: 'Muito bom', id: 823423 },
    { texto: 'Tu é o cara!', id: 2039842 },
    { texto: 'Pizza é minha comida favorita desde sempre!', id: 123523 },
    { texto: 'É isso aí!', id: 542328 }
];
//Ex#1 checagens com Some e Every
const data = new Date();
const ano = data.getFullYear();
const alguemDeMaior = pessoas.some((pessoa) => (ano - pessoa.nascimento) >= 18);
const todosDeMaior = pessoas.every((pessoa) => (ano - pessoa.nascimento) >= 18);
console.log('Tem alguma pessoa de maior (+18)?', alguemDeMaior);
console.log('Todas as pessoas são de maior (+18)?', todosDeMaior);
console.log('\n');
//Ex#2 Achar o comentário com o ID 823423
const coment = comentarios.find((coment) => coment.id == 823423);
console.log(`O comentário com ID ${coment?.id} é: "${coment?.texto}"`);
console.log('\n');
//Ex#3 Deletar o comentário com o ID 823423
const comentIndex = comentarios.findIndex((coment) => coment.id == 823423);
if (comentIndex > -1) {
    console.log(`Comentário "${comentarios[comentIndex]?.texto}" (ID ${comentarios[comentIndex]?.id}) apagado`);
    console.log('\n');
    comentarios.splice(comentIndex, 1);
}
else {
    console.log('Não existe um comentário com esse ID');
}
console.log('Comentários restantes:');
comentarios.forEach((coment) => console.log(`${coment.texto} (ID ${coment.id})`));
export {};
//# sourceMappingURL=day2.js.map