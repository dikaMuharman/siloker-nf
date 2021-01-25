import "bootstrap";
import Quill from "quill";
import Tagify from "@yaireo/tagify";

new Quill("#isiBerita", {
  placeholder: "isi berita",
  theme: "snow",
});

new Quill("#kriteria", {
  placeholder: "deskripsikan kriteria yang anda butuhkan",
  theme: "snow",
});

new Quill("#deskripsi", {
  placeholder: "deskripsikan perusahaan anda",
  theme: "snow",
});

var input = document.querySelector(".customLook"),
  tagify = new Tagify(input),
  button = input.nextElementSibling;

/* 
  Todo : 1. validasi tiap form
  
  */
const kategori = [];
input.addEventListener("change", (e) => {
  kategori.push(e.target.value);
});

button.addEventListener("click", onAddButtonClick);

function onAddButtonClick() {
  tagify.addEmptyTag();
}

const daftarLoker = document.getElementById("daftarloker");

daftarLoker.addEventListener("submit", (e) => {
  e.preventDefault();
  const namaPerusahaan = document.querySelector("input[name=namaPerusahaan]");
  const logoPerusahaan = document.querySelector("input[name=logo]");
  const bidangPerusahaan = document.querySelector("input[name=");

  console.log(namaPerusahaan.value);
});
