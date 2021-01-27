const setError = (element, message) => {
  element.classList.add("is-invalid");
  const parentElement = element.parentElement;
  const feedBack = parentElement.querySelector("small");
  feedBack.classList.add("invalid-feedback");
  feedBack.innerText = message;
  return false;
};

const setSuccess = (element) => {
  element.classList.contains("is-invalid") &&
    element.classList.remove("is-invalid");
  element.classList.add("is-valid");
  return true;
};

export { setError, setSuccess };
