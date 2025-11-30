import { readFile } from 'fs/promises';
import path from 'path';

type Product = {
  id: string;
  title: string;
  description: string;
};

async function Home() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const fileContent = await readFile(filePath, 'utf-8');
  const data = JSON.parse(fileContent);
  const { products }: { products: Product[] } = data;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

export default Home;