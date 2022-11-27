import axios from 'axios';
import React, { useEffect, useId } from 'react';

import { APIRoutes } from '@/lib/constants';

import Layout from '@/components/layout/Layout';

const AxiosPage = () => {
  const id = useId();

  useEffect(() => {
    const controller = new AbortController();

    const fetchAxios = async () => {
      try {
        await axios(APIRoutes.fetch, {
          params: {
            name: 'axios',
            id,
          },
          signal: controller.signal,
        });
        console.log('done axios');
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.name === 'CanceledError') {
            console.log('axios canceled');
          }
        } else {
          console.error(error);
        }
      }
    };

    fetchAxios();

    return () => {
      controller.abort();
    };
  }, [id]);

  return (
    <Layout>
      <div className='text-center'>AxiosPage</div>
    </Layout>
  );
};

export default AxiosPage;
