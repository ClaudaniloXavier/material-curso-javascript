var aluno = {
  nome: 'Bruna',
  idade: 19,
  telefone: 999999999
};
var x;
for (x in aluno) {
  console.log(x);
}

// For/in é usado para percorrer as propriedades de um objeto;
//O exemplo acima retorna: nome, idade e telefone
