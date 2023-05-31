import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');

function createGalleryItems (galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>
        `
    })
    .join('');
};

galleryRef.insertAdjacentHTML("beforeend", createGalleryItems(galleryItems));

let gallery = new SimpleLightbox('.gallery a', {
  overlay: true,
  captionsData: 'alt',
  captionDelay: 250,
});