

const nome = prompt("Qual e o seu nome?")
const DataDeNascimento =prompt("Qual e a sua data de nascimento?")
const endereco = prompt("Qual e o seu endereco?")
const cpf = Number(prompt("Qual e o seu CPF?"))
const filhos = Number(prompt("Quantos filhos tem ?"))
const cargoAtual = prompt("Qual o seu cargo atual ?")
const salario = Number (prompt("Qual e o seu salario?"))
const comissao = prompt("recebe comissao?")
const seSimComissao = Number(prompt("Se sim qual e a sua comissao?"))
const anoDeAdmissao =Number (prompt("Qual foi o seu ano de admissao?"))

console.log(typeof nome)
console.log(typeof DataDeNascimento)
console.log(typeof endereco)
console.log(typeof cpf)
console.log(typeof filhos)
console.log(typeof cargoAtual)
console.log(typeof salario)
console.log(typeof comissao)
console.log (typeof seSimComissao)
console.log(typeof anoDeAdmissao)

console.log("O senhor/a", nome,"com a data de nascimento",DataDeNascimento,"que vive no seguinte endereco",endereco,"com o seguinte CPF",cpf,"tem",filhos,"filhos e no momento tem o cargo de",cargoAtual,"com o salario de ",salario,"e com comissao de",seSimComissao,"comecou na empresa em",anoDeAdmissao)
