document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawInputValue = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawInputValue);

    const preWithdrawAmountElement = document.getElementById("withdraw-total");
    const preWithdrawAmountStr = preWithdrawAmountElement.innerText;

    const preWithdrawAmount = parseFloat(preWithdrawAmountStr);

    const newWithdrawTotal = newWithdrawAmount + preWithdrawAmount;

    preWithdrawAmountElement.innerText = newWithdrawTotal;

    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalStr = balanceTotal.innerText;
    const balanceTotalNumber = parseFloat(balanceTotalStr);

    balanceTotal.innerText = balanceTotalNumber - newWithdrawAmount;

    withdrawInput.value = "";
  });
