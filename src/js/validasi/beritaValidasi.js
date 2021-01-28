import Quill from "quill";
import Tagify from "@yaireo/tagify";
import validate from "validate.js";
import { setError, setSuccess } from "../helper";

const wysiwygForm = document.getElementById("isiBerita");
const isiBerita = new Quill(wysiwygForm, {
  placeholder: "isi berita",
  theme: "snow",
});

let input = document.querySelector(".customLook"),
  tagify = new Tagify(input),
  button = input.nextElementSibling;

button.addEventListener("click", onAddButtonClick);

function onAddButtonClick() {
  tagify.addEmptyTag();
}

// Get value from tag input
let tagValueInput;

input.addEventListener("change", (e) => (tagValueInput = e.target.value));

const formBerita = document.getElementById("formBerita");
formBerita.addEventListener("submit", (e) => {
  e.preventDefault();
  const judulBerita = document.querySelector("input[name=judul");
  const situsBerita = document.querySelector("input[name=situsBerita]");
  const urlBerita = document.querySelector("input[name=url]");

  const validasiLowongan = [];

  if (validate.isEmpty(judulBerita.value)) {
    setError(judulBerita, "Bidang wajib di isi");
  } else {
    setSuccess(judulBerita);
    validasiLowongan.push(1);
  }

  if (isiBerita.getLength() === 1) {
    setError(wysiwygForm, "Bidang wajib di isi");
  } else {
    setSuccess(wysiwygForm);
    validasiLowongan.push(1);
  }

  if (validate.isEmpty(tagValueInput)) {
    setError(input.parentElement, "Kriteria wajib dong");
  } else {
    setSuccess(input.parentElement);
    validasiLowongan.push(1);
  }

  if (validate.isEmpty(situsBerita.value)) {
    setError(situsBerita, "Bidang wajib di isi");
  } else {
    setSuccess(situsBerita);
    validasiLowongan.push(1);
  }

  if (validate.isEmpty(urlBerita.value)) {
    setError(urlBerita, "Bidang wajib di isi");
  } else {
    setSuccess(urlBerita);
    validasiLowongan.push(1);
  }

  if (validasiLowongan.length === 5) {
    window.location.href = "adminberita.html";
  }
});
