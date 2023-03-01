const filterRangeInPlace = (arr, a, b) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 2 || arr[i] > 5) {
            arr.splice(i, 1);
            i--
          }
      }
}