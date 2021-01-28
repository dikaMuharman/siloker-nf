const modalComponent = new bootstrap.Modal(
  document.querySelector(".example-modal")
);

const linksDelete = document.querySelectorAll(".link-danger");

linksDelete.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    modalComponent.show();
  });
});
