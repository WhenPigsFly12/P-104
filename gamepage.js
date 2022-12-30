// random value generated
var y = Math.floor(Math.random() * 10 + 1);
var guess = 1;
player_name = localStorage.getItem("player_name");

function submit() {
    var x = document.getElementById("guessField").value;
    if(x == y)
    {
        alert("Congratulations!!!" + player_name + "You guessed it right in " + guess + " guesses");
        guess = 1;
    }
    else if(x > y) {
        guess++;
        alert("Incorrect! Try a smaller number!");
    }
    else{
        guess++;
        alert("Incorrect! Try a greater number!");
    }
}

function playAgain() {
    y = Math.floor(Math.random() * 10 + 1);
}
