import axios from 'axios';
import { BASE_URL, API_KEY_PARAM } from '../config';

export class TVShowAPI {
  // axios
  static async fetchPopulars() {
    try {
      const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
      console.log(response.data.results);
      return response.data.results;
    } catch (e) {
      console.log(e);
    }
  }

  // fetch
  /*static async fetchPopulars() {
    try {
      const response = await fetch(`${BASE_URL}tv/popular${API_KEY_PARAM}`, {
        method: "GET",
      });

      const results = await response.json();
      console.log(results.results);
      return results.results;
    } catch (e) {
      console.log(e);
    }
  }*/
}
