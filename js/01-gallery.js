import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
const galeryContainerEl = document.querySelector(".gallery");
galeryContainerEl.insertAdjacentHTML("beforeend", "<div><a><img></a></div>");

const makeGalery = galleryItems.forEach((item) => {
  const galeryItemEl = document.querySelector(".gallery > div");
  galeryItemEl.classList.add("gallery__item");

  const galeryLinkEl = document.querySelector(".gallery__item > a");
  galeryLinkEl.classList.add("gallery__link");
  galeryLinkEl.setAttribute("href", `${item.original}`);

  const galeryImg = document.querySelector(".gallery__link > img");
  galeryImg.classList.add("gallery__image");
  galeryImg.setAttribute("data-source", `${item.original}`);
  galeryImg.setAttribute("alt", `${item.description}`);
  galeryImg.setAttribute("src", `${item.preview}`);
  console.log(galeryContainerEl);
});
