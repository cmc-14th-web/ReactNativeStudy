import Config from 'react-native-config';

export const getSearchPlayList = async (
  searchText: string,
  nextPageToken: string,
  maxResults = 5,
) => {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${searchText}&maxResults=${maxResults}&key=${Config.API_KEY}&pageToken=${nextPageToken}`;

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
    return {
      items: data.items,
      nextPageToken: data.nextPageToken,
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
};
