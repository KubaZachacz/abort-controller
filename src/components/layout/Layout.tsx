import * as React from 'react';

import ButtonLink from '@/components/links/ButtonLink';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <div className='mx-auto max-w-[800px]'>
      <nav className='my-8 flex justify-center gap-4'>
        <ButtonLink href='/fetch'>Fetch Api</ButtonLink>
        <ButtonLink href='/axios'>Axios</ButtonLink>
        <ButtonLink href='/useQuery'>Use query</ButtonLink>
      </nav>
      {children}
    </div>
  );
}
