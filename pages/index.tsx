import type { NextPage } from 'next';
import Head from 'next/head';
import Router from 'next/router';
import { FormEvent, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  font-size: 1.5rem;
`;

const CodeInputText = styled.input`
  padding: 0.25em;
  font-size: inherit;
`;

const SubmitButton = styled.input`
  padding: 0.25em 0.75em;
  font-size: inherit;
  border: none;
  border-radius: 0.25em;
  background-color: lightgray;
  margin-left: 1em;
`;

const Home: NextPage = () => {
  const [code, setCode] = useState('');

  const handleJoin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Router.push(`/join/${code}`);
    setCode('');
  };

  return (
    <Container>
      <Head>
        <title>WebRTC chat</title>
      </Head>
      <form onSubmit={handleJoin}>
        <CodeInputText value={code} onChange={(e) => setCode(e.target.value)} />
        <SubmitButton type='submit' value='join' />
      </form>
    </Container>
  );
};

export default Home;
