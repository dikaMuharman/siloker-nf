import data from "./data/data";
// Image component
import img8 from "../assets/images/image8.png";
import img10 from "../assets/images/image10.png";
import img9 from "../assets/images/image9.png";
import img5 from "../assets/images/image5.png";
import img4 from "../assets/images/image4.png";
import img7 from "../assets/images/image7.png";
import img6 from "../assets/images/image6.png";
import img2 from "../assets/images/image2.png";
import img1 from "../assets/images/image1.png";
import img3 from "../assets/images/image3.png";

const listComponent = (kriteria) =>
  kriteria.map((krite) => `<li>${krite}</li>`).join("");

const { lowongan } = data;
const gambar = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const detailComponent = (id) => {
  const {
    imageId,
    namaPerusahaan,
    namaLowongan,
    lokasi,
    date,
    email,
    kriteria,
  } = lowongan[id];
  const detailSection = `
            <div class="detail__image">
            <img src=${gambar[imageId - 1]} alt=${namaPerusahaan} />
            </div>
        <div class="detail__description">
            <h2>${namaLowongan}</h2>
        <div class="detail__location">
            <span>${namaPerusahaan}</span>
            <span>${lokasi}</span>
            <span>${date}</span>
        </div>
        <ul>
            ${listComponent(kriteria)}
        </ul>

        <span class="detail__email">tertarik ? kirimkan cv serta surat lamaran melalui email
            <a href="#">${email}</a>
        </span>

        </div>
    `;
  return detailSection;
};

export default detailComponent;
