import { useState, useEffect } from 'react';
import axiosInstance from './axiosInitializer';

const useFetchData = (query) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get(`/${query}`);
        setData(response.data);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };

    fetchData();

    // Cleanup function to cancel the request or perform other cleanup if needed
    return () => {
      // Cleanup logic
    };
  }, [query]);

  return { data, loading, error };
};

export default useFetchData;
