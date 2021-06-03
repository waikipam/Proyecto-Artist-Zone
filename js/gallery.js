const $content = document.querySelector(".content");
const $loadingApi = document.querySelector(".loadingApi");

const initialize = async () => {
  const fetching = await fetch(
    "https://api.artic.edu/api/v1/artworks?page=1&limit=5"
  );
  const res = await fetching.json();
  const data = res.data;

  for (let i = 0; i < data.length; i++) {
    const $section = document.createElement("DIV");
    const theImg = new Image(20, 20);
    theImg.src = data[i].thumbnail.lqip;

    $section.innerHTML = `
      <div class="section" data-id=${data[i].id}>
        <img src=${`https://www.artic.edu/iiif/2/${data[i].image_id}/full/843,/0/default.jpg`} alt="image2" />

        <a href="#" class="seeInfo">Click aqui para mas Info.</a>
      </div>`;

    $loadingApi.style.display = "none";
    $content.appendChild($section);
  }
};

$content.addEventListener("click", (e) => {
  if (e.target.classList.contains("seeInfo")) {
    const getID = e.target.parentElement.dataset.id;
    localStorage.setItem("artwork_id", getID);
    window.location.href = "picture.html";
  }
});

initialize();
