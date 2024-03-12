import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function createMarkup(arr) {

  return arr.hits
    .map(({largeImageURL, 
      webformatURL, 
      tags, 
      likes, 
      views, 
      comments, 
      downloads}) => 
      `<div class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
          <img 
          class="gallery-image" 
          src="${webformatURL}" 
          alt="${tags}" 
          />
      </a>
      <div class="gallery-info">
          <p class="gallery-info-par">
              <span class="gallery-info-span">Likes: <span class="tag-span">${likes}</span>
              </span>    
          </p>
          <p class="gallery-info-par">
              <span class="gallery-info-span">Views: <span class="tag-span">${views}</span>
              </span>    
          </p>
          <p class="gallery-info-par">
              <span class="gallery-info-span">Comments: <span class="tag-span">${comments}</span>
              </span>    
          </p>
          <p class="gallery-info-par">
              <span class="gallery-info-span">Downloads: <span class="tag-span">${downloads}</span>
              </span>    
          </p>
      </div>
  </div>`
    )
    .join('');
}

export function showEndOfListMessage() {
    iziToast.show({
      title: 'Info',
      color: 'blue',
      timeout: 3000,
      position: 'bottomRight',
      message: "We're sorry, but you've reached the end of search results.",
    });
  }
  
  export function showEmptyInput() {
    iziToast.info({
        timeout: 3000,
        color: 'yellow',
        position: 'bottomRight',
        message: 'Please search for something',
    });
  }
  
  export function noMessage() {
    iziToast.error({
      title: 'Error',
      timeout: 2000,
      position: 'bottomRight',
      message: 'Sorry, there are no images matching your search query. Please try again!',
    });
  }