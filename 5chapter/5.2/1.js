const getAndShowNum = () => {
    let num1 = +prompt('Введите первое число', 1);
    let num2 = +prompt('Введите первое число', 2);
    let sum = num1 + num2;

    if(!Number.isInteger(sum)) {
        alert('Сумма чисел - ' + sum.toFixed(1));
        return
    }
    alert('Сумма чисел - ' + sum)
}