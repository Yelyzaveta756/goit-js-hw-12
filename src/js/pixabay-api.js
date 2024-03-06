import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const KEY = "42660444-3b11bfb6c5a092fcbbd55e52b";
const URL = "https://pixabay.com/api/";

const loader = document.querySelector('.loader');

export function searchImages(QUERY) {
    const LINK = `${URL}?key=${KEY}&q=${QUERY}&image_type=photo&orientation=horizontal&savesearch=true`;
    
    loader.style.display = 'block';

    return fetch(LINK)
    .then(response => {
        if(!response.ok){
          throw new Error (`Response error ${response.status}`)
        }
        return response.json()
    })
    .then(data => {

      loader.style.display = 'none';
      
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          timeout: 3000,
          position: 'bottomRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      return data;
    })
    .catch (error => 
        console.log(`Error: ${error}`))
    }

