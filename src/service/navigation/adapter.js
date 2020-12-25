export const toNavigationItems = (data) => {
  if (data && data.length) {
    return data.map((item) => {
      return toNavigation(item);
    });
  }

  return [];
};

export const toNavigation = (data) => {
  return {
    id: data.id,
    title: data.title,
    url: data.url
  };
};
