// function printNumbers(from, to) {
//     let i = from;
    
//     setTimeout(function show() {
//         alert(i);
//         if(i < to) {
//             setTimeout(show, 1000)
//         }
//         i++;
//     }, 1000);
   
// };

// printNumbers(1, 3)

function printNumbers(from, to) {
    let i = from;

    let timerId = setInterval(() => {
        alert(i);
        if(i == to) {
            clearInterval(timerId);
        }
        i++;
    }, 1000);
}

printNumbers(1, 3)