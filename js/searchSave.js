const $form = document.getElementById("form");
const $search = document.getElementById("search");

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem("search_memory", $search.value);
  window.location.href = "./galery.html";
});
