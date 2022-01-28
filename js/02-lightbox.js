import { galleryItems } from "./gallery-items.js";

const galeryListEl = document.querySelector(".gallery");
console.log(galeryListEl);
const makeGalery = makeGaleryList(galleryItems);

function makeGaleryList(array) {
  return array
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href='${original}'>
        <img
          class="gallery__image"
          src='${preview}'
          alt='${description}'
        />
      </a>
    `;
    })
    .join("");
}

galeryListEl.insertAdjacentHTML("beforeend", makeGalery);
galeryListEl.addEventListener("click", (event) => {
  event.preventDefault();
  let lightbox = new SimpleLightbox(".gallery a", {
    captionsData: `alt`,
    captionDelay: 250,
  });
});
