import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import {createMarkup} from "./js/render-functions.js"
import {searchImages} from "./js/pixabay-api.js"

const lightbox = new SimpleLightbox('.gallery div ', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(lightbox)

const searchForm = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

searchForm.addEventListener('submit', handleSearch);
loader.style.display = 'none';

function handleSearch(event) {
  event.preventDefault();

  loader.style.display = 'inline-block';

  gallery.innerHTML = '';
  const form = event.currentTarget;
  const QUERY = form.elements.query.value.trim();

  if (QUERY === '') {
    iziToast.show({
      title: 'Error',
      color: 'yellow',
      message: 'Please search for something',
    });
    loader.style.display = 'none';
    return;
  }

  searchImages(QUERY)
  .then(arr => {
    gallery.innerHTML = createMarkup(arr);
    lightbox.refresh();
    form.reset();
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
