var nome = 'Nome jogador';
var idade = Math.floor((Math.random() * 13) + 1);

if(idade >= 18) {
  console.log(nome + ' você já é maior de idade');
} else {
  console.log(nome + ' infelizmente você ainda é menor de idade');
}
