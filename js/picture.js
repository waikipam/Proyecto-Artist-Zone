const $pictureTitle = document.querySelector(".picture__title");
const $pictureAuthor = document.querySelector(".picture__author");
const $pictureImg = document.querySelector(".picture__img");

const initialize = async () => {
  const artwork_id = localStorage.getItem("artwork_id");

  const fetching = await fetch(
    "https://api.artic.edu/api/v1/artworks/" + artwork_id
  );
  const res = await fetching.json();
  const data = res.data;
  console.log(data);

  $pictureImg.src = `https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`;
  $pictureTitle.textContent = `Title: ${data.title}`;
  $pictureAuthor.textContent = `Author: ${data.artist_title}`;
};

initialize();
