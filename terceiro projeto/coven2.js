const prompt = require("prompt-sync")();
//objeto do Player
let player = {}
//objeto do Player - end

//Variáveis importantes
let resposta = "s";
let proAd = ["Varinha Magica", "Selva Falsa", "Busca Por Cristais"]; //usar random
let proAdcomp = ["Varinha Magica", "Selva Falsa", "Busca Por Cristais"]; //usar random
let proKids = ["Bolo Magico", "Boneco Vivo", "Duendes Magicos"]; //usar random
let proKcomp = ["Bolo Magico", "Boneco Vivo", "Duendes Magicos"]; //usar random
let deuses = ["Odin", "Thor", "Dionisio", "Ares", "Isis", "Atena"]//usar random
let bruxos = ["Trouxa", "Bruxo", "Grande Bruxo", "Grande Bruxo e Mago"];
let chapMagic = ["Manhã", "Tarde", "Noite"];
let bruxo = 100; // maximo 200;
let ponto = 0;
//Variaveis importantes - fim
//Engine
function init() {
    //Entrada no coven
    console.clear();
    resposta = prompt("Voce deseja entrar no Coven de Etan? (s) OU (n)")
        console.clear();
    //Entrada no coven - fim

    //Inicio do jogo
    while (resposta === "s") {
        console.log("|------------------------------------------|");
        console.log("|------------------------------------------|");
        console.log("|          BEM VINDO AO COVEN DE ETAN      |");
        console.log(">>>>>>>>>>>>>>>>>>>||>>>>>>>>>>>>>>>>>>>>>>>");
        console.log("       RESPONDA AS PERGUNTAS A BAIXO        ");
        console.log("|------------------------------------------|");

        console.log("TODAS INFORMAÇÕES SERÃO ARMAZENADAS E VOCE ENTRARA EM UMA TURMA!");
        prompt(`\npress ENTER`);
        console.clear();
        player.nome = prompt(`Informe o seu nome: `);
        player.idade = cadastro();
        console.log("");
        console.log(`
	Aluno: 	${player.nome}
	Idade: 	${player.idade}
		`)
        resposta = prompt("Deseja continuar? (s) ou (n)");
        if (resposta === 's') {
            console.clear();
            console.log("Otimo, voce sera direcionado a uma turma!");
            prompt(`press ENTER`);
            console.clear();
            console.clear();
            break

        }else if (resposta == 'n'){
            fimDeJogo();
        }
    }
    //Inicio do jogo - fim
    return player;
}

function motorPrincipal(player) {
    let provas = [];

    if (player.idade > 16 && player.idade < 64) {
        provas = proAd;
        for (i = 3; i != 0; i--) {
            pd = deusesProvas(provas) //função com argumento
			player.prova = pd[0]//provas (random)
			provas.splice(provas.indexOf(player.prova), 1);
			player.divindade = pd[1];//deuses (random)
			player.chapeu = pd[2]
			chapMagic.splice(chapMagic.indexOf(player.chapeu), 1);
			console.clear();
            if(ponto > 0){
                console.log(`voce acertou ${ponto} provas`);
            }
			prompt(`Faltam ${i} dias para o teste final `);
			adoAdul(player);
        }
        tuehNe();
    }

    else if (player.idade < 16) {
		provas = proKids;
		for (i = 3; i != 0; i--) {
			pd = deusesProvas(provas)
			player.prova = pd[0]
			provas.splice(provas.indexOf(player.prova), 1);
			player.divindade = pd[1]
			player.chapeu = pd[2]
			chapMagic.splice(chapMagic.indexOf(player.chapeu), 1);
			console.clear();
            if(ponto > 0){
                console.log(`voce acertou ${ponto} provas`);
            }
			prompt(`Faltam ${i} dias para o teste final `)
			menor(player,provas);
		}
        tuehNe();
	}

    else if (player.idade > 64) {
    veio();
    }

};

