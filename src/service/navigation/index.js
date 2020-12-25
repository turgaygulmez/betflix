import AxiosService from "../axiosService";
import { toNavigationItems } from "./adapter";

export default class NavigationService extends AxiosService {
  constructor() {
    super();

    this.mockAdapter.onGet("/navigation").reply(200, [
      {
        id: 1,
        title: "Home",
        url: "/"
      },
      {
        id: 1,
        title: "About",
        url: "/about-us"
      }
    ]);
  }

  get() {
    return this.httpClient
      .get("/navigation")
      .then((response = {}) => toNavigationItems(response.data));
  }
}
