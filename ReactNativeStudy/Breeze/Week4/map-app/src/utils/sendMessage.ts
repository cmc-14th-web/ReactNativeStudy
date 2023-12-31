import {RefObject} from 'react';
import WebView from 'react-native-webview';

// 현재 위치 웹으로 보내기
export interface Message {
  type: string;
  payload: string | null;
}

export interface SendMessage extends Message {
  webViewRef: RefObject<WebView<{}>>;
}

export const sendMessage = ({webViewRef, type, payload}: SendMessage) => {
  if (webViewRef.current) {
    webViewRef?.current?.postMessage(JSON.stringify({type, payload}));
    console.log('postMessage 실행됨', payload);
  }
};