function adoAdul(player) {
    console.clear();
    console.log("|------------------------------------------|");
    console.log("|      BEM VINDA(O) A TURMA DE ADULTOS     |");
    console.log("|>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>|");
    console.log("|------------------------------------------|");
    console.log("Em breve voce recebera novas instruções!")

    console.log("Voce esta na sala dos Adolescentes e Adultos");
    console.log();
    console.log(">>>>>>>>>>>>>>>>>>>>>>>||>>>>>>>>>>>>>>>>>>>");
    console.log("|      A baixo mostraremos as provas       |");
    console.log("+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-");
    console.log("| VARINHA MAGICA                           |");
    console.log("+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-");
    console.log("| SELVA FALSA                              |");
    console.log("+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-");
    console.log("| BUSCA POR CRISTAIS                       |");
    console.log(">>>>>>>>>>>>>>>>>>>>>>>||>>>>>>>>>>>>>>>>>>>");
    console.log();
    console.log("Se voce acha que irá escolher a sua prova, esta enganado... Sera pura sorte!!!")

    console.log("Esta na hora... Os Deuses decidiram qual sera a sua prova!");
    console.log(`A sua primeira prova no Coven de Etan será: ${player.prova}, boa sorte!!`);
    console.log();

    console.log();
    console.log(`Alem disso tera a companhia do(a) Deus(a) ${player.divindade} junto a ti nessa prova!`);

	prompt(``)
	console.clear()

    if (player.prova == proAdcomp[0]) {

        console.log("A sua prova sera sobre a execução de varinhas magicas!");
        console.log();

        let vas = prompt("Esta vendo essa vassoura aqui?(s) ou (n)");
        console.clear();
        if (vas == "s") {

            console.log("O seu trabalho sera transformar ela em um cabrito!");

        } else if (vas == "n") {
            nVejo();

            console.log("Agora que consegue ver, vamos prosseguir!");

        }

        console.log("Essa vassoura deve ser transformada em um cabrito, como eu havia dito.");
        console.log("Não é so fica balançando não, olhe os livros da estante! Não temos tempo a perder!");
        console.log(`A(O) ${player.divindade} ficara aqui com voce enquanto eu irei ajudar outras turmas. `);

        console.log("Vejo que acabou... Aquilo ali é o que?");
        let resp = prompt("É o meu cabrito ou ainda é a vassoura?(cabrito) ou (vassoura)");
        console.clear();
        if (resp == "cabrito") {
            console.log("Que otimo! Voce nem viu o tempo passar, voce deve estar exausto destes 3 dias de provas...");
            console.log("Voce passou no teste. Agora esta de ferias!! Que os deuses te acompanhem.");
        } else if (resp == "vassoura") {
            console.log("Vejo que foram dois dias perdidos! Esta de recuperação!");
            console.log("Voce retornara ao Hall do Coven e iniciara seu cadastro novamente, desejo sorte para a proxima prova.");
        }
        if(resp == "cabrito"){
            console.log("Vejo que passou na prova, vamos ter sua pontuação final em breve!!");
            bruxo += 25;
            ponto++;
        }else if(resp == "vassoura"){
            console.log("Vejo que não deu muito certo, sua pontuação sera atualizada;");
            bruxo -= 25;
        }
    } else if (player.prova == proAdcomp[1]) {
        console.log("A sua prova sera a Selva Falsa!!");
        console.log();
        console.log("Esta vendo esse lindo jardim?");
        let jar = prompt("Consegue ver? (s) ou (n)");
        console.clear();
        if (jar == "s") {
            console.log("O seu trabalho é achar uma arvore magica com frutos roxos que parecem ser falsos.");
            console.log();
        } else if (jar == "n") {
            nVejo();
            console.log("Agora que consegue ver, vamos prosseguir!");
        }
        console.log("Bom, eu ja te disse o que precisa fazer, agora é com voce!");
        console.log(`A(o) Deusa(o) ${player.divindade} ira te acompanhar em sua prova!`);
        console.log();
        console.log("Vejo que acabou... Aquilo ali é o que?");
        let resp = prompt("São meus deliciosos frutos roxos?(s) ou (n)");
        console.clear();
        if (resp == "s") {
            console.log("Que otimo! Voce nem viu o tempo passar, voce deve estar exausto destes 3 dias de provas...");
            console.log("Voce passou no teste. Agora esta de ferias!! Que os deuses te acompanhem.");
            console.log();
        } else if (resp == "n") {
            console.log("Vejo que foram dois dias perdidos! Esta de recuperação!");
            console.log("Voce retornara ao Hall do Coven e iniciara seu cadastro novamente, desejo sorte para a proxima prova.");
        }
        if(resp == "s"){
            console.log("Vejo que passou na prova, vamos ter sua pontuação final em breve!!");
            bruxo += 25;
            ponto++;
        }else if(resp == "n"){
            console.log("Vejo que não deu muito certo, sua pontuação sera atualizada;");
            bruxo -= 25;
        }

    } else if (player.prova == proAdcomp[2]) {
        console.log("A sua prova sera a Busca por Cristais");
        console.log();
        console.log("Como pode ver, nosso coven é bem grande... Voce tera que achar um bau com cinco cristais amarelos!");
        console.log("Esta vendo como o Coven é grande?");
        let coven = prompt("Consegue ver? (s) ou (n)");
        console.clear()
        console.log();
        if (coven == "s") {
            console.log("Ache os cinco Cristais amarelo, Desejo sorte a voce!.");
        } else if (coven == "n") {
            nVejo();
            console.log("Agora que consegue ver, vamos prosseguir!");
        }
        console.log("Bom, eu ja te disse o que precisa fazer, agora é com voce!");
        console.log(`A(o) Deusa(o) ${player.divindade} ira te acompanhar em sua prova!`);
        console.log("Vejo que acabou... Aquilo ali é o que?");
        let resp = prompt("Achou os cristais?(s) ou (n)");
        console.clear();
        if (resp == "s") {
            console.log("Que otimo! Voce nem viu o tempo passar, voce deve estar exausto destes 3 dias de provas...");
            console.log("Voce passou no teste. Agora esta de ferias!! Que os deuses te acompanhem.");
        } else if (resp == "n") {
            console.log("Vejo que foram dois dias perdidos! Esta de recuperação!");
            console.log("Voce retornara ao Hall do Coven e iniciara seu cadastro novamente, desejo sorte para a proxima prova.");
        }
        if(resp == "s"){
            console.log("Vejo que passou na prova, vamos ter sua pontuação final em breve!!");
            bruxo += 50;
            ponto++;
        }else if(resp == "n"){
            console.log("Vejo que não deu muito certo, sua pontuação sera atualizada;");
            bruxo -= 50;
        }

    }
}

