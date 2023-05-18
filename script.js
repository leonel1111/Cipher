// Function to handle file input change
document.getElementById("file-input").addEventListener("change", handleFile);

// Function to handle selected file
function handleFile(e) {
  var file = e.target.files[0];
  var reader = new FileReader();

  reader.onload = function (event) {
    document.getElementById("text").value = event.target.result;
  };

  reader.readAsText(file);
}


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

function showAlert(message) {
  var alertDiv = document.getElementById("alert");
  alertDiv.innerText = message;
  alertDiv.style.display = "block";
}

function hideAlert() {
  var alertDiv = document.getElementById("alert");
  alertDiv.innerText = "";
  alertDiv.style.display = "none";
}

// ...


// Function to download the result as a .txt file
function downloadResult() {
  var result = document.getElementById("result").value;

  var element = document.createElement("a");
  element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(result));
  element.setAttribute("download", "result.txt");
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

