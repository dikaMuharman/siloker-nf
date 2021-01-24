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

button.addEventListener("click", onAddButtonClick);

function onAddButtonClick() {
  tagify.addEmptyTag();
}
