document.getElementById("btn-login").addEventListener("click", function (e) {
  e.preventDefault();
  const MobileNumber = 12345678910;
  const pin = 1234;

  const mobileNumberValue = parseInt(
    document.getElementById("mobile-number").value
  );

  const pinNumberValue = parseInt(document.getElementById("input-pin").value);

  if (MobileNumber === mobileNumberValue && pin === pinNumberValue) {
    window.location.href = "./home.html";
  } else {
    alert("invalid credential");
  }
});
