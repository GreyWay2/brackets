module.exports = function check(str, bracketsConfig) {
    var brackets = {};
    for(var i=0; i<bracketsConfig.length; i+=1) {
        brackets[bracketsConfig[i][0]] = bracketsConfig[i][1];
    }
    var stack = [];
    stack.push(str.charAt(0));
    for(var i=1; i<str.length; i+=1) {
      if(str.charAt(i) === brackets[stack.slice(-1)]) {
        stack.pop();
      } 
      else {
        stack.push(str.charAt(i)); 
      }
    }
    return (stack.length===0)?true:false;
  };