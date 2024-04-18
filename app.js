const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const secondaryBtn = document.querySelector(".btn btn-secondary")

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("menu-open");
});
menuBtn.addEventListener('click', ()=>{
    menu.classList.toggle("menu-close");
});
window.addEventListener('DOMContentLoaded', function(){
    let displaymenu = menu.map(function(), ClipboardItem)
    console.log(ClipboardItem);
})