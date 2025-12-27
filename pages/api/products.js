export default async function handler(req, res) {
  // API call to AWIN (use your own AWIN token and URL)
  const response = await fetch('https://api.awin.com/publishers/feeds/products', {
    headers: {
      Authorization: `Bearer ${process.env.AWIN_API_TOKEN}`,
    },
  });

  if (!response.ok) {
    return res.status(500).json({ error: 'Failed to fetch data from AWIN' });
  }

  const data = await response.json();
  
  // Just send back the first 5 products for now
  res.status(200).json(data.slice(0, 5));
}
