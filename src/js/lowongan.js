const detailJob = document.getElementById("detailJob");
const jobList = document.getElementById("jobList");

jobList.addEventListener("click", () => {
  if (window.innerWidth < 992) {
    detailJob.classList.toggle("active");
    jobList.classList.toggle("active");
  }
});

const backLink = document.getElementById("backTo");

backLink.addEventListener("click", () => {
  detailJob.classList.toggle("active");
  jobList.classList.toggle("active");
});
