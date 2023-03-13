function makeCounter() {
    let count = 0;
  
    function counter() {
        return count++
    }
    counter.set = (num) => count = num;

    counter.decrease = () => count--

    return counter
  }
  
  let counter = makeCounter();
  
 