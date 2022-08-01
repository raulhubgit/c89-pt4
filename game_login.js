function addUser(){
    var Player1Name = document.getElementById("player1NameInput").value;
    var Player2Name = document.getElementById("player2NameInput").value;
    localStorage.setItem("Player1Name", Player1Name);
    localStorage.setItem("Player2Name", Player2Name);
    window.location = "game_page.html";
}