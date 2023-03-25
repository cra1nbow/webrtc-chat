import {
  connectFirestoreEmulator,
  doc,
  getDoc,
  getFirestore,
  setDoc,
} from 'firebase/firestore';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Custom404 from '../404';

const Join: NextPage = () => {
  const router = useRouter();
  const code = Number.parseInt(router.query.code as string, 10);
  useEffect(() => {
    if (Number.isNaN(code)) return;
    (async () => {
      const db = getFirestore();
      connectFirestoreEmulator(db, 'localhost', 8080);
      const roomRef = doc(db, 'rooms', `${code}`);
      const docSnap = await getDoc(roomRef);
      if (docSnap.exists()) {
      } else {
        const pc = new RTCPeerConnection({
          iceServers: [
            {
              urls: [
                'stun:stun1.l.google.com:19302',
                'stun:stun2.l.google.com:19302',
              ],
            },
          ],
          iceCandidatePoolSize: 10,
        });
        const offerDescription = await pc.createOffer();
        await pc.setLocalDescription(offerDescription);
        await setDoc(roomRef, {
          sdp: offerDescription.sdp,
          type: offerDescription.type,
        });
      }
    })();
  }, [code]);
  return Number.isNaN(code) ? (
    <Custom404 />
  ) : (
    <>
      <Head>
        <title>searching...</title>
      </Head>
    </>
  );
};

export default Join;
