import listingInitState from '../initState/listing.json';

export default function(state = listingInitState, action) {
  switch(action.type) {
    case "FETCH_LISTINGS_SUCCESS":
      return Object.assign({}, state, {
        listings: action.payload,
        fetched: true,
        fetching: false,
        error: false
      });
  }
  return state;
}
