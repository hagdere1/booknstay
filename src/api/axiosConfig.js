export const config = (token) => {
  let options = {
    baseURL: "https://cors-anywhere.herokuapp.com/https://test-api-2507.esanjo.net/hotels/v1",
    // withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  }

  if (token) {
    // options.withCredentials = true;
    options.headers["x-api-token"] = token;
  }

  return options;
}
