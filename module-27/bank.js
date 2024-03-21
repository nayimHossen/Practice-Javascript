document.getElementById("btn-deposit").addEventListener("click", function () {
  let inputNumber = document.getElementById("deposit-input");
  const newDepositAmountString = inputNumber.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  let depositTotalElement = document.getElementById("deposit-amount");
  const preDepositTotalString = depositTotalElement.innerText;

  const preDepositTotal = parseFloat(preDepositTotalString);
  console.log(preDepositTotal);

  depositTotalElement.innerText = preDepositTotal + newDepositAmount;

  const balanceElement = document.getElementById("balance");
  const preBalance = parseFloat(balanceElement.innerText);

  const currentBalanceTotal = preBalance + newDepositAmount;
  balanceElement.innerText = currentBalanceTotal;

  inputNumber.value = "";
});