function menor(player) {
    console.log("|------------------------------------------|");
    console.log("|    BEM VINDA(O) A TURMA DOS PEQUENINOS   |");
    console.log("|>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>|");
    console.log("|------------------------------------------|");
    console.log("Em breve voce recebera novas instruções!");
    
    console.log("Voce esta na sala dos Pequeninos");
    console.log();
    console.log(">>>>>>>>>>>>>>>>>>>>>>>||>>>>>>>>>>>>>>>>>>>");
    console.log("|      A baixo mostraremos as provas       |");
    console.log("+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-");
    console.log("| BOLO MAGICO                              |");
    console.log("+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-");
    console.log("| BONECO VIVO                              |");
    console.log("+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-");
    console.log("| DUENDES MAGICOS                          |");
    console.log(">>>>>>>>>>>>>>>>>>>>>>>||>>>>>>>>>>>>>>>>>>>");
    console.log();
    console.log("Se voce acha que irá escolher a sua prova, esta enganado... Sera pura sorte!!!")

    console.log("Esta na hora... Os Deuses decidiram qual sera a sua prova!");
    console.log(`A sua primeira prova no Coven de Etan será: ${player.prova}, boa sorte!!`);
    console.log();

    console.log();
    console.log(`Alem disso tera a companhia do(a) Deus(a) ${player.divindade} junto a ti nessa prova!`);
    
    prompt(``);
	console.clear();
    if (player.prova == proKcomp[0]) {

        console.log("A sua prova sera a do Bolo Magico!!!");
        console.log();

        let bolo = prompt("Consegue ver o bolo que esta em cima da mesa?(s) ou (n)");
        if (bolo == "s") {
            console.log("O seu trabalho sera descobrir como fazer esse bolo flutuar.")
        } else if (bolo == "n") {
            nVejo();
            console.log("Agora que consegue ver, vamos prossegui!");
        }
        console.log("Voce tera os livros de apoio para te ajudar! Boa sorte!");
        console.log(`Alem do mais, ${player.divindade} ira esta aqui com voce te fazendo companhia pequenino(a)!`);

        console.log("Vejo que ja acabou... Aquilo ali é o que???");
        let resp = prompt("Sera meu lindo bolo flutuando??(s) ou (n)");
        console.clear();
        if (resp == "s") {
            console.log("Otimo criança! Esta de Parabens, boas ferias!!");
            console.log("Voce passou! Fique com os Deuses!!");
        } else if (resp == "n") {
            console.log("Vejo que talvez não esteja madura o suficiente ou sera que es um trouxa?");
            console.log("Bom, voce esta de recuperação. Volte para o cadastro e tente novamente!");         
        }
        if(resp == "s"){
            console.log("Vejo que passou na prova, teremos a sua pontuação em breve")
            bruxo += 25;
            ponto ++;
        }else if(resp == "n"){
            console.log("Parece que não deu muito certo, sua nota sera atualizada");
            bruxo -= 25;
        }
    } else if (player.prova == proKcomp[1]) {
        console.log("A sua prova sera a dos bonecos vivos!");
        console.log("Tera o simples objetivo de fazer esse boneco falar");
        let boneco = prompt("Consegue ver o boneco sentado na cadeira?(s) ou (n)");
        console.clear();
        if (boneco == "s") {
            console.log("Então ta, ja que consegue ve, podemos iniciar!");
        } else if (boneco == "n") {
            nVejo();
            connsole.log("Agora que consegue ver, podemos prosseguir!!");
        }
        console.log("Ja te expliquei o que deve ser feito, agora é com voce, minha criança!");
        console.log(`${player.divindade} estara te fazendo companhia, boa sorte!!`);
        console.log("Vejo que acabou... Aquilo ali é o que??");
        let resp = prompt("É o boneco falando?? (s) ou (n)");
        console.clear();
        if (resp == "s") {
            console.log("Que otimo que cumpriu a prova!! Parabens!");
            console.log("Esta de ferias, fique com os Deuses!");
        } else if (resp == "n") {
            console.log("Eu pensei que voce iria conseguir... Mas me enganei! Voce esta de recuperação!");
        }
        if(resp == "s"){
            console.log("Vejo que passou na prova, vamos ter sua pontuação final em breve!!");
            bruxo += 25;
            ponto++;
        }else if(resp == "n"){
            console.log("Vejo que não deu muito certo, sua pontuação sera atualizada;");
            bruxo -= 25;
        }
    } else if (player.prova == proKcomp[2]) {
        console.log("A sua prova ja foi decidida pelos Deuses! Sera a Duendes Magicos!");
        console.log();
        console.log("Como pode ver nessa sala que estamos, esta repleta de duendes!");
        console.log("Seu trabalho é tentar agrada-los e fazer um amigo novo... É bom ter um por perto!!");
        prompt(`\npress ENTER`);
        console.clear()
        let duende = prompt("Consegue ver os duendes?? (s) ou (n)");
        if (duende == "s") {
            console.log("Ja que consegue ver, não perca tempo e comece!!!");
        } else if (duende == "n") {
            nVejo();
            console.log("Agora que consegue ver, vamos prossegui!");
        }
        console.log("Voce sabe o que fazer, então, boa sorte!!");
        console.log(`${player.divindade} te fara companhia e te ajudará caso tenha algum estressadinho!!`);
        console.log("Vejo que acabou... Sera que tenho boas noticias???");
        let resp = prompt("Conseguiu um Duende?? (s) ou (n)");
        console.clear();
        if (resp == "s") {
            console.log("Nossa, ja estão juntos... Parabens criança!!");
            console.log("Agora voce esta de ferias, ate mais!!");
        } else if (resp == "n") {
            console.log("Pelos Deuses, tantos Duendes e não conseguiu um.... Voce esta de recuperação!!!");
        }
        if(resp == "s"){
            console.log("Vejo que passou na prova, vamos ter sua pontuação final em breve!!");
            bruxo += 50;
            ponto++;
        }else if(resp == "n"){
            console.log("Vejo que não deu muito certo, sua pontuação sera atualizada;");
            bruxo -= 50;
        }
    }
};

