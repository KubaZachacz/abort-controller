import React, { useEffect, useId } from 'react';

import { APIRoutes } from '@/lib/constants';

import Layout from '@/components/layout/Layout';

const FetchPage = () => {
  const id = useId();

  useEffect(() => {
    const controller = new AbortController();

    const fetchApi = async () => {
      try {
        await fetch(`${APIRoutes.fetch}?name=fetch&id=${id}`, {
          signal: controller.signal,
        });
        console.log('done fetch');
      } catch (e) {
        const error = e as Error;

        if (error.name === 'AbortError') {
          console.log('fetch canceled');
        } else {
          console.error(error);
        }
      }
    };

    fetchApi();

    return () => {
      controller.abort();
    };
  }, [id]);

  return (
    <Layout>
      <div className='text-center'>FetchPage</div>
    </Layout>
  );
};

export default FetchPage;
