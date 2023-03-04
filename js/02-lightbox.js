import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryMarkup = createGalleryItems(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryMarkup);
gallery.addEventListener("click", onClickGallery);

function createGalleryItems() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li>
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

function onClickGallery(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  var lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });
}
