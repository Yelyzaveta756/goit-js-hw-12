import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import axios from "axios";

const KEY = "42660444-3b11bfb6c5a092fcbbd55e52b";
const URL = "https://pixabay.com/api/";

export async function searchImages(currentQuery, currentPage) {
  
  const LINK = `${URL}?key=${KEY}&q=${currentQuery}&image_type=photo&orientation=horizontal&savesearch=true&page=${currentPage}&per_page=15`;

  try {
    const response = await axios.get(LINK);
    return response.data;

  } catch (error) {
    console.error(`Error: ${error}`);
  } 
}



