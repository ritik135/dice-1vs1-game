randomNum1 = Math.floor(Math.random()*6) + 1 ;
randomNum2 = Math.floor(Math.random()*6) + 1 ;

randomImageSource1 = "images/dice" + randomNum1 + ".png" ;
randomImageSource2 = "images/dice" + randomNum2 + ".png" ;

document.querySelectorAll("img")[0].setAttribute("src" , randomImageSource1 ) ;
document.querySelectorAll("img")[1].setAttribute("src" , randomImageSource2 ) ;

if(randomNum1 > randomNum2)
document.querySelector("h1").innerHTML = "player 1 wins" ;
else if(randomNum1 < randomNum2)
document.querySelector("h1").innerHTML = "player 2 wins" ;
else
document.querySelector("h1").innerHTML = "draw" ;
