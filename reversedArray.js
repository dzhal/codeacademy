let reverseArray = (arr) => {
    let reversed = [];
    for (let i=arr.length-1; i>=0; i--) {
      reversed.push(arr[i]);
    }
    return reversed;
  };
  
  const sentence = ['sense.','make', 'all', 'will', 'This'];
  console.log(reverseArray(sentence)); 

  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
  return [...new Set(text.toLowerCase().match(/(\w)(?=.*\1)/g))].length;