import Config from 'react-native-config';

export const getPlayList = async (maxResults = 25) => {
  const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=${maxResults}&key=${Config.API_KEY}`;

  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
  };
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      console.error('에러!');
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    return data.items;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
};
