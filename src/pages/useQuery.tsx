import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useId } from 'react';

import { APIRoutes } from '@/lib/constants';

import Layout from '@/components/layout/Layout';

const UseQueryPage = () => {
  const id = useId();

  useQuery({
    queryKey: ['fetch'],
    queryFn: async () =>
      axios(APIRoutes.fetch, {
        params: {
          name: 'query',
          id,
        },
      }),
    onSuccess: () => console.log('done useQuery'),
    onError: (error) => {
      console.log('error', error);
    },
  });

  return (
    <Layout>
      <div className='text-center'>UseQueryPage</div>
    </Layout>
  );
};

export default UseQueryPage;
