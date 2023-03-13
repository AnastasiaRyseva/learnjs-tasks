let mainUl = document.firstElementChild;

let collection = mainUl.querySelectorAll('li');

for(let el of collection) {
    let name = el.firstChild.data 
    let count = el.querySelectorAll('li').length;
    console.log(name.trim() + ': ' + count)
}