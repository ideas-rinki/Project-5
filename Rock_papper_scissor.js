let userscore=0;
let compscore=0;
let move=document.querySelector(".move");
const uscore=document.querySelector("#user-scored");
const cscore=document.querySelector("#cscore");
const genComputer=()=>{
    let option=["Rock","papper","scissor"];
    let index=Math.floor(Math.random()*3);
    return option[index];
}
const showWinner=(userwin,user,computer)=>{
    if(userwin){
        console.log("you win !!!!!");
        userscore++;
        uscore.innerText=userscore;
        move.innerText=`You win!! your ${user} beats ${computer}`;
        move.style.background="green";
    }else{
        console.log("computer win!!!!");
        compscore++;
        cscore.innerText=compscore;
        move.innerText=`You lost! computer's ${computer} beats your's ${user}`;
        move.style.background="Red";
    }
  };

const playgame=(user)=>{
    console.log("you choosen",user);
    //genrate computer choice
    const computer=genComputer();
    console.log("computer choosen",computer);
    if(user===computer){
        console.log("game draw");
        move.innerText="Game Draw .Try again.";
    }else{
        let userwin=true;
        if(user==="Rock"){
            userwin=computer==="papper" ? false:true;
        }else if(user ==="papper"){
            userwin=computer==="scissor"?false:true;
        }else{vvvvvvvv
            userwin=computer==="Rock"?false:true;
        }
        showWinner(userwin,user,computer);
        }
        
    }


let choices=document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        console.log("it has clicked");
        let user =choice.getAttribute("id");
        console.log(user);
        playgame(user);
    });
});