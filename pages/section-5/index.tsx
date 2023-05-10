import React from 'react';
import fs from 'fs/promises';
import path from 'path';

const Section5 = (props: any) => {
  const { products } = props;

  return (
    <ul>
      {products.map((pro: any) => (
        <li key={pro.id}>{pro.title}</li>
      ))}
    </ul>
  );
};

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData: any = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products,
      revalidate: 10,
    },
  };
};

export default Section5;
