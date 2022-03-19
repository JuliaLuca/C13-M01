const prompt = require ("prompt-sync")();
let resp
let pontos = 0
let s = 0
let resposta

console.log("Sinto a presença da Hertenah de longe... Espero que esteja acompanhada de Otan e de boas noticias!");
console.log();
console.log("Hertenah esta indo atras de seus sonhos, incrivel sendo apenas uma menina de 20 anos,\neu acho que ela esta preparada...");
console.log("Sinto o seu poder e força de vontade!");
console.log();
console.log("Meu gato, Apolo esta vendo algo... Sera que Hertenah?");
resposta = prompt("Vou perguntar... Apolo é a Hertenah vindo?")

if(resposta == "sim" || resposta == "Sim"){

    console.log();

    console.log("--------------------------------------------------------------------------------")
    console.log("|                       Ola, Hertenah! Como voce esta?                         |")
    console.log("|                  BEM VINDA AO COVEN DE ETAN NOVAMENTE!                       |")
    console.log("--------------------------------------------------------------------------------")
    console.log("|Eu, Dayvoin, te digo que sua primeira jornada chegou ao fim.                  |")
    console.log("|Essa sua jornada de aprendizado e junto ao caminho espiritual foi bem longa   |")
    console.log("--------------------------------------------------------------------------------")

    console.log();

    console.log("Vamos conversar um pouco, ok? Tenho algumas perguntas!")

    console.log();

    console.log("------------------------------------------")
    console.log("|Para conversar responda: sim, SIM ou 1  |")
    console.log("|Caso não queira conversar: nao, NAO ou 2|")
    console.log("------------------------------------------")

    console.log();

    resp = prompt("Escolha se quer conversar ou nao: ")

    if(resp == "sim" || resp == "SIM" || resp == 1){
        console.log("Obrigada por aceitar conversar comigo!")
        console.log();
        console.log("A seguir farei algumas perguntas, atraves de suas respostas irei avaliar a voce, Hertenah.")
        console.log();

        function pontuacao(){
            if(resposta == "SIM" || resposta == "sim"){
                pontos += 10
                s += 1
            }else{}
        }
        resposta = prompt("Você conseguiu passar por todos os Portais?")
        pontuacao();
        console.log();

        resposta = prompt("Conseguiu pegar os cristais e livro sagrado?")
        pontuacao();
        console.log();

        resposta = prompt("Seu companheiro, Otan, do Coven, esta com você?")
        pontuacao();
        console.log();

        resposta = prompt("Vocês trabalharam em equipe?")
        pontuacao();
        console.log();

        resposta = prompt("E o ultimo ritual, fizeram?")
        pontuacao();
        console.log();

        if(pontos == 50){
            console.log("O seu total de respostas sim, foi de: " +s)
            console.log("Hertenah, você será uma bruxa incrivel! Estou muito orgulhoso de toda essa força e garra sua! \nEu, Dayvoin, consagro você, Hertenah!")
        }else if(pontos ==  40){
            console.log("O seu total de respostas sim, foi de: " +s)
            console.log("Voce foi bem, mas voce pode bem mais! Acredite. Admiro voce e Otan.")
        }else if(pontos == 30){
            console.log("O seu total de respostas sim, foi de: " +s)
            console.log("Pelo menos conseguiu voltar, mas não parece ter sabedoria e maturidade o suficiente para estar em nosso Coven.")
        }else if(pontos == 10 || pontos == 20){
            console.log("O seu total de respostas sim, foi de: " +s)
            console.log("Voce tem toda uma garra, mas não esta no seu tempo ainda, respeite mais essa etapa! Tente depois novamente...")
        }else{
            console.log("O seu total de respostas sim, foi de: " +s)
            console.log("Eu me dediquei a você, te ensinei muito...Mas me parece que voce não esta nada preparada Hertenah,\n ainda abandonou seu companheiro Otan...Adeus, aqui não é seu lugar.")
        }
    }else{
        console.log("Pelo que me parece voce não absorveu nada de sua caminhada e não merece participar do Coven Etan! Adeus!")
    }
}else{
    console.log("Apolo disse que não é ela... Mas eu sei que ela virá hoje ainda!") 
    console.log("Vamos esperar ela mais um pouco...")
}