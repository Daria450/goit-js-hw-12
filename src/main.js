// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { renderGallery } from "./js/render-functions";
import { searchImages } from "./js/pixabay-api";

const refs = {
  searchForm: document.querySelector(".search-form"),
  searchInput: document.querySelector(".request"),
  searchBtn: document.querySelector(".search-button"),
  gallery: document.querySelector(".gallery"),
  loader: document.querySelector(".loader"),
  loadBtn: document.querySelector(".load"),
  noResults: document.querySelector(".no-results")
}
const refreshPage = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

refs.loader.style.display = 'none';
refs.loadBtn.style.display = 'none';
refs.noResults.style.display = 'none';

const queryParams = {
  query: '',
  page: 1,
  total: 40,
}

refs.searchForm.addEventListener('submit', async (e) => {

  e.preventDefault();
  queryParams.query = e.target.elements.query.value.trim();
  queryParams.page = 1;



  if (!queryParams.query) {
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



  try {
    const res = await searchImages(queryParams.query, queryParams.page);
    const img = res.data.hits;
    refs.loader.style.display = 'none';
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
      const markup = renderGallery(img);
      refs.gallery.innerHTML = markup;
      refreshPage.refresh();
      refs.loadBtn.style.display = 'block';

      queryParams.total = res.data.total;
      checkBtnStatus()
    }
  } catch (err) {
    refs.loader.style.display = 'none';
    iziToast.error({
      title: 'Error',
      titleColor: 'white',
      messageColor: 'white',
      message: `Sorry, unexpected error:${err} occured!`,
      position: 'topRight',
      backgroundColor: '#EF4040',
      iconColor: 'white',
      overlayColor: '#EF4040',
      theme: "dark",
    });
  }
  e.target.reset();
}
)


refs.loadBtn.addEventListener('click', loadMore);

async function loadMore() {
  refs.loader.style.display = 'block';
  refs.loadBtn.style.display = "none";
  queryParams.page += 1;

  try {
    const res = await searchImages(queryParams.query, queryParams.page);

    const img = res.data.hits;
    refs.loader.style.display = 'none';
    const markup = renderGallery(img);
    refs.gallery.insertAdjacentHTML("beforeend", markup);
    refreshPage.refresh();

    queryParams.total = res.data.total;
    checkBtnStatus();

  } catch (err) {
    refs.loader.style.display = 'none';
    iziToast.error({
      title: 'Error',
      titleColor: 'white',
      messageColor: 'white',
      message: `Sorry, unexpected error:${err} occured!`,
      position: 'topRight',
      backgroundColor: '#EF4040',
      iconColor: 'white',
      overlayColor: '#EF4040',
      theme: "dark",
    });
  }
}

function checkBtnStatus() {
  const perPage = 40;
  const maxPage = Math.ceil(queryParams.total / perPage);

  if (queryParams.page >= maxPage) {
    refs.loadBtn.style.display = "none";
    refs.noResults.style.display = 'block';
  }
  else {
    refs.loadBtn.style.display = "block";
  }
  // scrollDown();
}

function scrollDown() {
  const card = document.querySelector('.gallery li');
  const cardHeight = card.getBoundingClientRect().height;
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  })

}