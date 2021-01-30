import data from "../js/data/data";
import img8 from "../assets/images/image8.png";
import img10 from "../assets/images/image10.png";
import img9 from "../assets/images/image9.png";
import img4 from "../assets/images/image4.png";
import img2 from "../assets/images/image2.png";

const { mitra } = data;
const gambar = [img8, img10, img9, img4, img2];

const wrapper = mitra.map((dataMitra) => {
  return `
<div class="card my-5">
<div class="card-body d-flex justify-content-center flex-column align-items-center">
    <img src=${gambar[dataMitra.id - 1]} alt=${
    dataMitra.namaPerusahaan
  } class="img-fluid" />
    <h4 class="mt-2">${dataMitra.namaPerusahaan}</h4>
    <p class="text-center w-auto" >
      ${dataMitra.deskripsiPerusahaan}
    </p>
  </div></div>
    `;
});

const container = document.querySelector(".container.wrapper");
container.innerHTML = wrapper.join("");
