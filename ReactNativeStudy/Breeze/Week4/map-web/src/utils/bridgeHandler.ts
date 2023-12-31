import { isMobile, isAndroid, isIOS } from "react-device-detect";

interface Message {
  type: string;
  payload?: any;
}

// RN에서 데이터 받아오기
export const getReactNativeMessage = () => {
  //if (!isMobile) {
  //  console.log("모바일 디바이스임");
  //  return;
  //}

  if (!window.ReactNativeWebView) {
    console.log("ReactNativeWebView가 정의되어 있지 않음");
    return;
  }

  const listener = (event: any) => {
    console.log("드디어 리스너 실행됨!");
    const parsedData = JSON.parse(event.data);
    console.log("RN에서 데이터 도착");
    if (parsedData?.type === "location") {
      console.log("RN에서 도착한 데이터 : ", parsedData?.payload);
    }
  };

  if (window.ReactNativeWebView) {
    console.log("document 실행 되기 전");
    if (isAndroid) {
      console.log("안드로이드 실행");
      document.addEventListener("message", listener);
    }
    if (isIOS) {
      window.addEventListener("message", listener);
    }
  }
};

// RN으로 데이터 전송하기
export const sendReactNativeMessage = ({ type, payload }: Message) => {
  if (window.ReactNativeWebView) {
    window.ReactNativeWebView.postMessage(JSON.stringify({ type, payload }));
  }
};
