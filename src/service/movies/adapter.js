export const toMovies = (data) => {
  if (data && data.length) {
    return data.map((item) => {
      return toMovie(item, data[item]);
    });
  }

  return [];
};

export const toMovie = (data) => {
  return {
    id: data.id,
    key: data.key,
    name: data.name,
    description: data.description,
    genres: data.genres || [],
    rate: data.rate,
    length: data.length,
    img: data.img
  };
};
