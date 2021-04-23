const $carousel = document.querySelector(".carousel");

$carousel.addEventListener("click", (e) => {
  if (e.target.classList.contains("d-block")) {
    if (e.target.dataset.id === "1") {
      window.location.href = "picture1.html";
    } else if (e.target.dataset.id === "2") {
      window.location.href = "picture2.html";
    } else if (e.target.dataset.id === "3") {
      window.location.href = "picture3.html";
    }
  }
});
