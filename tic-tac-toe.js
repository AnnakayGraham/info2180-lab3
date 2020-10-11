
window.onload = function(){
   
    let starter = document.getElementsByClassName("btn");
    starter.addEventListener("click",()=>{
    window.location.reload();
    });
    const x = document.getElementById("board")
    for(var num = 0; num <x.length; num++){
        x.foreach(i=>{
            i.setAttribute("class","square")
            i.setAttribute("mouse",mouse());
            i.setAttribute("click",click());
        })
    }   

};