import Quill from "quill";
import Tagify from "@yaireo/tagify";

new Quill("#isiBerita", {
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
