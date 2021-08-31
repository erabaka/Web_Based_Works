const menu = document.querySelector(".menu");
const navOp = document.querySelector(".hamburger");
const navCl = document.querySelector(".close");
const navBar = document.querySelector(".nav"); 

const navLeft = menu.getBoundingClientRect().left;

navOp.addEventListener("click", () => {
    if(navLeft < 0){
        menu.classList.add("show");
        document.body.classList.add("show");
        navBar.classList.add("show");
    }
});

navCl.addEventListener("click", () =>{
    if (navLeft < 0) {
        menu.classList.remove("show");
        document.body.classList.remove("show");
        navBar.classList.remove("show");
    }
});
