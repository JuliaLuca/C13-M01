const prompt = require("prompt-sync")();

const choco = ["choco ouro", "choco prata", "choco bronze"];
const recheios = ["docinho da vovo", "doce de leite com coco", "amendoas com chocolate"];
let esc;
let escolha;
let pc; // sobre o pc, a variavel pc recebe o que esta dentro da posição do indice gerado pelo random na array choco
let rodadas ;
let vitUsu = 0;
let vitPc = 0;
let resp;
let continuar = "";

console.log("======================================================");
console.log("|            BEM VINDO AO MUNDO DE SABORES           |");
console.log("======================================================");
console.log("| ESSA É A NOSSA FABRICA DE CHOCOLATE SUPER INCRIVEL!|");
console.log("------------------------------------------------------");
console.log("|  TEREMOS UMA COMPETIÇÃO INCRIVEL E APETITOSA       |");
console.log("------------------------------------------------------");
console.log("");

console.log("|------------------>>>>>>>>>>>------------------>>>>>>>>>>>--------------|");
console.log("|Voce tera oportunidade de jogar varias vezes!!                          |");
console.log("|------------------>>>>>>>>>>>------------------>>>>>>>>>>>--------------|");
console.log("| Caso nao queira mais, informe na proxima rodada                        |");
console.log("|------------------>>>>>>>>>>>------------------>>>>>>>>>>>--------------|");
console.log("");


