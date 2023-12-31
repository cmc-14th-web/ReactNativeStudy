import {WebView} from 'react-native-webview';

const WebviewContainer = ({handleSetRef, handleEndLoading}: any) => {
  const url = 'localhost:3000';

  /** 웹뷰에서 rn으로 값을 보낼때 거치는 함수 */
  const handleOnMessage = ({nativeEvent: {data}}) => {
    // data에 웹뷰에서 보낸 값이 들어옵니다.
    console.log('handleOnMessage', data);
  };

  return (
    <WebView
      style={{flex: 1}}
      onLoadEnd={handleEndLoading}
      onMessage={handleOnMessage}
      ref={handleSetRef}
      source={{uri: 'https://rn-map-git-main-suminhan123.vercel.app/'}}
      javaScriptEnabled={true}
    />
  );
};
export default WebviewContainer;
