let reverseArray = (arr) => {
    let reversed = [];
    for (let i=arr.length-1; i>=0; i--) {
      reversed.push(arr[i]);
    }
    return reversed;
  };
  
  const sentence = ['sense.','make', 'all', 'will', 'This'];
  console.log(reverseArray(sentence)); 