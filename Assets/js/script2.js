var URLactual = location.pathname;
var btngoBack = document.getElementById("goback");
var btnClear = document.getElementById("clear");
var list = document.getElementById("todo-list");
//When I click on the Go back button, It Switch to index page
if (URLactual.includes("highscores.html")) {
    btngoBack.addEventListener("click", function () {
        location.assign('./index.html');

    });
};