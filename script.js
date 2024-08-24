const textareaEl = document.getElementById("textarea");
const totalEl = document.getElementById("total-counter");
const remainEl = document.getElementById("remaining-counter");

if (textareaEl && totalEl && remainEl) {
  textareaEl.addEventListener("input", updateCounter);
  updateCounter();

  function updateCounter() {
    const maxLength = textareaEl.getAttribute("maxLength");
    if (maxLength) {
      const currentValueLength = textareaEl.value.length;
      totalEl.innerText = currentValueLength;
      remainEl.innerText = maxLength - currentValueLength;
    } else {
      totalEl.innerText = textareaEl.value.length;
      remainEl.innerText = "No max length set";
    }
  }
} else {
  console.error("One or more elements not found in the DOM");
}