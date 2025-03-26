function scrollToFirstError() {
  let firstFailedInput = document.querySelector(".q-field--error");
  if (firstFailedInput) {
    firstFailedInput.scrollIntoView({ block: "center", behavior: "smooth" });
  }
}
export {
  scrollToFirstError as s
};
