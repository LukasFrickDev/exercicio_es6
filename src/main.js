const alunos = [
    {nome: "João", nota: 8},
    {nome: "Maria", nota: 9},
    {nome: "Pedro", nota: 4},
    {nome: "Ana", nota: 6},
    {nome: "Carlos", nota: 10},
    {nome: "Fernanda", nota: 5},
    {nome: "Lucas", nota: 8},
    {nome: "Juliana", nota: 7},
    {nome: "Roberto", nota: 6},
    {nome: "Isabela", nota: 4},
    {nome: "Rafael", nota: 7},
];

const descobrirNotasAlunos = (alunos) => 
    alunos.filter(alunos => alunos.nota >= 6);


const alunosQueSeraoAprovados = descobrirNotasAlunos(alunos);
console.log(alunosQueSeraoAprovados)

