let btn = document.getElementById('hider');
let text = document.getElementById('text');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    text.style.display = 'none'
})