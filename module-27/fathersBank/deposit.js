document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositInput = document.getElementById("deposit-input");
    const depositInputValue = depositInput.value;
    const newDepositAmount = parseFloat(depositInputValue);

    const preDepositAmountElement = document.getElementById("deposit-total");
    const preDepositAmountStr = preDepositAmountElement.innerText;

    const preDepositAmount = parseFloat(preDepositAmountStr);

    const newDepositTotal = newDepositAmount + preDepositAmount;

    preDepositAmountElement.innerText = newDepositTotal;

    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalStr = balanceTotal.innerText;
    const balanceTotalNumber = parseFloat(balanceTotalStr);

    balanceTotal.innerText = balanceTotalNumber + newDepositAmount;

    depositInput.value = "";
  });
