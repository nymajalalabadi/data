import { GetStaticPropsContext } from "next";
import { readFile } from "fs/promises";
import path from "path";
import { Fragment } from "react/jsx-runtime";

export default function ProductDetailPage(props) {
  const { loadedProduct } = props;

  if (!loadedProduct) {
    return <p>Loading...</p>;
  }

  return <Fragment>
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Fragment>
  </Fragment>;
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;
  const productId = params?.pid;

  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const fileContent = await readFile(filePath, 'utf-8');
  const data = JSON.parse(fileContent);

  const product = data.products.find(product => product.id === productId);

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { pid: 'p1' } },
    ],
    fallback: true,
  }

}

