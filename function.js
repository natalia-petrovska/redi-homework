function addOne() {
  let nextNumber = getCurrentNumber() + 1;
  setChanges(nextNumber);
}

  function minusOne() {
  let nextNumber = getCurrentNumber() - 1;
  setChanges(nextNumber);
}

function resetZero() {
  setChanges(0);
}

function setChanges(number) {
  setNextNumber(number);
  changeMinusButton(number);
  changePlusButton(number);
  showSpanElement(number);
}

function getCurrentNumber() {
  let divOutput = document.getElementsByClassName("flex-container-output")[0];
  let number = Number(divOutput.textContent);
  return number;
}

function setNextNumber(number) {
  let divOutput = document.getElementsByClassName("flex-container-output")[0];
  divOutput.textContent = number;
}

function changeMinusButton(number) {
  let buttonMinusOne = document.getElementById("button-minus-one");
  if (number > 0) {
    buttonMinusOne.disabled = false;
  } else {
    buttonMinusOne.disabled = true;
  }
}

function changePlusButton(number) {
  let buttonPlusOne = document.getElementById("button-plus-one");
  if (number < 20) {
    buttonPlusOne.style.backgroundColor = "whitesmoke";
    buttonPlusOne.disabled = false;
  } else {
    buttonPlusOne.style.backgroundColor = "red";
    buttonPlusOne.disabled = true;
  }
}

function showSpanElement(number) {
  let divRoot = document.getElementsByClassName("flex-container-root")[0];
  let spanOld = divRoot.getElementsByTagName("span")[0];
  if (spanOld != undefined) {
    divRoot.removeChild(spanOld);
  }
  if (number >= 10) {
    const spanNew = document.createElement("span");
    spanNew.innerText = "You have free shipping";
    if (number >= 20) {
      spanNew.innerText = "Out of stock";
    }
    divRoot.appendChild(spanNew);
  }
}
