module.exports = function check(str, bracketsConfig) {
  var mas = [];
  for(var i = 0; i<str.length; i++)
    if(findin(str[i], bracketsConfig, 0) == -1 ){
        if(bracketsConfig[findin(str[i],bracketsConfig,1)][0] !=  mas.pop())
          return false;
      }
    else
      if(bracketsConfig[findin(str[i], bracketsConfig, 0)] == bracketsConfig[findin(str[i], bracketsConfig, 1)] && mas[mas.length - 1] == bracketsConfig[findin(str[i], bracketsConfig, 0)][0])
        mas.pop();
      else
        mas.push(str[i]);
  if(mas.length == 0)
    return true;
    return false;
}

function findin(s, bracckets, n){
  for(var j = 0; j <bracckets.length; j++)
    if(bracckets[j][n] == s)
      return j;
  return -1;
}
