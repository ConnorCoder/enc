function encrypt() {
  let string = document.getElementById("str").value;
  let key = document.getElementById("key").value;
  let n = [];
  key = key.toString().repeat(Math.ceil(string.length / key.toString().length));
  for(let x=0;x<string.length;x++) {
    let code = string[x].charCodeAt();
    if(code > 31 && code < 127) {
      code += parseInt(key[x]);
      if(code > 126) {
        code -= 95;
      }
      n.push(String.fromCharCode(code));
    }else {
      console.log("Error: charCode( " + string[x] + " ) is not between 32 and 126: > || < " + code);
      n.push(" ");
    }
  }
  document.getElementById("opE").value = n.join("");
}
function decrypt() {
  let string = document.getElementById("str2").value;
  let key = document.getElementById("key2").value;
  let n = [];
  key = key.toString().repeat(Math.ceil(string.length / key.toString().length));
  for(let x=0;x<string.length;x++) {
    let code = string[x].charCodeAt();
    if(code > 31 && code < 127) {
      code -= parseInt(key[x]);
      if(code < 32) {
        code += 95;
      }
      n.push(String.fromCharCode(code));
    }else {
      console.log("Error: charCode( " + string[x] + " ) is not between 32 and 126: > || < " + code);
      n.push(" ");
    }
  }
  document.getElementById("opD").value = n.join("");
}
