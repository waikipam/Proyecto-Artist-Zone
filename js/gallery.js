const $content = document.querySelector(".content");
const $loadingApi = document.querySelector(".loadingApi");
let urlArtic = "";

const initialize = async () => {

  const getSearchStorage = localStorage.getItem("search_memory");

  getSearchStorage
  ? urlArtic = "https://api.artic.edu/api/v1/artworks/search?q=" + getSearchStorage
  : urlArtic = "https://api.artic.edu/api/v1/artworks?page=5&limit=5"

  try {
    const fetching = await fetch(urlArtic);
    const res = await fetching.json();
    const data = res.data;

    for (let i = 0; i < data.length; i++) {

      const section = document.createElement("DIV");

      const fetchingImage = await fetch(data[i].api_link);
      const resImage = await fetchingImage.json();
      const dataImage = resImage.data;
      
      section.setAttribute("class", "section");
      section.dataset.id = dataImage.id;
      section.innerHTML = `
        <img src=${`https://www.artic.edu/iiif/2/${dataImage.image_id}/full/843,/0/default.jpg`} alt="image2" />
        <a href="#" class="seeInfo">Click aqui para mas Info.</a>
      `

      $content.append(section);
      $content.style.display = "none";
    }

    $loadingApi.style.display = "none";
    $content.style.display = "grid"

  }

  catch(e) {
    console.log(e);
    $loadingApi.textContent = "Api Error";
  }
}

$content.addEventListener("click", e => {
  if (e.target.classList.contains("seeInfo")) {
    localStorage.setItem("artwork_id", e.target.parentElement.dataset.id);
    window.location.href = "picture.html";
  }
})

initialize();