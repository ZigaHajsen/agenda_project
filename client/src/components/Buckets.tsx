import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBuckets } from '../redux/buckets/actions';
import { Bucket } from '../components';

const Buckets = () => {
  const dispatch = useDispatch();
  const buckets = useSelector((state: any) => state.buckets);

  console.log(buckets);

  useEffect(() => {
    dispatch(getBuckets());
  }, []);

  return (
    <Fragment>
      All buckets Button
      {buckets.map((bucket: any) => {
        const { _id, name, location } = bucket;

        return <Bucket key={_id} name={name} location={location} />;
      })}
    </Fragment>
  );
};

export default Buckets;
