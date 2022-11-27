import axios from 'axios';
import React, { useEffect, useId } from 'react';

import { APIRoutes } from '@/lib/constants';

import Layout from '@/components/layout/Layout';

const AxiosPage = () => {
  const id = useId();

  useEffect(() => {
    const fetchAxios = async () => {
      try {
        await axios(APIRoutes.fetch, {
          params: {
            name: 'axios',
            id,
          },
        });
        console.log('done axios');
      } catch (error) {
        console.error(error);
      }
    };

    fetchAxios();
  }, [id]);

  return (
    <Layout>
      <div className='text-center'>AxiosPage</div>
    </Layout>
  );
};

export default AxiosPage;
