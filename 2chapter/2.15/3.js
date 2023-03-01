const pow = () => {
    let result = x;

    for (let i = 1; i < n; i++) {
    result *= x;
    }

    return result;
}

let x = prompt("Введите x");
let n = prompt("Введите n");

if (n < 1) {
  alert('Используйте натуральное число');
  x = prompt("Введите x");
  n = prompt("Введите n");
} else {
  alert( pow(x, n) );
}