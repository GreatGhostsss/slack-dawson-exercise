// const prompt = window.prompt("Hey, Slack user 👋! What's your name?");
// const name = document.querySelector('#name');
// name.innerHTML = prompt;

const hoverContent = document.querySelector('#hoverContent');
const cursorExplination = document.querySelector('.cursor-explination');
const visible = document.querySelector(".cursor-explination-visibility");

hoverContent.addEventListener("mouseover", function(){
    cursorExplination.classList.add("cursor-explination-visibility");
});

hoverContent.addEventListener("mouseout", function(){
    cursorExplination.classList.remove("cursor-explination-visibility");
});