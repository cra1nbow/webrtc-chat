import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import GlobalStyle from '../components/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const app = initializeApp({
      apiKey: 'AIzaSyBzGl_4ESioAXCRJCVoWzclTS1hmjsrtms',
      authDomain: 'webrtc-chatting.firebaseapp.com',
      projectId: 'webrtc-chatting',
      storageBucket: 'webrtc-chatting.appspot.com',
      messagingSenderId: '660829034109',
      appId: '1:660829034109:web:3618c166700e65556f8314',
      measurementId: 'G-34RM82ZD9Y',
    });
    getAnalytics(app);
  }, []);
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
