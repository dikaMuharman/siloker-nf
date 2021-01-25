import "bootstrap";

const FormLogin = document.getElementById("formLogin");

FormLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("EmailLogin");
  const password = document.getElementById("PasswordLogin");

  if (email.value === "dika1254@gmail.com" && password.value === "123456") {
    window.location.href = "admin.html";
  }
});
