/* eslint-disable @typescript-eslint/no-explicit-any */

interface Window {
  kakao: any;
}

interface Window {
  ReactNativeWebView: {
    postMessage: (message: string) => void;
  };
}
