let randomnumber1 = Math.floor(Math.random()*6)+1;
let randomdice = "dice" + randomnumber1 + ".png";
let randomimages = "images/"+randomdice;
let image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src", randomimages);


let randomnumber2 = Math.floor(Math.random()*6)+1;
let randomimages2 = "images/dice" + randomnumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomimages2)

if (randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML = " player 1 wins!";
}
else if (randomnumber2 > randomnumber1){
    document.querySelector("h1").innerHTML = "player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML = "draw";
}