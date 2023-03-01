const camelize = (str) => {
    let arr = str.split('-');
    let final = [];
    if(arr[0] !== '') {
        final.push(arr[0]);
    }
    for(let i = 1; i < arr.length; i++) {
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
      final.push(arr[i]);
    }
    return final.join('')
  }