const fetcher = async (url: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}${url}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  return res.json();
};

export default fetcher;
