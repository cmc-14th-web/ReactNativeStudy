import {YOUTUBE_API_KEY} from '@env';
import baseAxios from './baseAxios';

const getMoreInformation = async (moreInformations: string) => {
  const response = await baseAxios.get(
    `videos?part=snippet&part=statistics&key=${YOUTUBE_API_KEY}&id=${moreInformations}`,
  );
  return response.data;
};

export default getMoreInformation;
