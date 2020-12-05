import axios from "axios";

export const getFlightsPerMonth = () => {
  const apiUrl = "https://uaa.azurewebsites.net/api/airlines";
  axios.get(apiUrl).then((total) => {
    const allRepos = total.data;
    return allRepos;
  });
}