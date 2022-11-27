import React, { useEffect, useId } from 'react';

import { APIRoutes } from '@/lib/constants';

import Layout from '@/components/layout/Layout';

const FetchPage = () => {
  const id = useId();

  useEffect(() => {
    const fetchApi = async () => {
      try {
        await fetch(`${APIRoutes.fetch}?name=fetch&id=${id}`);
        console.log('done fetch');
      } catch (e) {
        const error = e as Error;
        console.error(error);
      }
    };

    fetchApi();
  }, [id]);

  return (
    <Layout>
      <div className='text-center'>FetchPage</div>
    </Layout>
  );
};

export default FetchPage;
