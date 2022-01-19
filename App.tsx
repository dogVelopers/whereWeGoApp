import React from 'react';

import {WebView} from 'react-native-webview';

const App = () => {
  return (
    <WebView
      source={{uri: 'https://www.wherewego.co.kr'}}
      style={{marginTop: 38}}
    />
  );
};
export default App;
