alert("Hello");
alert("Welcome to Guessing game");
alert("Let's Start");
x = Math.floor(Math.random() * 100);
let n=0,a;
do{
    a = prompt("guess a number?");
    a = parseInt(a)
    if(a>x && a<=100){alert("your number is greater");}
    else if(a<x && a<=100){alert("your number is lesser");}
    else if(a==x){
        alert("you guessed correct");
        alert("your score is")
        alert(100-n);
    }
    else{
        alert("input is wrong,try again");
    }
    n++;
}while(a!=x)