import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import {createMarkup} from "./js/render-functions.js"
import {searchImages} from "./js/pixabay-api.js"

const lightbox = new SimpleLightbox('.gallery div ', {
  captionsData: 'alt',
  captionDelay: 250,
  alertError: false,
});

const searchForm = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-btn');

searchForm.addEventListener('submit', handleSearch);
loader.style.display = 'none';
loadMoreBtn.style.display = 'none'

let currentPage;
let currentQuery;
let totalHits;

async function handleSearch(event) {
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
    loadMoreBtn.style.display = 'none'
    return;
  }

  searchImages(QUERY, 15, 1)
  .then(arr => {
    totalHits = arr.totalHits;
    gallery.innerHTML = createMarkup(arr);
    currentQuery = QUERY;
    currentPage = 1;
    loader.style.display = 'none';
    loadMoreBtn.style.display = 'block'
    lightbox.refresh();
    form.reset()
  })
  .catch(error => {
    console.error('Error:', error);
  })
}

loadMoreBtn.addEventListener('click', event => {
  loader.style.display = 'inline-block';
  currentPage += 1;
  searchImages(currentQuery, 15, currentPage)
  .then(data => {
    gallery.innerHTML += createMarkup(data);
      lightbox.refresh();
      loader.style.display = 'none';
      if (currentPage * 15 >= totalHits) {
        loadMoreBtn.style.display = 'none'; 
        iziToast.info({
          title: 'Info',
          timeout: 3000,
          position: 'bottomRight',
          message: "We're sorry, but you've reached the end of search results.",
        });
      }
  })
  .catch(error => alert(error.message))
})
