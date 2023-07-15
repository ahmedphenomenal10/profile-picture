let background = document.querySelector("div.background"),
menu = document.querySelector("div.menu");

menu.onclick = function(){
    background.classList.toggle("active");
};
