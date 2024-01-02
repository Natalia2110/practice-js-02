import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const ulEl = document.querySelector('.gallery');
console.log(ulEl);

const createLiEl = galleryItems.reduce((murkup, { description, original, preview }) => 
  murkup + 
        `<li class="gallery__item">
            <a class="gallery__link" href=${original}>
                <img
                    class="gallery__image"
                    src=${preview}
                    data-source=${original}
                    alt="${description}"
                />
            </a>
        </li>`, "");

ulEl.insertAdjacentHTML('afterbegin', createLiEl);

function handleClickOnImg(event) {
    if (event.target.nodeName !== "IMG") {
        return;
      }
}

ulEl.addEventListener('click', handleClickOnImg);

