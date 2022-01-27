module.exports = function check(str, bracketsConfig) {
  // your solution
  let arr = [];
  arr[0] = str[0];
  for (let i = 0; i < bracketsConfig.length; i++) {
    if ((str[0] === bracketsConfig[i][1]) && (str[0] !== bracketsConfig[i][0])) return false;
  }
  for (let i = 1; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (str[i] === bracketsConfig[j][0]) {
        if (str[i] !== bracketsConfig[j][1]) {
          arr.push(str[i]);
        }
        else {
          if (arr.length === 0) {
            arr.push(str[i]);
          }
          else {
            if (bracketsConfig[j][0] === arr[arr.length - 1]) {
              arr.pop();
            }
            else arr.push(str[i]);
          }
        }
      }
      else if (str[i] === bracketsConfig[j][1]) {
        if (arr.length === 0) {
          return false;
        }
        else {
          if (arr[arr.length-1] === bracketsConfig[j][0]) {
            arr.pop();
          }
          else return false;
        }
      }
    }
  }
  if (arr.length === 0) {
    return true;
  }
  else return false;
}
