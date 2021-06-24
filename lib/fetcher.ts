const headers = {
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
  'Content-Type': 'application/json;charset=utf-8',
};

const fetcher = async (url: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}${url}`, {
    headers,
  });

  return res.json();
};

export default fetcher;

export const paginatedFetcher = async (url: string, page = 1) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}${url}?page=${page}`,
    {
      headers,
    }
  );

  return res.json();
};

export const searchFetcher = async (url: string, page = 1) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}${url}&page=${page}`,
    {
      headers,
    }
  );

  return res.json();
};
