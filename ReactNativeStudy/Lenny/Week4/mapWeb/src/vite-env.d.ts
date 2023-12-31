/// <reference types="vite/client" />
interface Window {
  ReactNativeWebView: {
    postMessage: (data: string) => void;
  };
}
