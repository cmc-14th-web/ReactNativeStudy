/// <reference types="react-scripts" />

export {};

declare global {
  interface Window {
    kakao: any;
    ReactNativeWebView: {
      postMessage: (data: string) => void;
    };
  }
}