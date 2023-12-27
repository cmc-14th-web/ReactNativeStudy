import axios from "axios";

const getAddress = async (latitude: Number, longitude: Number) => {
  try {
    const res = await axios
      .get(
        `https://dapi.kakao.com/v2/local/geo/coord2address.json?input_coord=WGS84&x=${longitude}&y=${latitude}`,
        {
          headers: {
            Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API_KEY}`,  // REST API 키
          },
        },
      )
    const data = res.data;
    return data.documents[0].address.address_name;
  } catch (error) {
    console.log(error);
  }
};

export default getAddress;
