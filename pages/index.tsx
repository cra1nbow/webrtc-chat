import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';

const Home: NextPage = () => {
  const [code, setCode] = useState('');
  return (
    <div>
      <Head>
        <title>WebRTC chat</title>
      </Head>
      <input value={code} onChange={(e) => setCode(e.target.value)} />
    </div>
  );
};

export default Home;
