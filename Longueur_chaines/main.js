
let phrase = prompt("Entre votre phrase");
// let phrase = "entre votre phrase";
console.log(phrase.length);
function longuer(phrase) {
  return phrase.length;
}



function firstLeter( str) {
    let r = str[0].toUpperCase();
    let arr = str.split('');
    arr.splice(0,1,r);
    let text = arr.join("");
    return text;
}

function deleteLast( str) {
    return str.slice(0, -1)
}

alert(longuer(phrase));
alert(firstLeter(phrase));
alert(deleteLast(phrase));