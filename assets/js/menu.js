document.addEventListener("DOMContentLoaded",(event)=>{
    let button=document.querySelector(".layout__hamburguesa");
    let aside=document.querySelector(".layout__aside");
    let bars=document.querySelector(".fa-bars");
    let x=document.querySelector(".fa-x");
    button.addEventListener("click",(event)=>{
        let visible=document.querySelector(".layout__hamburguesa--visible");
        if(!visible){
            console.log("Hola");
            aside.classList.remove("layout__hamburguesa--oculto");
            aside.classList.add("layout__hamburguesa--visible");
            bars.style.opacity=0;
            x.style.opacity=1;
        }else{
            aside.classList.remove("layout__hamburguesa--visible");
            aside.classList.add("layout__hamburguesa--oculto");
            bars.style.opacity=1;
            x.style.opacity=0;

        }
    })
});