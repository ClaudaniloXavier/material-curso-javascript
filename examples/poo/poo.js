function Heroi () {

    var identidade;
    var cidade;
    var poder;

    this.setIdentidade = function (identidadeHeroi) {
        identidade = identidadeHeroi;
    }

    this.setCidade = function (cidadeHeroi) {
        cidade = cidadeHeroi;
    }

    this.setPoder = function (poderHeroi) {
        poder = poderHeroi;
    }

    this.getIdentidade = function () {
        return identidade;
    }

    this.getCidade = function () {
        return cidade;
    }

    this.getPoder = function () {
        return poder;
    }

    this.mostraDadosHeroi = function () {
        alert("Nome do heroi: " + this.getIdentidade() + "\nCidade que protege: " + this.getCidade() + "\nPoder: " + this.getPoder());
    }
}

var Heroi = new Heroi();

Heroi.setIdentidade("Flash");
Heroi.setCidade("Central City");
Heroi.setPoder("Super velocidade");
Heroi.mostraDadosHeroi();