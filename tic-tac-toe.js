
let count=0;
let s;
let game=true;
winner=["", "", "", "", "", "", "", "", ""];
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
window.onload= function(){
    let starter=document.getElementsByClassName("btn")[0];
    starter.addEventListener("click", ()=>{
        window.location.reload();
    });
    x=document.getElementById("board");
    for(let i of x.children){
        i.setAttribute("class","square");
        i.setAttribute("mouse",mouse());
        i.setAttribute("click",click());
    };
        
};
mouse=function(){
    let m=document.querySelector("#board");
    m=m.querySelectorAll("div");
    m.forEach(e=>{
        e.addEventListener("mouseover",function(){this.classList.add("hover");});
        e.addEventListener("mouseout",function(){this.classList.remove("hover");});
    });
}
        
function click(){
    var children = Array.prototype.slice.call(x.children)
    for(let [index, i] of children.entries()){
        i.onclick=function(){
            if(game) {
                if (count%2===0 && i.innerHTML ===""){
                    i.innerHTML="X";
                    i.classList.add("square","X");
                    winner[index] = "X";
                    check();
                    count+=1;
                } else if(count%2===1 && i.innerHTML===""){
                    i.innerHTML="O";
                    i.classList.add("square","O");
                    winner[index] = "O";
                    check();
                    count+=1;
                }
            }
        }
    }
}

function displaywinner(){
    let w=document.getElementById("status");
    let y=document.getElementById("board");
    if(count%2==0){
        w.innerHTML="Congratulations! X is the winner!";
        w.classList.add("status","you-won");
        for(let i of x.children){
            i.removeAttribute("click");
        }
    } else if(count%2==1){
        w.innerHTML="Congratulations! O is the winner!";
        w.classList.add("status","you-won");
        for(let i of x.children){
            i.removeAttribute("click");
        }

    }
}
function check(){
    let won=false;
    for(let counter=0;counter<=7;counter++){
        const winCondition=winningConditions[counter];
        let a=winner[winCondition[0]];
        let b=winner[winCondition[1]];
        let c=winner[winCondition[2]];
        if(a===''||b===''||c===''){
            continue;
        }
        if (a===b&&b===c){
            won=true;
            break;
        }
    }
    if(won){
        displaywinner();
        game=false;
        return;
    }

}