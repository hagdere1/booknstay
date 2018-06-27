import axios from 'axios';
import {config} from './axiosConfig';

class ListingApi {
  static fetchListings(page, token) {
    return function(dispatch) {
      axios.get("/list?page=" + (page+1) + "&records=10", config(token)).then(response => {
        dispatch({
          type: "FETCH_LISTINGS_SUCCESS",
          payload: response.data.data
        });
      })
    }
  }
}

export default ListingApi;
