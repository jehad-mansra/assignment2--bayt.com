function uniqueCharacters(str) {
  const charCount = {};

  for (let char of str) {
    if (charCount[char]) {
      return false; // Return false if character is already in the object
    }
    charCount[char] = 1; // Set character count to 1
  }

  return true; // Return true if no repeated characters are found
}

console.log(uniqueCharacters("ahmad")); // Output: false (repeated character 'a')
console.log(uniqueCharacters("jehad")); // Output: true (all characters are unique)

//  This approach has a time complexity of O(n),
//  where n is the length of the input string,
//   making it more efficient than the nested loops

//*********************************************************************************************** */

function contains(obj, targetValue) {
    // Iterate through each property in the object
    for (let key in obj) {
      // Check if the current property's value matches the target value
      if (obj[key] === targetValue) {
        return true; // Return true if match found
      }
  
      // Check if the current property's value is an object and not null
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        // Recursively call the contains function on the nested object
        // If a match is found within the nested object, return true
        if (contains(obj[key], targetValue)) {
          return true;
        }
      }
    }
  
    // If no match is found, return false
    return false;
  }
  
  // Example usage
  const nestedObject = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        f: 4,
        z:{
            q:7,
            w:9
        }
      }
    }
  };
  
  console.log(contains(nestedObject, 9)); // Output: true
  console.log(contains(nestedObject, 5)); // Output: false
  