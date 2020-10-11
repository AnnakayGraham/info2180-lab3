
window.onload = function(){
    const x = document.querySelectorAll("#board div")
    let starter = document.getElementsByClassName("btn");
    starter.addEventListener("click",()=>{
    window.location.reload();
});
};
for(var num = 0; num <x.length; num++){
    x=document.getElementById("board").classList.add("square");
    x.foreach(i=>{
        i.setAttribute("mouse",mouse());
        i.setAttribute("click",click());
    })
}