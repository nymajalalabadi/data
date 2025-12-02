import { GetStaticPropsContext } from "next";
import { readFile } from "fs/promises";
import path from "path";
import { Fragment } from "react/jsx-runtime";

export default function ProductDetailPage(props) {
  const { loadedProduct } = props;

  return <Fragment>
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Fragment>
  </Fragment>;
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    paths: [
      { params: { pid: 'p1' } },
      { params: { pid: 'p2' } },
      { params: { pid: 'p3' } },
    ],
    fallback: false,
  }

}