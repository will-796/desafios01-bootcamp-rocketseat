//calculo aposentadoria

const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;



if (sexo == "M" && contribuicao >= 35 && idade + 35 >= 95 || sexo =="F" && contribuicao >= 30 && idade +30 >= 85){
    console.log (`${nome}, você pode se aposentar!`)
} else {
    console.log (`${nome}, você ainda não pode se aposentar!`)
}

