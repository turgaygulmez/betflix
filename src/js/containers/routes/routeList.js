import Movies from "../movies";
import MovieDetails from "../movieDetails";
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
  },
  {
    path: "/subscribe",
    component: AboutUs,
    exact: true
  }
];
