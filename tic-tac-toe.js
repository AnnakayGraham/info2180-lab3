let a=0;
let x;
let game=true;
winner=[]
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
    for(let i of x.children){
        i.onclick=function(){
            if (a%2===0 && i.innerHTML ===""){
                i.innerHTML="X";
                i.classList.add("square","X");
                winner.push(i);
                check();
                a+=1;
            } else if(a%2===1 && i.innerHTML===""){
                i.innerHTML="O";
                i.classList.add("square","O");
                winner.push(i);
                check();
                a+=1;
            }
        }
    }
}

function displaywinner(){
    let p=document.getElementById("status");
    let b=document.getElementById("board");
    if(a%2==0){
        p.innerHTML="Congratulations! X is the winner!";
        p.classList.add("status","you-won");
        for(let i of x.children){
            i.removeAttribute("click");
        }
    } else if(a%2==1){
        p.innerHTML="Congratulations! O is the winner!";
        p.classList.add("status","you-won");
        for(let i of x.children){
            i.removeAttribute("click");
        }

    }
}
function check(){
    let won=false;
    for(let h=0;h<=7;h++){
        const winCondition=winningConditions[h];
        let b=winner[winCondition[0]];
        let c=winner[winCondition[1]];
        let d=winner[winCondition[2]];
        if(b===''||c===''||d===''){
            continue;
        }
        if (b===c&&c===d){
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