const label = document.querySelector(".label");
const content = document.querySelector(".content");

// label.addEventListener('click',() => {
//   content.classList.toggle('content');
// });
label.addEventListener("click", () => {
  if (content.classList.contains("hidden")) {
    content.classList.remove("hidden");
  } else {
    content.classList.add("hidden");
  }
});
