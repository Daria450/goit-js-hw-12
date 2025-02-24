import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


export function galleryTemplate(images) {
  return images
    .map((image) => `<li class="gallery-item">
        <div class="img-container">
  <a class="gallery-link" href=${image.largeImageURL}> 
    <img
      class="gallery-image"
      src=${image.webformatURL}
      data-source=${image.largeImageURL}
      alt=${image.tags}
      height = 200
      width = 360
    />
  </a>
  </div>
  <ul class="img-data">
  <li class ="img-data-item">
    <p class="data-name">Likes</p>
    <p class="data-value">${image.likes}</p> 
  </li>
   <li class ="img-data-item">
    <p class="data-name">Views</p>
    <p class="data-value">${image.views}</p> 
  </li>
  <li class ="img-data-item">
    <p class="data-name">Comments</p>
    <p class="data-value">${image.comments}</p> 
  </li>
  <li class ="img-data-item">
    <p class="data-name">Downloads</p>
    <p class="data-value">${image.downloads}</p> 
  </li>
  </ul>
</li> `)
    .join("");
}

export function renderGallery(images, tagGallery) {
  const markup = galleryTemplate(images);
  tagGallery.innerHTML = markup;
  const refreshPage = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });
  refreshPage.refresh();
}


