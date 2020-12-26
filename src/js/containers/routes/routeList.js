import { lazy } from "react";

const Movies = lazy(() => import("../movies"));
const MovieDetails = lazy(() => import("../movieDetails"));
const AboutUs = lazy(() => import("../aboutUs"));

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
