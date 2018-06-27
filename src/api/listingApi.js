import axios from 'axios';
import {config} from './axiosConfig';

class ListingApi {
  static fetchListings(token) {
    return function(dispatch) {
      axios.get("/list", config(token)).then(response => {
        dispatch({
          type: "FETCH_LISTINGS_SUCCESS",
          payload: response.data.data
        });
      })
    }
  }
}

export default ListingApi;
