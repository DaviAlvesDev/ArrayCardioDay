//Database
interface inventor {
    nome:string
    sobrenome:string
    nascimento:number
    morte:number
}

const inventores: inventor[] = [
    {nome: "Albert", sobrenome: "Einstein", nascimento: 1879, morte: 1955},
    {nome: "Isaac", sobrenome: "Newton", nascimento: 1643, morte: 1727},
    {nome: "Galileo", sobrenome: "Galilei", nascimento: 1564, morte: 1642},
    {nome: "Marie", sobrenome: "Curie", nascimento: 1867, morte: 1934},
    {nome: "Johannes", sobrenome: "Kepler", nascimento: 1571, morte: 1630},
    {nome: "Nicolaus", sobrenome: "Copernicus", nascimento: 1473, morte: 1543},
    {nome: "Max", sobrenome: "Planck", nascimento: 1858, morte: 1947}
]

const pessoas: string[] = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
]

const bouvelards:string[] = ["Boulevard Auguste-Blanqui", "Boulevard Barbès", "Boulevard Beaumarchais", "Boulevard de l'Amiral-Bruix", "Boulevard Mortier", "Boulevard Poniatowski", "Boulevard Soult", "Boulevard des Capucines", "Boulevard de la Chapelle", "Boulevard de Clichy", "Boulevard du Crime", "Boulevard du Général-d'Armée-Jean-Simon", "Boulevard Haussmann", "Boulevard de l'Hôpital", "Boulevard des Italiens", "Boulevard Lefebvre", "Boulevard de la Madeleine", "Boulevard de Magenta", "Boulevard Malesherbes", "Boulevard Marguerite-de-Rochechouart", "Boulevard Montmartre", "Boulevard du Montparnasse", "Boulevard Raspail", "Boulevard Richard-Lenoir", "Boulevard Saint-Germain", "Boulevard Saint-Michel", "Boulevard de Sébastopol", "Boulevard de Strasbourg", "Boulevard du Temple", "Boulevard Voltaire", "Boulevard Hippolyte-Marquès"]

const transportes: string[] = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ]

//Ex#1: Inventores dos anos 1500
const inventoresSec16: inventor[] = inventores.filter((inventor) => Math.trunc(inventor.nascimento/100) == 15)
console.log("Inventores do século 16:")
inventoresSec16.forEach((element) => console.log(element.nome, element.sobrenome))
console.log('\n')

//Ex#2: Nome completo dos inventores
const nomeSobrenome:string[] = inventores.map((element) => `${element.nome} ${element.sobrenome}`)
console.log('Nome e sobrenome dos inventores:')
nomeSobrenome.forEach((element) => console.log(element))
console.log('\n')

//Ex#3: Ordenar os inventores por ano de nascimento, do mais velho para o mais novo
const invAnoNasc:inventor[] = inventores.sort(function(inventor1, inventor2){
    if (inventor1.nascimento > inventor2.nascimento) return 1
    if (inventor1.nascimento < inventor2.nascimento) return -1
    return 0
})
console.log("Inventores ordenados pelo ano de nascimento (mais velho para mais novo):")
invAnoNasc.forEach((inventor) => console.log(`${inventor.nome} ${inventor.sobrenome}, nascido(a) em ${inventor.nascimento}`))
console.log('\n')

//Ex#4 Qual a soma da idade de todos os inventores?
const totalIdade = inventores.reduce((total, inventor) => {
    return total + (inventor.morte - inventor.nascimento)
}, 0)
console.log(`O total das idades dos inventores é ${totalIdade} anos:`)

//Ex#5 Ordenar os inventores com base nos anos vividos
const invAnosViv:inventor[] = inventores.sort((inventor1, inventor2) => {
    const idade1 = inventor1.morte - inventor1.nascimento
    const idade2 = inventor2.morte - inventor2.nascimento

    return idade1 - idade2
})
invAnosViv.forEach((inventor) => console.log(`${inventor.nome} ${inventor.sobrenome} viveu ${inventor.morte - inventor.nascimento} anos`))
console.log('\n')

//Ex#6 Criar uma lista dos Bouvelards em Paris que contenham 'de'
const bouvelardsComDe:string[] = bouvelards.filter((bouvelard) => bouvelard.includes('de'))
console.log('Lista dos Bouvelards em Paris que contêm "de":')
bouvelardsComDe.forEach((bouvelard) => console.log(bouvelard))
console.log('\n')

//Ex#7 Ordenar pessoas alfabeticamente pelo sobrenome 
const pessoasOrd = pessoas.sort((pessoa1, pessoa2) => {
    if (pessoa1 < pessoa2) return -1
    if (pessoa1 > pessoa2) return 1
    return 0
})
console.log('Pessoas ordenadas alfabeticamente pelo sobrenome:')
pessoasOrd.forEach((pessoa) => console.log(pessoa))
console.log('\n')

//Ex#8 Contar as instâncias de cada um dos valores em transportes
const instTransportes = transportes.reduce(function(totalTransporte: Record<string, number>, transporte){
    if ((transporte in totalTransporte) && totalTransporte[transporte] !== undefined) {
        totalTransporte[transporte]++
    } else {
        totalTransporte[transporte] = 1
    }
    return totalTransporte
}, {})

console.log('Número de instâncias por transporte:')
Object.entries(instTransportes).forEach(([transporte, instancias]) => console.log(`${transporte}: ${instancias}`))
console.log('\n')