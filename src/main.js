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
loadMoreBtn.style.display = 'none';
loader.style.display = 'none';

let currentPage;
let currentQuery;
let totalHits;

async function handleSearch(event) {
  event.preventDefault();
  loader.style.display = 'block';

  gallery.innerHTML = '';

  const form = event.currentTarget;
  const QUERY = form.elements.query.value.trim();

  if (QUERY === '') {
    iziToast.show({
      title: 'Error',
      color: 'yellow',
      message: 'Please search for something',
    });
    loadMoreBtn.style.display = 'none';
    loader.style.display = 'none';
    return;
  }

  searchImages(QUERY, 15, 1)
  .then(arr => {
    totalHits = arr.totalHits;
    gallery.innerHTML = createMarkup(arr);
    currentQuery = QUERY;
    currentPage = 1;
    loadMoreBtn.style.display = 'none';
    loader.style.display = 'none';
    lightbox.refresh();
    form.reset()
  })
  .catch(error => {
    console.error('Error:', error);
  })
}

loadMoreBtn.addEventListener('click', async (event) => {
  loader.style.display = 'block';
  currentPage += 1;

  try {
    const data = await searchImages(currentQuery, 15, currentPage);

    if (currentPage * 15 < totalHits) {
      gallery.innerHTML += createMarkup(data);
      lightbox.refresh();
      loader.style.display = 'none';
      loadMoreBtn.style.display = 'none';
      smoothScrollToGallery();
    } else {
      iziToast.show({
        title: 'Info',
        timeout: 2000,
        color: 'blue',
        position: 'bottomRight',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (error) {
    console.error('Error:', error);
    alert(error.message);
  } finally {
    loadMoreBtn.style.display = 'none'
  }
});


window.onscroll = function () {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    loadMoreBtn.style.display = 'block';
    loader.style.display = "block"

    
  } else {
    loadMoreBtn.style.display = 'none';
    loader.style.display = "none"
  }
};

function smoothScrollToGallery() {
  const cards = document.querySelector('.gallery-item');
  
  if (cards.length > 0) {
      const cardHeight = cards[0].getBoundingClientRect().height;
      window.scrollBy({ 
        top: cardHeight * 2, 
        behavior: 'smooth' 
      });
  }
}


