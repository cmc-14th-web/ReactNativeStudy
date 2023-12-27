import React from 'react';
import {WebView} from 'react-native-webview';
import {create} from 'zustand';

type WebViewRefStore = {
  webViewRef: React.RefObject<WebView>;
};

export const webViewRefStore = create<WebViewRefStore>()(() => ({
  webViewRef: React.createRef<WebView>(),
}));
