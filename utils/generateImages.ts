const baseUrl = 'https://image.tmdb.org/t/p/';

export const genBackdropImage = (path: string, size?: string): string => {
  switch (size) {
    case 'sm':
      return `${baseUrl}w300${path}`;
    case 'md':
      return `${baseUrl}w780${path}`;
    case 'lg':
      return `${baseUrl}w1280${path}`;
    default:
      return `${baseUrl}original${path}`;
  }
};

export const genPosterImage = (path: string, size?: string): string => {
  switch (size) {
    case 'sm':
      return `${baseUrl}w342${path}`;
    case 'md':
      return `${baseUrl}w500${path}`;
    case 'lg':
      return `${baseUrl}w780${path}`;
    default:
      return `${baseUrl}original${path}`;
  }
};
