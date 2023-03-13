// 1
function chess() {
    const limit = 8
    let result = ''
    for (let i = 0; i < limit; i++) {
        for (let j = 0; j < limit; j++) {
            if (i%2!==0) {
                result += j%2===0 ? ' ' : '#' 
            } else {
                result += j%2!==0 ? ' ' : '#'
            }
        }
        result += '\n'   
    }
    return result
}
console.log(chess())

// 2 не совсем поняла использовала google
const fromPairs = (array) => {
    array.forEach((element) => {
      if (Array.isArray(element)) {
        const [key, value] = element;
        return { [key]: value };
      }
    });
  };
  const data3 = [
    ["a", 1],
    ["b", 2],
  ];
  console.log(fromPairs(data3));
  