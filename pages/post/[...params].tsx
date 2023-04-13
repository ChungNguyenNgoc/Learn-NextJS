import { useRouter } from 'next/router';
import React from 'react';

const ParamsPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>ParamsPage</h1>

      <p>Query: {JSON.stringify(router.query)}</p>
    </div>
  );
};

export default ParamsPage;
