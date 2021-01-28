import validate from "validate.js";
import Quill from "quill";
import Tagify from "@yaireo/tagify";
import { setError, setSuccess } from "../helper";

// Init rich text editor
const KriteriaForm = document.getElementById("kriteria");
const kriteriaPekerjaan = new Quill(KriteriaForm, {
  placeholder: "deskripsikan kriteria yang anda butuhkan",
  theme: "snow",
});
// to get value use method .getLength()

// Init tag input
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

// Form
const formLowongan = document.getElementById("daftarloker");
formLowongan.addEventListener("submit", (e) => {
  e.preventDefault();
  const namaPerusahaan = document.querySelector("input[name=namaPerusahaan");
  const bidangPerusahaan = document.querySelector("select[name=bidang]");
  const lowonganDitutup = document.querySelector("input[name=date]");
  const emailPerusahaan = document.querySelector("input[name=emailPerusahaan]");

  const validasiLowongan = [];

  if (validate.isEmpty(namaPerusahaan.value)) {
    setError(namaPerusahaan, "Bidang wajib di isi");
  } else {
    setSuccess(namaPerusahaan);
    validasiLowongan.push(1);
  }

  if (bidangPerusahaan.value === "selected") {
    setError(bidangPerusahaan, "Wajib mencantumkan bidang perusahaan");
  } else {
    setSuccess(bidangPerusahaan);
    validasiLowongan.push(1);
  }

  if (kriteriaPekerjaan.getLength() === 1) {
    setError(KriteriaForm, "Bidang wajib di isi");
  } else {
    setSuccess(KriteriaForm);
    validasiLowongan.push(1);
  }

  if (validate.isEmpty(tagValueInput)) {
    setError(input.parentElement, "Kriteria wajib dong");
  } else {
    setSuccess(input.parentElement);
    validasiLowongan.push(1);
  }

  if (validate.isEmpty(lowonganDitutup.value)) {
    setError(lowonganDitutup, "Di kasih tau dong kapan di tutup lowongnanya");
  } else {
    setSuccess(lowonganDitutup);
    validasiLowongan.push(1);
  }

  if (validate.isEmpty(emailPerusahaan.value)) {
    setError(emailPerusahaan, "kasih tau juga emailnya apa");
  } else {
    setSuccess(emailPerusahaan);
    validasiLowongan.push(1);
  }

  if (validasiLowongan.length === 6) {
    window.location.href = "adminlowongan.html";
  }
});
