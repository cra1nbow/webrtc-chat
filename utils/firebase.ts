import {
  connectFirestoreEmulator,
  Firestore,
  getFirestore,
} from '@firebase/firestore';
import firebase, { initializeApp } from 'firebase/app';

interface UseFirebase {
  (key?: undefined): 1;
  (key: 'firestore'): 2;
}

const useFirebase: UseFirebase = (key) => {
  // if (!firebase.getApps().length) {
  //   initializeApp({
  //     apiKey: 'AIzaSyBzGl_4ESioAXCRJCVoWzclTS1hmjsrtms',
  //     authDomain: 'webrtc-chatting.firebaseapp.com',
  //     projectId: 'webrtc-chatting',
  //     storageBucket: 'webrtc-chatting.appspot.com',
  //     messagingSenderId: '660829034109',
  //     appId: '1:660829034109:web:3618c166700e65556f8314',
  //     measurementId: 'G-34RM82ZD9Y',
  //   });
  //   const db = getFirestore();
  //   if (process.env.NODE_ENV === 'development') {
  //     connectFirestoreEmulator(db, 'localhost', 8080);
  //   }
  // }

  // if (key === 'firestore') return getFirestore();
  // return firebase.getApp();
  if (key === 'firestore') return 2;
  return 1;
};

export default useFirebase;

type UseFirebase2 = (() => 1) & ((key: 'auth') => 2);

const useFirebase2: UseFirebase2 = (key?: string) => {
  if (key) {
    // const service = firebase[key];
    // return service();
    return 2;
  }
  return 1;
};
