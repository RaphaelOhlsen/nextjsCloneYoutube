import React from 'react';
import { Button } from '@material-ui/core';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title="Youtube">
      Clone Youtube NextJs and MaterialUI
      <Button variant="outlined" color="secondary">
        Teste
      </Button>
    </Layout>
  );
}
