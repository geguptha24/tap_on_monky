const closedface = document.querySelector(".closed");
const openFace = document.querySelector(".open");

closedface.addEventListener("click",() => {
    if(openFace.classList.contains("open")){
        openFace.classList.add("active");
        closedface.classList.remove("active");
    }
})

openFace.addEventListener("click",() => {
    if(closedface.classList.contains("closed")){
        closedface.classList.add("active");
        openFace.classList.remove("active");
    }
})

