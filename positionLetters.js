function positionLetters(str) {
  var results = {};
  for(var i = 0; i < str.length; i++) {
    if (str[i].match(/[a-z]/i)) {
      if (results[str[i]] == undefined) {
        results[str[i]] = [];
      }
      results[str[i]].push(i);
    }
  }
  return results;
}

console.log(positionLetters(process.argv.slice(2).join()));