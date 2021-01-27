import { setError, setSuccess } from "./helper";
const FormLogin = document.forms["formLogin"];

FormLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("input[name=EmailLogin]");
  const password = document.querySelector("input[name=PasswordLogin]");

  let emailValid = false;
  let passwordValid = false;

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === "dika1254@gmail.com") {
    emailValid = setSuccess(email);
  } else {
    emailValid = setError(email, "email salah");
  }

  if (passwordValue === "123456") {
    passwordValid = setSuccess(password);
  } else {
    passwordValid = setError(password, "password salah");
  }

  if (passwordValid && emailValid) {
    window.location.href = "adminlowongan.html";
  }
});
