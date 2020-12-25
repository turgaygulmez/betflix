import axios from "axios";
import MockAdapter from "axios-mock-adapter";

/**
 * Use axios mock adapter to simulate ajax calls
 */
export default class AxiosService {
  constructor() {
    this.httpClient = axios.create();
    this.mockAdapter = new MockAdapter(this.httpClient);
  }
}
