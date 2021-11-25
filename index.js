var randomNumber1 =Math.floor(Math.random() * 6 + 1);
var randomNumber2 =Math.floor(Math.random() * 6 + 1);
console.log(randomNumber1);

var randomdiceimage1 = "images/dice" + randomNumber1 + ".png";
var randomdiceimage2 = "images/dice" + randomNumber2 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomdiceimage1);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomdiceimage2);


if (randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 Wins";
}else if (randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else
{
    document.querySelector("h1").innerHTML="Tie";
}
// if (randomNumber1 == 1)
// {
//     document.querySelector("img").setAttribute("src","images/dice1.png")
// }
// else if (randomNumber1 == 2)
// {
//     document.querySelector("img").setAttribute("src","images/dice2.png")
// }
// else if (randomNumber1 == 3)
// {
//     document.querySelector("img").setAttribute("src","images/dice3.png")
// }
// else if (randomNumber1 == 4)
// {
//     document.querySelector("img").setAttribute("src","images/dice4.png")
// }
// else if (randomNumber1 == 5)
// {
//     document.querySelector("img").setAttribute("src","images/dice5.png")
// }else if (randomNumber1 == 6)
// {
//     document.querySelector("img").setAttribute("src","images/dice6.png")
// }

