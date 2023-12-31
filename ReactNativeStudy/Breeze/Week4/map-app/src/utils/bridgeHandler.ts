import {RefObject} from 'react';
//import {Platform} from 'react-native';
import WebView from 'react-native-webview';
import {
  //WebViewMessageEvent,
  WebViewNavigationEvent,
} from 'react-native-webview/lib/WebViewTypes';
//import {isJsonString} from './isJsonString';
import {sendMessage} from './sendMessage';

//import {isBanana, setBanana, getBanana, removeBanana} from './banana';

//const isIos = Platform.OS === 'ios';
//const isAndroid = Platform.OS === 'android';

// 앱에서 웹으로 데이터 보내기
const sendLocation = async (webViewRef: RefObject<WebView<{}>>) => {
  const sendMessageData = {
    webViewRef,
    type: 'location',
    payload: JSON.stringify({
      latitude: 37.5408,
      longitude: 127.0701,
    }),
  };

  sendMessage(sendMessageData); // 웹으로 전달
  console.log('웹으로 전달 된건가..?');
};

export const handleLoadStart = () => console.log('웹뷰로드 되기 시작');

//export const handleLoadProgressCurried =
//  (webViewRef: RefObject<WebView<{}>>) => (e: WebViewProgressEvent) => {
//    console.log('webview progress');
//    const progress = e.nativeEvent.progress;
//    if (progress === 1) {
//      isIos && sendBanana(webViewRef);
//    }
//  };

export const handleLoadCurried =
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (webViewRef: RefObject<WebView<{}>>) => (e: WebViewNavigationEvent) => {
    console.log('웹뷰 로드 중...이제 데이터 웹으로 보낼거임');
    sendLocation(webViewRef);
  };

// 웹에서 앱으로 데이터 받기
//export const handleReceiveMessage = (e: WebViewMessageEvent) => {
//  const data = e.nativeEvent.data;
//  console.log('웹 에서 도착한 데이터', data);

//  if (isJsonString(data)) {
//    const parsedData = JSON.parse(data);

//    if (parsedData?.type === 'liked') {
//      const recievedBanana = parsedData?.payload;
//      const banana = isJsonString(recievedBanana)
//        ? JSON.parse(recievedBanana)
//        : null;
//      if (isBanana(banana)) {
//        setBanana(banana);
//      }
//    }

//    if (parsedData?.type === 'removeBanana') {
//      removeBanana();
//    }
//  } else {
//    // for string message
//  }
//};