function veio() {
    let tentarN;
    console.log("Infelizmente na sua idade não é mais possivel participar. Que os deuses consolem o seu coração!");
    console.log("Mas caso tenha errado, tente novamente");
    tentarN = prompt("Quer tentar novamente? (s) ou (n)");
    if (tentarN == "s" || tentarN == "sim") {
        init();
    } else {
        console.log("Infelizmente ja passou da sua hora...");
    }
    prompt(`press ENTER`);
};

function cadastro() {
    console.log(`Ola ${player.nome}, bem vinda(o) ao nosso coven.\n Tambem precisamos saber a sua idade!`);
    idade = parseInt(prompt("Informe a sua idade:"));
    return idade
};

function nVejo() {
    console.log("Não ve? Bom, então eu que começarei usando a minha varinha...");
    console.log("Pronto, conjurei esse oculos para voce, veja tudo a sua volta!");
};

function deusesProvas(provas) {
    let p = provas[Math.floor(Math.random() * provas.length)];
    let d = deuses[Math.floor(Math.random() * deuses.length)];
	let t = chapMagic[Math.floor(Math.random() * chapMagic.length)]
    return [p, d, t]// retorna os valores de p e d. E p e d são os randons
}

function tuehNe(){
    if(bruxo < 100){
        console.log(`Infelizmente seu local não é aqui... Pois voce é um ${bruxos[0]}`);
        console.log("Caso ache que houve algum engano, volte ao inicio.");
        prompt(`\n[enter]`);
    }else if(bruxo > 100 && bruxo <=125){
        console.log(`Chegamos ao fim, com o resultado de sua classificação! Voce esta no inicio de sua caminhada.`);
        console.log(`Ò seu resultado foi bom, mas voce pode melhorar, voce é um ${bruxos[1]}`);
        prompt(`\n[enter]`);
    }else if(bruxo > 125 && bruxo <= 150){
        console.log(`Voce foi muito bem, sua classificação é: ${bruxos[2]}`);
        prompt(`\n[enter]`);
    }else if(bruxo > 150 && bruxo <= 200){
        console.log(`Voce é um grande bruxo, que honra, sua classificação é: ${bruxos[3]}`);
        prompt(`\n[enter]`);
    }
}

//Resposta negativa
function fimDeJogo() {
    if (resposta == "n") {
        prompt("Ok, tchau!! QUE OS DEUSES TE ACOMPANHEM!");
        process.exit()
    }
}
//Resposta negativa - fim

//start
init()
motorPrincipal(player);

//Engine - fim

//criar funçoes de rotinas de horarios do dia de acordo com a sua prova.
	// ${player.chapeu}



//O aluno tera a oportunidade de tentar passar na prova mais uma vez, caso tenha perdido, e depois sera analizado se ele é bruxo ou não.

//array bruxos;

// se quem acertou a primeira prova, acertar a segunda, sera um grande bruxo. (ultima classificação).
//criar condicionais dentro das provas para ser retornado o valor da prova/resultado das provas.