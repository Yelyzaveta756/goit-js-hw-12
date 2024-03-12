import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { createMarkup, showEndOfListMessage, showEmptyInput, noMessage } from './js/render-functions.js';
import { searchImages } from './js/pixabay-api.js';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-btn');

let currentQuery;
let currentPage;

form.addEventListener('submit', onSubmit);
loadMoreBtn.addEventListener('click', onLoadMore);

async function onSubmit(event) {
  currentPage = 1;
  event.preventDefault();
  gallery.innerHTML = '';
  currentQuery = form.elements.query.value.trim();
  loadMoreBtn.style.display = 'block';

  if (currentQuery === '') {
    showEmptyInput();
    gallery.innerHTML = '';
    loadMoreBtn.style.display = 'none';
    form.reset();
    return;
  }
  loader.style.display = 'block';

  try {
    const images = await searchImages(currentQuery, currentPage).then(data => {
      const markup = createMarkup(data);
      if (data.hits.length === 0) {
        noMessage();
        loadMoreBtn.style.display = 'none';
        loader.style.display = 'none';
        return;
      }
      gallery.insertAdjacentHTML('beforeend', markup);
      lightbox.refresh();
      loader.style.display = 'none';
    });
  } catch (error) {
    console.error('Error:', error);
  }
  form.reset();
}

async function onLoadMore() {
  currentPage += 1;
  try {
    const images = await searchImages(currentQuery, currentPage).then(data => {
      const markup = createMarkup(data);
      gallery.insertAdjacentHTML('beforeend', markup);
      lightbox.refresh();

      const cardHeight = gallery.getBoundingClientRect().height;
      window.scrollBy({
        top: 2 * cardHeight,
        behavior: 'smooth',
      });

      if (data.hits.length <= 14) {
        loadMoreBtn.style.display = 'none';
        showEndOfListMessage();
        lightbox.refresh();
      }
    });
  } catch (error) {
    console.error('Error:', error);
  }
}