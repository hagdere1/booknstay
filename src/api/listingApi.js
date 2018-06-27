import axios from 'axios';
import {config} from './axiosConfig';

class ListingApi {
  static fetchListings(page, token) {
    return function(dispatch) {
      dispatch({type: "FETCH_LISTINGS_PENDING"});
      axios.get(`/list?page=${page+1}&records=12`, config(token)).then(response => {
        dispatch({
          type: "FETCH_LISTINGS_SUCCESS",
          payload: response.data.data
        });
      })
    }
  }
}

export default ListingApi;
