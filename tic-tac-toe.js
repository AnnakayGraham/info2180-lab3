
let t=0;
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
    let newG=document.getElementsByClassName("btn")[0];
    newG.addEventListener("click", ()=>{
        window.location.reload();
    });
    s=document.getElementById("board");
    for(let i of s.children){
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
    var children = Array.prototype.slice.call(s.children)
    for(let [index, i] of children.entries()){
        i.onclick=function(){
            if(game) {
                if (t%2===0 && i.innerHTML ===""){
                    i.innerHTML="X";
                    i.classList.add("square","X");
                    winner[index] = "X";
                    check();
                    t+=1;
                } else if(t%2===1 && i.innerHTML===""){
                    i.innerHTML="O";
                    i.classList.add("square","O");
                    winner[index] = "O";
                    check();
                    t+=1;
                }
            }
        }
    }
}

function displaywinner(){
    let p=document.getElementById("status");
    let b=document.getElementById("board");
    if(t%2==0){
        p.innerHTML="Congratulations! X is the winner!";
        p.classList.add("status","you-won");
        for(let i of s.children){
            i.removeAttribute("click");
        }
    } else if(t%2==1){
        p.innerHTML="Congratulations! O is the winner!";
        p.classList.add("status","you-won");
        for(let i of s.children){
            i.removeAttribute("click");
        }

    }
}
function check(){
    let won=false;
    for(let h=0;h<=7;h++){
        const winCondition=winningConditions[h];
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