import { readFile } from 'fs/promises';
import Link from 'next/link';
import path from 'path';

type Product = {
  id: string;
  title: string;
  description: string;
};

function Home(props: { products: Product[] }) {
  const { products } = props;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const fileContent = await readFile(filePath, 'utf-8');
  const data = JSON.parse(fileContent);

  if(!data) {
    return {
      redirect: {
        destination: '/no-data',
      },
    };
  }

  if (data.products.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}

export default Home;
