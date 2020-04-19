function grabParams() {
  let d = document.getElementById("options");
  let i = [];
  for(let x=0;x<d.children.length;x++){
    if(d.children[x].checked !== undefined) {
      i.push(d.children[x].checked);
    }
  } //hex(true,parseInt(grabParams().join("").split("false").join("1").split("true").join("2")));
  return i;
}
function flip(s) {
  let y = [];
  for(let x=s.length;x>-1;x--) {
    y.push(s[x]);
  }
  return y.join("");
}
/*function grabKey(enc) {
  let k;
  let s;
  let p = grabParams();
  if(enc) {
    k = document.getElementById("key").value.toString();
    s = document.getElementById("str").value.toString();
  }else {
    k = document.getElementById("key2").value.toString();
    s = document.getElementById("str2").value.toString();
  }
  if(k.match(/[a-z]/gi) !== null) {
    k = hex(false, k);
  }
  if(p[0]) {
    k = k + flip(k);
  }
  if(p[1]) {

  }else if(p[2]) {

  }
  if(p[9]) {
    s = s.slice(0, Math.round(s.length / 2)) + flip(s.slice(Math.round(s.length / 2)), s.length);
  }
}*/

function encrypt() {
  let p = grabParams();
  let string = document.getElementById("str").value;
  let k = document.getElementById("key").value.toString();
  if(k.match(/[a-z]/gi) !== null) {
    k = hex(false, k);
  }
  let key = k + ((p[0]) ? flip(k) : "");
  let n = [];
  key = key.repeat(Math.ceil(string.length / key.toString().length));
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
  let p = grabParams();
  let string = document.getElementById("str2").value;
  let k = document.getElementById("key2").value.toString();
  if(k.match(/[a-z]/gi) !== null) {
    k = hex(false, k);
  }
  let key = k + ((p[0]) ? flip(k) : "");
  let n = [];
  key = key.repeat(Math.ceil(string.length / key.toString().length));
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
function hex(encode, v) {
  if(encode) {
    return v.toString(16);
  }else {
    return parseInt(v, 16);
  }
}
