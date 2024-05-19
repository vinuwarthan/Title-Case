"use strict";

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

document.querySelector(".clickClass").addEventListener("click", function () {
  const inputData = document.querySelector(".inputTextArea").value;
  document.querySelector(".outPutTextArea").textContent =
    toTitleCase(inputData);
});

document.querySelector(".clearClass").addEventListener("click", function () {
  document.querySelector(".inputTextArea").value ="";
  document.querySelector(".outPutTextArea").textContent ="";
});


document.querySelector(".copyTextArea").onclick = function(){
  document.querySelector(".outPutTextArea").select();
  document.execCommand('copy');
}
