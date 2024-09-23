const image = document.querySelector("img");
const input = document.querySelector("input");
input.addEventListener("change", () => {
  if (input.files[0]) {
    image.src = URL.createObjectURL(input.files[0]);
  }
});
