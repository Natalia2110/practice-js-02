import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const ulEl = document.querySelector('.gallery');

const createLiEl = galleryItems.reduce((murkup, { description, original, preview }) => 
  murkup + 
        `<li class="gallery__item">
            <a class="gallery__link" href=${original}>
                <img class="gallery__image" 
                    src=${preview} 
                    alt="${description}"
                >
            </a>
        </li>`, "");

ulEl.insertAdjacentHTML('afterbegin', createLiEl);




function handleClickOnImg(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;       
      } else {

        const lightboxGallery = new SimpleLightbox('.gallery a', { 
            captionsData: 'alt',
            captionPosition:'bottom',
            captionDelay: 250, });
        
      }     
}

ulEl.addEventListener('click', handleClickOnImg);
