// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { renderGallery } from "./js/render-functions";
import { searchImages } from "./js/pixabay-api";

export const refs = {
  searchForm: document.querySelector(".search-form"),
  searchInput: document.querySelector(".request"),
  searchBtn: document.querySelector(".search-button"),
  gallery: document.querySelector(".gallery"),
  loader: document.querySelector(".loader"),
}


refs.loader.style.display = 'none';

refs.searchForm.addEventListener('submit', (e) => {

  e.preventDefault();

  let userValue = e.target.elements.query.value.trim();



  if (!userValue) {
    iziToast.error({
      title: 'Error',
      messageColor: 'white',
      message: 'Input is empty',
      position: 'topRight',
      backgroundColor: '#EF4040',
      theme: "dark",
    });
    return
  }


  refs.loader.style.display = 'inline-block';

  searchImages(userValue).then(res => {
    refs.loader.style.display = 'none';
    const img = res.data.hits;

    if (res.data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        titleColor: 'white',
        messageColor: 'white',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        backgroundColor: '#EF4040',
        iconColor: 'white',
        overlayColor: '#EF4040',
        theme: "dark",
      });
    } else {
      renderGallery(img, refs.gallery);
      e.target.reset();
    }





  }).catch((err) => {
    refs.loader.style.display = 'none';
    iziToast.error({
      title: 'Error',
      titleColor: 'white',
      messageColor: 'white',
      message: `Sorry, unexpected ${err} occured!`,
      position: 'topRight',
      backgroundColor: '#EF4040',
      iconColor: 'white',
      overlayColor: '#EF4040',
      theme: "dark",
    });
  }
  );



}
)




