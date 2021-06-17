const fetcher = async (url: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}${url}`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      'Content-Type': 'application/json;charset=utf-8',
    },
  });

  return res.json();
};

export default fetcher;
