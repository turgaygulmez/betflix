import Movies from "../movies";
import MovieDetails from "../movies/details";
import AboutUs from "../aboutUs";

export const routeList = [
  {
    path: "/",
    component: Movies,
    exact: true
  },
  {
    path: "/movies/:id",
    component: MovieDetails,
    exact: true
  },
  {
    path: "/about-us",
    component: AboutUs,
    exact: true
  }
];
