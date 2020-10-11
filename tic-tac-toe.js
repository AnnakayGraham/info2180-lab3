window.addEventListener('DOMContentLoaded', (event) => {
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
});