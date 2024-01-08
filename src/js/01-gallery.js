import { galleryItems } from './gallery-items.js';

// Change code below this line

// console.log(galleryItems);

const ulEl = document.querySelector('.gallery');
// const modalEl = document.querySelector('.modal');
// console.log(ulEl);
// console.log(modalEl);

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
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;       
      } else {
        const selectImg = event.target.dataset.source;

        // console.log(selectImg);

        const instance = basicLightbox.create(`
            <div class="modal">
                <img src=${selectImg} width="800" height="600">
            </div>
        `)

        instance.show();
        
      }     
}

// function closeModal(){
            
//     const visible = basicLightbox.visible()
//     if(visible) {
        
//         instance.close();
//     }

// modalEl.addEventListener('keydown',  closeModal);

ulEl.addEventListener('click', handleClickOnImg);

