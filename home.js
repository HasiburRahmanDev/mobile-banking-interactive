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

function displayNone(id) {
  document.getElementById(id).style.display = "none";
}

function displayBlock(id) {
  document.getElementById(id).style.display = "block";
}

//handle toggle function

function handleToggle(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

// Active Button Using function

function activeButton(id) {
  const formBtns = document.getElementsByClassName("form-btn");
  for (const formBtn of formBtns) {
    formBtn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    formBtn.classList.add("border-gray-400");
  }

  document.getElementById(id).classList.remove("border-gray-400");

  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
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

// Pay Bill feature
document.getElementById("pay-bill-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const billName = document.getElementById("pay-bill").value;
  const billerNumber = document.getElementById("biller-account").value;
  const payAmount = getInputValueNumber("pay-amount");
  const addbillpin = getInputValueNumber("add-bill-pin");
  const pin = 1234;
  const availableBalance = getInnerTextNumber("available-balance");

  if (billerNumber.length < 11) {
    alert("please provide valid account number");
    return;
  }
  if (pin !== addbillpin) {
    alert("please provide valid pin number");
    return;
  }

  const newBalance = availableBalance - payAmount;

  setInnerText(newBalance);

  document.getElementById("pay-bill").value = "";
  document.getElementById("biller-account").value = "";
  document.getElementById("pay-amount").value = "";
  document.getElementById("add-bill-pin").value = "";
});

// LogOut feature

document.getElementById("logOut-btn").addEventListener("click", function () {
  window.location.href = "index.html";
});

//   toggling feature

document.getElementById("add-btn").addEventListener("click", function () {
  handleToggle("add-money-parent");
  activeButton("add-btn");
});

document.getElementById("cashout-btn").addEventListener("click", function () {
  handleToggle("cashout-parent");
  activeButton("cashout-btn");
});

document.getElementById("transfer-btn").addEventListener("click", function () {
  handleToggle("transfer-parent");
  activeButton("transfer-btn");
});

document.getElementById("btn-bonus").addEventListener("click", function () {
  // document.getElementById("add-money-parent").style.display = "none";
  handleToggle("bonus-parent");
  activeButton("btn-bonus");
});

document.getElementById("bill-button").addEventListener("click", function () {
  // document.getElementById("add-money-parent").style.display = "none";
  handleToggle("pay-bill-parent");
  activeButton("bill-button");
});

document.getElementById("bill-btn").addEventListener("click", function () {
  // document.getElementById("add-money-parent").style.display = "none";

  activeButton("transaction-btn");
});
