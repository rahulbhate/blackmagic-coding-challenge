import { handleError, handleResponse } from "./apiUtils";
const baseUrl = process.env.API_URL + "/profile/";
console.log(baseUrl);
export function saveProfile(profile) {
  console.log(profile);
  return fetch(baseUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(profile)
  })
    .then(handleResponse)
    .catch(handleError);
}
