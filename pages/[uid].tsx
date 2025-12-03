import { Fragment } from "react/jsx-runtime";
import { GetServerSidePropsContext } from "next";

export default function UserIdPage({ params }) {
  return
   <Fragment>
    <h1>{params.id}</h1>
   </Fragment>
   ;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { params } = context;
    const userId = params?.uid;

    if (!userId) {
      return {
        notFound: true,
      };
    }

  return {
    props: {
      id: 'userid-' + userId,
    },
  };
}