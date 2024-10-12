let arr = ["2", 2, "a", 3, 6, true, false, [1, "2", [1, "a", "b", true, false], "a"], false, true];

function dataTypeCounter(arr) {
    
    let countOfNum = 0, countOfStr = 0, countOfBool = 0;
  
    function countTypes(item) {
      if (Array.isArray(item)) {
        item.forEach(countTypes);  
      } else {
        if (typeof item === "number") {
          countOfNum++;
        } else if (typeof item === "string") {
          countOfStr++;
        } else if (typeof item === "boolean") {
          countOfBool++;
        }
      }
    }
  
    countTypes(arr);  
  
    return { countOfNum, countOfStr, countOfBool };
  }
  
  const { countOfNum, countOfStr, countOfBool } = dataTypeCounter(arr);
  
  console.log("Numbers:", countOfNum);
  console.log("Strings:", countOfStr);
  console.log("Booleans:", countOfBool);
  