const styles = ['Джаз', 'Блюз'];


styles.push('Рок-н-ролл')
let index = Math.floor(styles.length / 2);
styles[index] = 'Классика';
console.log(styles)
alert(styles.shift());
styles.unshift('Рэп', 'Регги')

