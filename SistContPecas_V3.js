let listaDePecas = ["Gabinete", "Placa mãe","Processador"];
let pesoDaPecaEmGramas = 101;
let quantPecas = listaDePecas.length;
let nomeDaPeca = "CPU";
if (quantPecas > 10) {
    console.log("Cadastro não permitido. Capacidade de 10 pçs da caixa ultapassada");
}
if (pesoDaPecaEmGramas < 100) {
    console.log("Cadastro não permitido: Peso da peça inferior a 100 gramas");  
}
if (nomeDaPeca.length < 3) {
    console.log("Informe um nome com pelo menos 3 caracteres.");
}