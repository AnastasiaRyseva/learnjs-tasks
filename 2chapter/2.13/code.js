let i = 0;
while (++i < 5) alert( i );
// 1, 2, 3, 4
while (i++ < 5) alert( i );
// 0 ,1, 2, 3, 4


for (let i = 0; i < 5; i++) alert( i );
//0, 1, 2, 3, 4
for (let i = 0; i < 5; ++i) alert( i );
//0, 1, 2, 3, 4 

for(let i = 2; i <= 10; i++) {
    if(i % 2) {
        alert(i)
    }
}

//Замените for на while
while(i < 3) {
    alert( `number ${i}!` );
    i++
}

//Повторять цикл, пока ввод неверен
let num = prompt('число больше 100?');
while(num < 100 && num) {
    num = prompt('число больше 100?');
}

//Вывести простые числа
const primeNums = (n) => {
    const primeArray = [];
    newNum:
    for(let i = 2; i <= n; i++) {
        for(let j = 2; j < i; j++) {
            if(i % j === 0) {
                continue newNum
            }
        }
        primeArray.push(i)
    }
    primeArray.map(num =>alert(num))
}
primeNums(10)