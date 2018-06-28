export const config = (token) => {
  let options = {
    baseURL: "https://test-api-2507.esanjo.net/hotels/v1",
    // withCredentials: true,
    headers: {}
  }

  if (token) {
    // options.withCredentials = true;
    options.headers["x-api-token"] = token;
  }

  return options;
}
