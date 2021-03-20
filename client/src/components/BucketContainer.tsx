import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { BucketFiles, BucketDetails } from '.';

const BucketContainer = () => {
  const render = useSelector((state: any) => state.render.bucketDetails);

  return <Fragment>{render ? <BucketDetails /> : <BucketFiles />}</Fragment>;
};

export default BucketContainer;
