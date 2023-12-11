import {useEffect, useState} from 'react';
import {YoutubeVideoList} from '../types/YoutubeVideoList';

interface IUseFetchProps {
  url: RequestInfo;
  firstGet: boolean;
}

const useFetchGET = ({url, firstGet}: IUseFetchProps) => {
  const [data, setData] = useState<YoutubeVideoList | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<{message: string} | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        setData(data);
      } else {
        const {message} = await response.json();
        setError({message});
      }
    } catch (e) {
      console.log(e);
      setError({message: 'API 요청에 실패하였습니다.'});
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (firstGet) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return {data, isLoading, error, fetchData};
};

export default useFetchGET;
