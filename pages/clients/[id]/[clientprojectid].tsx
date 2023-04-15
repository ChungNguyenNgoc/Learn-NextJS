import { useRouter } from 'next/router';
import React from 'react';

const SelectedClientProjectPage = () => {
  const router = useRouter();

  console.debug('query: ', router.query);

  return <div>SelectedClientProjectPage</div>;
};

export default SelectedClientProjectPage;
