function addOne() {
  let resultDiv = document.getElementsByClassName("flex-container-output")[0];
  let resultNumber = Number(resultDiv.textContent) + 1;
  resultDiv.textContent = resultNumber;
}

function minusOne() {
  let resultDiv = document.getElementsByClassName("flex-container-output")[0];
  let resultNumber = Number(resultDiv.textContent) - 1;
  resultDiv.textContent = resultNumber;
}

function resetZero() {
  document.getElementsByClassName("flex-container-output")[0].textContent = "0";
}