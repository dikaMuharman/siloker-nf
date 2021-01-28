import Quill from "quill";
import validate from "validate.js";
import { setError, setSuccess } from "../helper";

const deskripsiForm = document.getElementById("deskripsi");
const deskripsi = new Quill(deskripsiForm, {
  placeholder: "deskripsikan perusahaan anda",
  theme: "snow",
});
const mitraForm = document.getElementById("mitraForm");
mitraForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const namaPerusahaan = document.querySelector("input[name=namaPerusahaan");
  const bidangPerusahaan = document.querySelector("select[name=bidang]");
  const kontakPerusahaan = document.querySelector("input[name=kontak]");
  const emailPerusahaan = document.querySelector("input[name=email]");
  const websitePerusahaan = document.querySelector("input[name=websiteResmi");

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

  if (deskripsi.getLength() === 1) {
    setError(deskripsiForm, "Bidang wajib di isi");
  } else {
    setSuccess(deskripsiForm);
    validasiLowongan.push(1);
  }

  if (validate.isEmpty(kontakPerusahaan.value)) {
    setError(kontakPerusahaan, "Bidang wajib di isi");
  } else {
    setSuccess(kontakPerusahaan);
    validasiLowongan.push(1);
  }

  if (validate.isEmpty(emailPerusahaan.value)) {
    setError(emailPerusahaan, "kasih tau juga emailnya apa");
  } else {
    setSuccess(emailPerusahaan);
    validasiLowongan.push(1);
  }

  if (validate.isEmpty(websitePerusahaan.value)) {
    setError(websitePerusahaan, "Bidang wajib di isi");
  } else {
    setSuccess(websitePerusahaan);
    validasiLowongan.push(1);
  }

  if (validasiLowongan.length === 7) {
    window.location.href = "adminmitra.html";
  }
});
