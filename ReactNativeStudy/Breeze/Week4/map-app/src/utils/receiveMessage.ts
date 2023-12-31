import {WebViewMessageEvent} from 'react-native-webview/lib/WebViewTypes';
import {isJsonString} from './isJsonString';

// 웹에서 즐겨 찾기 할 위치 데이터 받기
export const receiveMessage = (e: WebViewMessageEvent) => {
  console.log('데이터 받아오자 제발');
  const data = e.nativeEvent.data;
  console.log('message from web 웹에서 데이터 받기 성공: ', data);

  if (isJsonString(data)) {
    const parsedData = JSON.parse(data);

    if (parsedData?.type === 'liked') {
      const recievedLiked = parsedData?.payload;
      console.log(
        '즐겨찾기 할 위치 위도 경도 값 : ',
        JSON.parse(recievedLiked),
      );

      //const banana = isJsonString(recievedBanana)
      //  ? JSON.parse(recievedBanana)
      //  : null;
      //if (banana) {
      //  setBanana(banana);
      //}
    }

    //if (parsedData?.type === 'removeBanana') {
    //  removeBanana();
    //}
  } else {
    // for string message
  }
};
