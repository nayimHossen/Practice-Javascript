document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawInput = document.getElementById("withdraw-input");
  const newWithdrawNumber = parseFloat(withdrawInput.value);

  const preWithdraw = document.getElementById("withdraw-amount");
  const preWithdrawNumber = parseFloat(preWithdraw.innerText);

  const newTotalWithdraw = newWithdrawNumber + preWithdrawNumber;
  preWithdraw.innerText = newTotalWithdraw;

  const balanceElement = document.getElementById("balance");
  const preBalance = parseFloat(balanceElement.innerText);

  const currentBalanceTotal = preBalance - newTotalWithdraw;
  balanceElement.innerText = currentBalanceTotal;

  withdrawInput.value = "";
});
