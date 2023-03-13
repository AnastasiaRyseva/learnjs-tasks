function throttle(func, ms) {

    let done = false,
            somedArgs,
            savedThis;
  
    function wrapper() {
  
      if (done) { 
        somedArgs = arguments;
        savedThis = this;
        return;
      }
  
      func.apply(this, arguments); 
  
      done = true;
  
      setTimeout(function() {
        done = false; 
        if (somedArgs) {
          wrapper.apply(savedThis, somedArgs);
          somedArgs = savedThis = null;
        }
      }, ms);
    }
  
    return wrapper;
  }