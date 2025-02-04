function randomNum(n1, n2){
    return Math.floor((Math.random())*(n2 - n1 + 1))+n1;
}

randomNumber1 = randomNum(1, 6);
let imgOne = document.getElementsByClassName("img1")[0];
imgOne.setAttribute("src", `./images/dice${randomNumber1}.png`)

randomNumber2 = randomNum(1, 6);
let imgTwo = document.getElementsByClassName("img2")[0];
imgTwo.setAttribute("src", `./images/dice${randomNumber2}.png`)

let newHeading = document.querySelector("h1");

if (randomNumber1 === randomNumber2){
    newHeading.innerHTML = "Draw!";
} else if (randomNumber1 > randomNumber2){
    newHeading.innerHTML = "Player 1 Wins 🚩";
}else {
    newHeading.innerHTML = "Player 2 Wins 🚩";
}