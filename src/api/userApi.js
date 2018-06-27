import axios from 'axios';
import {config} from './axiosConfig';

class UserApi {
  static fetchAuthToken() {
    return function(dispatch) {
      axios.get("/token", config()).then(response => {
        dispatch({
          type: "FETCH_TOKEN_SUCCESS",
          payload: response.data.token
        });
      })
    }
  }
}

export default UserApi;
