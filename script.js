function encrypt() {
  var text = document.getElementById("text").value.toLowerCase();
  var key = parseInt(document.getElementById("key").value) % 26;

  var result = "";

  for (var i = 0; i < text.length; i++) {
    var charCode = text.charCodeAt(i);
    var encryptedCharCode = charCode;

    if (isLetter(charCode)) {
      encryptedCharCode = charCode + key - 1;
      if (encryptedCharCode > 122) { // wrap around if necessary
        encryptedCharCode = encryptedCharCode - 26;
      }
    }

    result += isLetter(encryptedCharCode) ? String.fromCharCode(encryptedCharCode) : text.charAt(i);
  }

  document.getElementById("result").value = result;
}

function decrypt() {
  var text = document.getElementById("text").value.toLowerCase();
  var key = parseInt(document.getElementById("key").value) % 26;

  var result = "";

  for (var i = 0; i < text.length; i++) {
    var charCode = text.charCodeAt(i);
    var decryptedCharCode = charCode;

    if (isLetter(charCode)) {
      decryptedCharCode = charCode - key + 1;
      if (decryptedCharCode < 97) { // wrap around if necessary
        decryptedCharCode = decryptedCharCode + 26;
      }
    }

    result += isLetter(decryptedCharCode) ? String.fromCharCode(decryptedCharCode) : text.charAt(i);
  }

  document.getElementById("result").value = result;
}

function isLetter(charCode) {
  return charCode >= 97 && charCode <= 122; // lowercase letters range
}
