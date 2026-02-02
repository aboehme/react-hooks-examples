import {useEffect, useState} from 'react';

export default function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return <div>Data Loaded</div>;
  
  useEffect(() => {
    mockFetch().then((result) => {
        setData(result);
        setLoading(false);
    });
    }, []);
}

function mockFetch() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Fake data from server");
    }, 1500);
  });
}
