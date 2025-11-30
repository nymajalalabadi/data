import { readFile } from 'fs/promises';
import path from 'path';

function Home(props: { products: { id: string, title: string, description: string }[] }) {

  const { products } = props;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}


export async function getStaticProps() {

  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const fileContent = await readFile(filePath, 'utf-8');
  const data = JSON.parse(fileContent);

  return {
    props: data.products,
  };
}

export default Home;