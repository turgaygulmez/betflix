import AxiosService from "../axiosService";
import dataJSON from "./data.json";
import { toMovies } from "./adapter";

export default class MovieService extends AxiosService {
  constructor() {
    super();

    this.mockAdapter.onGet("/movies").reply(200, dataJSON);
  }

  get() {
    return this.httpClient
      .get("/movies")
      .then((response) => toMovies(response.data));
  }
}
