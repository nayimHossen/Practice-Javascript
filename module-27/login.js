document.getElementById("btn-submit").addEventListener("click", function (e) {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "mail.nayimhossen@gmail.com" && password === "nayim") {
    window.location.href = "bank.html";
  } else {
    alert("Invalid email or password");
  }
});
