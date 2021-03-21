import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { RenderModel } from '../models/interface-models';
import { BucketFiles, BucketDetails } from '.';

interface RenderState {
  render: RenderModel;
}

const BucketContainer = () => {
  const render = useSelector(
    (state: RenderState) => state.render.bucketDetails
  );

  return <Fragment>{render ? <BucketDetails /> : <BucketFiles />}</Fragment>;
};

export default BucketContainer;
