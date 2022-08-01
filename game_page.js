function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    abc = parseInt(number1) * parseInt(number2);
    console.log(abc);
//1º DIFICULDADE ENCONTRADA 
// FALTOU INSERIR ESSE BLOCO DE CÓDIGO
//DICA: É NECESSÁRIO QUE ELE FIQUE DENTRO DA FUNÇÃO, POIS A FUNÇÃO QUANDO É ACIONADA
//MOSTRA ESSA DIV VAZIA PARA UMA NOVA CONSULTA, POR ISSO ELA NÃO PODE CONSTAR NO HTML
    question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='textbox'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row =  question_number + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
	document.getElementById("number1").value = "";
	document.getElementById("number2").value = "";
}

var player1Score = 0;
var player2Score = 0;

//2ª DIFICULDADE ENCONTRADA
//O Player1Name DENTRO DO getItem ESTAVA COM A LETRA 
//ERRADA O P ESTAVA MINÚSCULO, POIS NO game_login.js ELE ESTÁ MAIÚSCULO
player1Name = localStorage.getItem("Player1Name"); 
player2Name = localStorage.getItem("Player2Name");



//3º DIFICULDADE ENCONTRADA
//ESTE BLOCO NÃO ESTAVA AQUI
document.getElementById("player1Name").innerHTML = player1Name + " : ";
document.getElementById("player2Name").innerHTML = player2Name + " : ";

//4ª DIFICULDADE ENCONTRADA
//ESTE BLOCO NÃO ESTAVA AQUI
document.getElementById("player1Score").innerHTML = player1Score;
document.getElementById("player2Score").innerHTML = player2Score;

//5º DIFICULDADE ENCONTRADA
//ESTE BLOCO NÃO ESTAVA AQUI
document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta - " + player1Name ;
document.getElementById("playerAnswer").innerHTML = "Turno de Resposta - " + player2Name ;


question_turn = "player1";
answer_turn = "player2";

function check()
{
    get_answer = document.getElementById("textbox").value;
    if(get_answer == abc){
        if(answer_turn == "player1"){
            player1Score = player1Score + 1;
            document.getElementById("player1Score").innerHTML = player1Score;
        }
        else{
            player2Score = player2Score + 1;
            //AQUI O player2Score ESTAVA COM O 1 no final
            document.getElementById("player2Score").innerHTML = player2Score;
        }
    }
//6ª DIFICULDADE ENCONTRADA
//AQUI A SITUAÇÃO ERA QUE ESTE BLOCO ABAIXO ESTAVA DENTRO DO IF get_answer
    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("playerQuestion").innerHTML = "turno de pergunta - " + player2Name;
    }
    else{
        question_turn = "player1";
        document.getElementById("playerQuestion").innerHTML = "turno de pergunta - " + player1Name;
    }
//7ª DIFICULDADE ENCONTRADA
//ESTE BLOCO DE CÓDIGO REFERENTE A TROCA DE TURNO NÃO FOI INSERIDO
    if(answer_turn == "player1"){
        answer_turn = "player2"
		document.getElementById("playerAnswer").innerHTML = "Turno de Resposta - " + player2Name ;
	}
	else{
		answer_turn = "player1"
		document.getElementById("playerAnswer").innerHTML = "Turno de Resposta - " + player1Name ;
	}
    document.getElementById("output").innerHTML = "";
}