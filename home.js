function getInputValueNumber(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  const inputFieldValueNumber = parseInt(inputFieldValue);
  return inputFieldValueNumber;
}

function getInnerTextNumber(id) {
  const element = document.getElementById(id);
  const innerText = element.innerText;
  const innerTextNumber = parseInt(innerText);
  return innerTextNumber;
}

function setInnerText(value) {
  const availableBalanceElement = document.getElementById("available-balance");
  availableBalanceElement.innerText = value;
}

// add money feature
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const bankName = document.getElementById("add-bank").value;
    const accountNumber = document.getElementById("add-account").value;
    const addAmount = getInputValueNumber("add-amount");
    const addPin = getInputValueNumber("add-pin");
    const pin = 1234;
    const availableBalance = getInnerTextNumber("available-balance");

    if (accountNumber.length < 11) {
      alert("please provide valid account number");
      return;
    }
    if (pin !== addPin) {
      alert("please provide valid pin number");
      return;
    }

    const newBalance = availableBalance + addAmount;

    setInnerText(newBalance);

    document.getElementById("add-bank").value = "";
    document.getElementById("add-account").value = "";
    document.getElementById("add-amount").value = "";
    document.getElementById("add-pin").value = "";
  });

//   cashout feature

document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const agentNumber = document.getElementById("agent-number").value;
  const withdrawAmount = getInputValueNumber("withdraw-amount");
  const withdrawPin = getInputValueNumber("withdraw-pin");
  const pin = 1234;
  const availableBalance = getInnerTextNumber("available-balance");

  if (agentNumber.length < 11) {
    alert("please provide valid account number");
    return;
  }
  if (pin !== withdrawPin) {
    alert("please provide valid pin number");
    return;
  }

  const newBalance = availableBalance - withdrawAmount;

  setInnerText(newBalance);

  document.getElementById("agent-number").value = "";
  document.getElementById("withdraw-amount").value = "";
  document.getElementById("withdraw-pin").value = "";
});

// transfer money feature

document.getElementById("send-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const userAccountNumber = document.getElementById("user-number").value;
  const sendAmount = getInputValueNumber("send-amount");
  const transferPin = getInputValueNumber("transfer-pin");
  const pin = 1234;
  const availableBalance = getInnerTextNumber("available-balance");

  if (userAccountNumber.length < 11) {
    alert("please provide valid account number");
    return;
  }
  if (pin !== transferPin) {
    alert("please provide valid pin number");
    return;
  }

  const newBalance = availableBalance - sendAmount;

  setInnerText(newBalance);

  document.getElementById("user-number").value = "";
  document.getElementById("send-amount").value = "";
  document.getElementById("transfer-pin").value = "";
});

// Get Bonus feature

document.getElementById("bonus-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const bonusCoupon1 = 1005;
  const bonusCoupon2 = 1010;
  const getBonusInputValue = getInputValueNumber("bonus-coupon");
  const availableBalance = getInnerTextNumber("available-balance");

  if (getBonusInputValue === bonusCoupon1) {
    setInnerText(availableBalance + 5);
  } else if (getBonusInputValue === bonusCoupon2) {
    setInnerText(availableBalance + 10);
  } else {
    alert("please provide valid coupon number");
  }

  document.getElementById("bonus-coupon").value = "";
});

//   toggling feature

document.getElementById("add-btn").addEventListener("click", function () {
  document.getElementById("cashout-parent").style.display = "none";
  document.getElementById("transfer-parent").style.display = "none";
  document.getElementById("bonus-parent").style.display = "none";
  document.getElementById("add-money-parent").style.display = "block";
});

document.getElementById("cashout-btn").addEventListener("click", function () {
  document.getElementById("add-money-parent").style.display = "none";
  document.getElementById("transfer-parent").style.display = "none";
  document.getElementById("bonus-parent").style.display = "none";
  document.getElementById("cashout-parent").style.display = "block";
});

document.getElementById("transfer-btn").addEventListener("click", function () {
  document.getElementById("add-money-parent").style.display = "none";
  document.getElementById("cashout-parent").style.display = "none";
  document.getElementById("bonus-parent").style.display = "none";
  document.getElementById("transfer-parent").style.display = "block";
});

document.getElementById("btn-bonus").addEventListener("click", function () {
  document.getElementById("add-money-parent").style.display = "none";
  document.getElementById("cashout-parent").style.display = "none";
  document.getElementById("transfer-parent").style.display = "none";
  document.getElementById("bonus-parent").style.display = "block";
});
