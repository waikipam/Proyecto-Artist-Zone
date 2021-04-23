const $i_bars = document.querySelector(".i__bars");
const $nav = document.querySelector(".nav");
const $headerRight = document.querySelector(".iw_header__right");

$i_bars.addEventListener("click", () => {
  const getStyle_nav = getComputedStyle($nav).display;
  const getStyle_headerRight = getComputedStyle($headerRight).display;

  if (getStyle_headerRight === "none" && getStyle_nav === "none") {
    $headerRight.style.display = "flex";
    $nav.style.display = "block";
    return;
  }

  $headerRight.style.display = "none";
  $nav.style.display = "none";
});

window.addEventListener("resize", () => {
  const getUserWidth = window.innerWidth;

  if (getUserWidth <= 800) {
    $headerRight.style.display = "none";
    $nav.style.display = "none";
    return;
  }

  $headerRight.style.display = "flex";
  $nav.style.display = "block";
});
