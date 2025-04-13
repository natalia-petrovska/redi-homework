function addOne() {
  let divResult = document.getElementsByClassName("flex-container-output")[0];
  let buttonMinusOne = document.getElementById("button-minus-one");
  let currentNumber = Number(divResult.textContent);
  if (currentNumber > 0) {
    buttonMinusOne.disabled = false;
  }
  let divRoot = document.getElementsByClassName("flex-container-root")[0];
  let spanFreeShipping = divRoot.getElementsByTagName("span")[0];
  if (currentNumber >= 9) {
    if (spanFreeShipping == undefined) {
      const spanFreeShipping = document.createElement("span");
      spanFreeShipping.innerText = "You have free shipping";
      divRoot.appendChild(spanFreeShipping);
    }
  }
  if (currentNumber >= 19) {
    let buttonPlusOne = document.getElementById("button-plus-one");
    buttonPlusOne.style.backgroundColor = "red";
    buttonPlusOne.disabled = true;
    spanFreeShipping.innerText = "Out of stock";
  }
  divResult.textContent = currentNumber + 1;
}

function minusOne() {
  let divResult = document.getElementsByClassName("flex-container-output")[0];
  let buttonMinusOne = document.getElementById("button-minus-one");
  let currentNumber = Number(divResult.textContent);
  if (currentNumber <= 0) {
    buttonMinusOne.disabled = true;
  } else {
    let divRoot = document.getElementsByClassName("flex-container-root")[0];
    let spanFreeShipping = divRoot.getElementsByTagName("span")[0];
    if (currentNumber < 11) {
      if (spanFreeShipping != undefined) {
        divRoot.removeChild(spanFreeShipping);
      }
    }
    if (currentNumber < 21) {
      let buttonPlusOne = document.getElementById("button-plus-one");
      buttonPlusOne.style.backgroundColor = "whitesmoke";
      buttonPlusOne.disabled = false;
      spanFreeShipping.innerText = "You have free shipping";
    }
    divResult.textContent = currentNumber - 1;
  }
}

function resetZero() {
  document.getElementsByClassName("flex-container-output")[0].textContent = "0";
}