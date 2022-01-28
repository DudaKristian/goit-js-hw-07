import { galleryItems } from "./gallery-items.js";

const galeryContainerEl = document.querySelector(".gallery");

const makeGalery = makeGaleryList(galleryItems);

function makeGaleryList(array) {
  return array
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
      <a class="gallery__link" href='${original}'>
        <img
          class="gallery__image"
          src='${preview}'
          data-source='${original}'
          alt='${description}'
        />
      </a>
    </div>
      `;
    })
    .join("");
}

function onGaleryItemClick(event) {
  event.preventDefault();
  const instance = basicLightbox.create(`
      <img src=${event.target.dataset.source} width="800" height="600">
  `);

  instance.show();
  galeryContainerEl.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  });
}

galeryContainerEl.insertAdjacentHTML("beforeend", makeGalery);
galeryContainerEl.addEventListener("click", onGaleryItemClick);
