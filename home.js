document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const bankName = document.getElementById("add-bank").value;
    const accountNumber = document.getElementById("add-account").value;
    const addAmount = parseInt(document.getElementById("add-amount").value);
    const addPin = parseInt(document.getElementById("add-pin").value);
    const pin = 1234;
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    if (accountNumber.length < 11) {
      alert("please provide valid account number");
      return;
    }
    if (pin !== addPin) {
      alert("please provide valid pin number");
      return;
    }

    const newBalance = availableBalance + addAmount;

    document.getElementById("available-balance").innerText = newBalance;

    document.getElementById("add-bank").value = "";
    document.getElementById("add-account").value = "";
    document.getElementById("add-amount").value = "";
    document.getElementById("add-pin").value = "";
  });

//   cashout feature

document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const agentNumber = document.getElementById("agent-number").value;
  const withdrawAmount = parseInt(
    document.getElementById("withdraw-amount").value
  );
  const withdrawPin = parseInt(document.getElementById("withdraw-pin").value);
  const pin = 1234;
  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );

  if (agentNumber.length < 11) {
    alert("please provide valid account number");
    return;
  }
  if (pin !== withdrawPin) {
    alert("please provide valid pin number");
    return;
  }

  const newBalance = availableBalance - withdrawAmount;

  document.getElementById("available-balance").innerText = newBalance;

  document.getElementById("agent-number").value = "";
  document.getElementById("withdraw-amount").value = "";
  document.getElementById("withdraw-pin").value = "";
});

//   toggling feature

document.getElementById("add-btn").addEventListener("click", function () {
  document.getElementById("cashout-parent").style.display = "none";
  document.getElementById("add-money-parent").style.display = "block";
});

document.getElementById("cashout-btn").addEventListener("click", function () {
  document.getElementById("add-money-parent").style.display = "none";
  document.getElementById("cashout-parent").style.display = "block";
});
