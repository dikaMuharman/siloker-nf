import data from "../js/data/data";
import Tagify from "@yaireo/tagify";
const InputTag = document.getElementById("inputTag");
new Tagify(InputTag);

// Detail component
import detailComponent from "./Detail";
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

// Component card
const { lowongan } = data;
const gambar = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
const createCard = (id) => {
  const {
    imageId,
    namaPerusahaan,
    namaLowongan,
    tags,
    lokasi,
    date,
  } = lowongan[id];
  const card = `
    <div class="card-job" data-id=${id}>
      <div class="card-job__image">
        <img src=${gambar[imageId - 1]} alt=${namaPerusahaan} />
      </div>
      <div class="card-job__detail">
        <span>${namaPerusahaan}</span>
        <h5>${namaLowongan}</h5>
        <span>${lokasi}</span>
        <div class="card-job__tags">
          <div class="card-job__tag">${tags}</div>
        </div>
        <div class="card-job__date">
          <span>${date}</span>
        </div>
      </div>
    </div>`;
  return card;
};

const listContainer = document.getElementById("job-lists");
let cardComponent = "";
lowongan.forEach((job) => {
  cardComponent += createCard(job.id);
});

listContainer.innerHTML = cardComponent;

const detailJob = document.querySelector(".detail");
const jobLists = document.querySelectorAll(".card-job");

const removeActiveClass = () => {
  jobLists.forEach((jobList) => {
    if (jobList.classList.contains("active")) {
      jobList.classList.remove("active");
    }
  });
};

const modalWrapper = document.getElementById("modalDetail");
const modalDetailContent = document.getElementById("detail-modal");
const modalDetail = new bootstrap.Modal(modalWrapper);

jobLists.forEach((jobList) => {
  jobList.addEventListener("click", (e) => {
    if (window.innerWidth < 992) {
      modalDetailContent.innerHTML = detailComponent(jobList.dataset.id);
      modalDetail.show();
    } else {
      detailJob.innerHTML = detailComponent(jobList.dataset.id);
    }
    removeActiveClass();
    jobList.classList.add("active");
  });

  modalWrapper.addEventListener("hidden.bs.modal", () => {
    jobList.classList.remove("active");
  });
});
