let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

// const printList = (list) => {
//     let copy = list
//     while(copy) {
//         console.log(copy.value)
//         copy = copy.next
//         console.log(copy)
//     }
// }
const printList = (list) => {
    console.log(list.value)
    
    if(list.next) {
        return printList(list.next)
    }
}

printList(list)