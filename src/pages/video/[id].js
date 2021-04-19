import React from 'react';
import Layout from 'src/components/Layout';
import { useRouter } from 'next/router';
import { Button } from '@material-ui/core';

export default function Video() {
  const router = useRouter();

  return (
    <Layout>
      <span>{router.query.id}</span>
      <Button onClick={() => router.back()}>Voltar</Button>
    </Layout>
  );
}
