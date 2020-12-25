import Movies from "./movies/";
import Navigation from "./navigation";

/**
 * Create a singelton service instance to be able to use
 * across different actions
 */
class Service {
  constructor() {
    if (!Service.instance) {
      this.movies = new Movies();
      this.navigation = new Navigation();
      Service.instance = this;
    }

    return Service.instance;
  }
}

const instance = new Service();
Object.freeze(instance);
export default instance;
