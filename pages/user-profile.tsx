import { Fragment } from "react/jsx-runtime";
import { GetServerSidePropsContext } from "next";

export default function UserProfilePage(props) {
  return 
  <Fragment>
    <h1>{props.username}</h1>
  </Fragment>
  ;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {

    const { params, req, res } = context;


  return {
    props: {
      username: 'Max',
    },
  };
}