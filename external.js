let score = document.getElementById("score");
let input = document.getElementsByTagName("input");
let para = document.getElementById("para");
let button = document.getElementById("button");
para.style.marginLeft= 'auto';
para.style.marginRight = 'auto';
para.style.fontSize = '20px';
let x = Math.floor(Math.random() * 100);
let n=0;
function game(){
    let a;
    a = parseInt(input[0].value);
    if(n>=10){
        alert("Game Over")
        para.innerHTML = "Better Luck Next time";
        input.value = "";
    }
    else if(a>x && a<=100){
        para.innerHTML = `your number(${a}) is greater`;
        n++;
    }
    else if(a<x && a<=100){
        para.innerHTML = `your number(${a}) is lesser`;
        n++;
    }
    else if(a==x){
        alert(`you won\nyour score is ${10-n}`);
        para.innerHTML = `your score is ${10-n}`;
        x = Math.floor(Math.random() * 100);
        n=0;
    }
    else{
        alert("input is wrong,try again");
    }
}
