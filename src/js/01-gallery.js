// Imports library
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Get div gallery element
const divGalleryRef = document.querySelector('.gallery');

// Creating gallery elements (div>a>img)
const makeGalleryItem = itemsArray => {
  return itemsArray.map(({ description, original, preview }) => {
    const galleryLink = document.createElement('a');
    galleryLink.classList.add('gallery__item');
    galleryLink.href = original;

    const galleryimage = document.createElement('img');
    galleryimage.classList.add('gallery__image');
    galleryimage.src = preview;
    galleryimage.alt = description;

    galleryLink.append(galleryimage);

    return galleryLink;
  });
};

const elementsGallery = makeGalleryItem(galleryItems);
divGalleryRef.append(...elementsGallery);

// Initializing the gallery with image description parameters
new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
