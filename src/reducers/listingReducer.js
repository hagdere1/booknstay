import listingInitState from '../initState/listing.json';

export default function(state = listingInitState, action) {
  switch(action.type) {
    case "FETCH_LISTINGS_PENDING":
      return Object.assign({}, state, {
        fetching: true
      });

    case "FETCH_LISTINGS_SUCCESS":
      return Object.assign({}, state, {
        listings: [...state.listings, ...action.payload],
        page: state.page + 1,
        fetched: true,
        fetching: false,
        error: false
      });
  }
  return state;
}
