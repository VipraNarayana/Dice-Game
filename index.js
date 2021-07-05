let randomNumber1 = Math.floor(Math.random() * 6) + 1;//1-6

let randomDiceImage = "images/dice" + randomNumber1 + ".png";//randomizing dice img

let image1 = document.querySelectorAll("img")[0];



image1.setAttribute("src" , randomDiceImage);


let randomNumber2 = Math.floor(Math.random() * 6) +1;

let randomDiceImage1 = "images/dice" + randomNumber2 + ".png";

let image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src" , randomDiceImage1);


if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 WINS!";
}else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 WINS!🚩";
}else{
  document.querySelector("h1").innerHTML = "DRAW!! Try Again.";
}
