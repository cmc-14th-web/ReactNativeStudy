import {instance, searchParams} from '.';

const searchVideos = async (keyword: string, pageParam: string) => {
  searchParams.q = keyword;
  searchParams.nextPageToken = pageParam;
  try {
    const response = await instance.get('/search', {
      params: searchParams,
    });

    return response.data.items;
  } catch (error) {
    console.error(error);
  }
};

export default searchVideos;
