import "bootstrap";
import "./lowongan";
import Tagify from "@yaireo/tagify";

const InputTag = document.getElementById("inputTag");
new Tagify(InputTag);

const email = document.getElementById("EmailLogin");
const password = document.getElementById("PasswordLogin");
const formLogin = document.getElementById("FormLogin");
const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

formLogin?.addEventListener("submit", (e) => checkLogin(e));

const checkLogin = (e) => {
  if (emailRegex.test(email.value)) {
    console.log("email is valid");
    email.classList.remove("is-invalid");
    email.classList.add("is-valid");

    if (email.value !== "") {
      email.classList.remove("is-invalid");
      email.classList.add("is-valid");
    } else {
      email.classList.add("is-invalid");
      e.preventDefault();
    }
  } else {
    email.classList.remove("is-valid");
    email.classList.add("is-invalid");
    e.preventDefault();
  }

  if (password.value !== "") {
    password.classList.remove("is-invalid");
    password.classList.add("is-valid");
  } else {
    password.classList.add("is-invalid");
    e.preventDefault();
  }
};
