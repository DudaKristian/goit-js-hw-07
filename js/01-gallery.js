import { galleryItems } from "./gallery-items.js";

// Change code below this line

// console.log(galleryItems);
const galeryContainerEl = document.querySelector(".gallery");

const makeGalery = makeGaleryList(galleryItems);
galeryContainerEl.insertAdjacentHTML("beforeend", makeGalery);
// galeryContainerEl.addEventListener("click", onGaleryItemClick);

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

// function onGaleryItemClick(event) {
//   event.preventDefault();
//   const instance = basicLightbox.create(`
//       <img src="assets/images/image.png" width="800" height="600">
//   `);
//   instance.show();
// }
