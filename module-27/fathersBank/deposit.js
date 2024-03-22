document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositInputValue = document.getElementById("deposit-input").value;
    const newDepositAmount = parseFloat(depositInputValue);

    const preDepositAmountElement = document.getElementById("deposit-total");
    const preDepositAmountStr = preDepositAmountElement.innerText;

    const preDepositAmount = parseFloat(preDepositAmountStr);

    const newDepositTotal = newDepositAmount + preDepositAmount;

    preDepositAmountElement.innerText = newDepositTotal;
  });
