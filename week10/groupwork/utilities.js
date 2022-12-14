export async function getJSON(url) {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText)
      } else {
        return response.json()
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

export const getLocation = function(options) {
  return new Promise(function(success, error) {
    navigator.geolocation.getCurrentPosition(success, error, options);
  });
};