

function removerBord() {
    document.getElementById('em').style.outline = 'none';

    
}
var bd = "black";
function altBack(){
    
    if(bd == "black"){
        document.body.style.backgroundColor = "rgb(84, 83, 83)";
        bd = "gray";
    }
    else{
        document.body.style.backgroundColor = "black";
        bd = "black";
    }


}

document.getElementById("luz").addEventListener("click", altBack);

var ball = document.getElementById("ball");

function moveBall(){
    
    if(ball.classList.contains("move_top")){
        ball.classList.remove("move_top");
        ball.classList.add("move_bottom");
        
        
    }
    else{
        ball.classList.remove("move_bottom");
        ball.classList.add("move_top");
        
    }
}

document.getElementById("luz").addEventListener("click", moveBall);

var holo = document.getElementById("holofote");

function altBorder(){
    if(holo.classList.contains("yellowb")){
        holo.classList.remove("yellowb");
    }

    else{
        holo.classList.add("yellowb");
    }
}

document.getElementById("luz").addEventListener("click", altBorder);

var cor = document.getElementById("login");

function altColor(){
    if(cor.classList.contains("yellowdeg")){
        cor.classList.remove("yellowdeg");
        cor.classList.add("back");
    }
    else{
        cor.classList.remove("back");
        cor.classList.add("yellowdeg");
    }
}

document.getElementById("luz").addEventListener("click", altColor);
