import gql from 'graphql-tag';
import Head from 'next/head';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
// import PaginationStyles from '../styles/PaginationStyles';
// import DisplayError from './ErrorMessage';
import { perPage } from '../../config';

export default function Pagination() {
  return (
    <div>
      <Head>
        <title>Riley and Jessica 2022</title>
      </Head>
    </div>
  );
}
