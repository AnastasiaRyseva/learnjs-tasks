function debounce(f, ms) {

    let done = false;
  
    return function() {
      if (done) return;
  
      f.apply(this, arguments);
  
      done = true;
  
      setTimeout(() => done = false, ms);
    };
  
  }