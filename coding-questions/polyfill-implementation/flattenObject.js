/*
 Utility function to flatten a nested object

 Syntax:
 flattenObject(obj, parentKey, result);
*/

// Implementation
function flattenHelper(obj = {}, parentPath = "", flattenedObj = {}) {
  for (const key in obj) {
    const fullPath = parentPath ? `${parentPath}.${key}` : key;
    const value = obj[key];

    if (Array.isArray(value)) {
      value.forEach((item, index) => {
        const arrayPath = `${fullPath}.${index}`;
        if (typeof item === "object") {
          flattenHelper(item, arrayPath, flattenedObj);
        } else {
          flattenedObj[arrayPath] = item;
        }
      });
    } else if (typeof value === "object" && value !== null) {
      flattenHelper(value, fullPath, flattenedObj);
    } else {
      flattenedObj[fullPath] = value;
    }
  }
}

function flattenObject(obj = {}, prefix = "") {
  const result = {};
  flattenHelper(obj, prefix, result);
  return result;
}

// Test Runner
const testObj = {
  name: "nandha",
  address: {
    city: "randomCity",
    state: "randomState",
    country: "randomCountry",
  },
  hobbies: ["hobbie1", "hobbie2", { sport: ["cricket", "football"] }], // Fixed 'anme' -> 'name'
};
console.log(flattenObject(testObj));
