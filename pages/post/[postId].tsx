import { useRouter } from 'next/router';
import React from 'react';

const PostDetailPage = () => {
  const router = useRouter();

  console.debug('pathname: ', router.pathname);
  console.debug('query: ', router.query);
  return (
    <div>
      <h1>PostDetailPage</h1>

      <p>Query: {JSON.stringify(router.query)}</p>
    </div>
  );
};

export default PostDetailPage;