resp = prompt("Voce quer jogar? [s] ou [n] ");
if(resp == "s"){
    while(continuar != "n"){
        rodadas = parseInt(prompt("Informe quantas rodadas deseja:"));
        console.clear();
        console.log("");
        for(let i = 0; i <rodadas; i++){

            while(rodadas >  0){

                console.log("------------>>>>>>>>>>>>>>>>>>>>>>>>>-------------->>>>>>>>>>>>>>>>>>---------------------------------------------------|");
                console.log("|O choco ouro é super especial e bem recheado, possui doce de leite junto ao chocolate                                  |");
                console.log("------------>>>>>>>>>>>>>>>>>>>>>>>>>-------------->>>>>>>>>>>>>>>>>>---------------------------------------------------|");
                console.log("|O choco prata é algo mais rico, possui 80% cacau e um pouco de doce de leite, ganha muito do Choco Ouro.               |");
                console.log("------------>>>>>>>>>>>>>>>>>>>>>>>>>-------------->>>>>>>>>>>>>>>>>>---------------------------------------------------|");
                console.log("|Porem O choco Prata perde para o Bronze que é uma mistura de sabores incriveis, 50% cacau, brigadeiro e doce de morango|");
                console.log("------------>>>>>>>>>>>>>>>>>>>>>>>>>-------------->>>>>>>>>>>>>>>>>>---------------------------------------------------|");
                console.log("Então, fica a dica, Choco Ouro ganha de choco Bronze, porem, perde para Choco Bronze                                    |");
                console.log("------------>>>>>>>>>>>>>>>>>>>>>>>>>-------------->>>>>>>>>>>>>>>>>>---------------------------------------------------|");
                console.log("Choco Bronze ganha de Choco Prata, porem, perde para Choco Ouro                                                         |");
                console.log("------------>>>>>>>>>>>>>>>>>>>>>>>>>-------------->>>>>>>>>>>>>>>>>>---------------------------------------------------|");
                console.log("Por fim, Choco Prata ganha de Choco Ouro, porem, perde para Choco Bronze                                                ");
                console.log("------------>>>>>>>>>>>>>>>>>>>>>>>>>-------------->>>>>>>>>>>>>>>>>>---------------------------------------------------|");
                
                
                rodadas--;
                console.log("Voce tera que escolher o seu chocolatinho e o Cleitinho vai escolher o dele...");
                console.log("");
                console.log("Cleitinho fara a escolha dele, faça a sua depois!");
                pc = choco[Math.floor(Math.random()*3)];
                console.log("");
        
                console.log("INFORME SOMENTE NUMEROS");
                console.log("");
        
                console.log("---------------------------------------------");
                console.log("|          ESCOLHA SUA DELICIA              |");
                console.log("---------------------------------------------");
                console.log("|  0- CHOCO OURO                            |");
                console.log("|  1- CHOCO PRATA                           |");
                console.log("|  2- CHOCO BRONZE                          |");
                console.log("|___________________________________________|");
                console.log("") ;
        
                escolha = prompt("Escolha a opção que deseja: ");
                console.clear();
                    if(escolha == 0){
                        console.log("Voce escolheu o: " +choco[0] );
                        escolha = `choco ouro`;
                    }else if(escolha == 1){
                        console.log("Voce escolheu o: " +choco[1]);
                        escolha = `choco prata`;
                    }else if(escolha == 2){
                        console.log("Voce escolheu o: " +choco[2]);
                        escolha = `choco bronze`;
                    }
                    if(pc == choco[0]){
                        console.log(`Ele escolheu ${choco[0]}`);
                    }else if(pc == choco[1]){
                        console.log(`Ele escolheu ${choco[1]}`);
                    }else if(pc == choco[2]){
                        console.log(`Ele escolheu ${choco[2]}`);
            
                    }
                console.log("RODADAS ENCERRADAS!!");
        
                const p1 = choco.indexOf(escolha);
                const p2 = choco.indexOf(pc);
                console.log(p1); // um numero de 0 a 2 dizendo a posição do player na array 
                console.log(p2); // um numero de 0 a 2 dizendo a posição do pc na array
                console.log("Voce escolheu: " +p1); //um numero de 0 a 2 informando a posição do usu no array
                console.log("Cleitinho escolheu: " +p2);
        
                if((p1 == 0 && p2 == 2) || (p1 == 1 && p2 == 0) || (p1 == 2 && p2 == 1)){
                    vitUsu++
                    console.log(`\n Voce venceu!!`);
                }else if((p2 == 0 && p1 == 2) || (p2 == 1 && p1 == 0) || (p2 == 2 && p1 == 1)){
                    vitPc++
                    console.log(`O Cleitinho ganhou!!!`);
                }else{
                    console.log(`\n Vish.... Deu empate!!`);
                    // oq for acontecer quando der empate.
                }
                console.log(`\n\n PLACAR: \n voce: ${vitUsu} \n Cleitinho: ${vitPc}`);
                prompt(`press ENTER`);
                console.clear();
            }
            if(vitPc > vitUsu){
                console.log("O CLEITINHO TEVE A MELHOR PONTUAÇÃO, ELE VENCEU!!!");
            }else if(vitUsu > vitPc){
                console.log("VOCE TEVE A MELHOR PONTUAÇÃO, VOCE VENCEU!!!");
            }else if(vitPc == vitUsu){
                console.log("Infelizmente houve um empati!");
            }    
        }
        continuar = prompt("Deseja continuar jogando? [s] ou [n]");
    }
    console.clear();
    console.log("Independente de vencer ou perder, fico feliz que tenha participado dos nossos jogos!!");
    console.log("Ja que chegou aqui, te darei um pequeno presente, independente de ganhar ou perder!\n");
    console.clear();
    console.log("");
    prompt(`press ENTER`);
    console.log("Temos algumas opções de potes de recheios para nossas futuras barras, \n sortearemos e te daremos um de brinde!");
    console.log("===============================");
    console.log("| Docinho da Vovo             |");
    console.log("| Doce de Leite com coco      |");
    console.log("| Amendoas com Chocolate      |");
    console.log("===============================");

    esc = recheios[Math.floor(Math.random()*3)]
    console.log(`O seu resultado saiu!!! Voce ganhou o recheio de ${esc}!!! \nEu espero que goste! Sera a(o) primeira(o) a experimentar!`);

}else{
    console.log("Ta bom, obrigada por comparecer na nossa incrivel fabrica!");
}
    







