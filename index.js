document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM content loaded");
    let paraText = document.querySelector('#text');
    paraText.textContent = "This is really cool!"
})

console.log("Before DOM content loaded")