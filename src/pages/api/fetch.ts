// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';

const promiseResponse = (name: string, id: string) => new Promise((resolve, reject) => {
  let count = 0;

  const interval = setInterval(() => {
    count += 1;

    // console.log('count', name, id, count);

    if (count === 5) {
      resolve({ name: 'John Doe' });
      clearInterval(interval);
    }
  }, 1000);
});

export default async function hello(req: NextApiRequest, res: NextApiResponse) {
  const reqName = req.query.name as string;
  const reqId = req.query.id as string;

  await promiseResponse(reqName, reqId);

  res.status(200).json({ response: 'success' });
}
