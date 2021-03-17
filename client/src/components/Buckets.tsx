import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBuckets } from '../redux/buckets/actions';
import { Button } from 'react-bootstrap';
import { Bucket, CreateBucket } from '../components';

const Buckets = () => {
  const [toggleCreation, setToggleCreation] = useState(false);

  const dispatch = useDispatch();
  const buckets = useSelector((state: any) => state.buckets);

  console.log(buckets);

  useEffect(() => {
    dispatch(getBuckets());
  }, [dispatch]);

  return (
    <Fragment>
      {toggleCreation && <CreateBucket setToggleCreation={setToggleCreation} />}
      <div>
        <div>
          All buckets{' '}
          <Button variant='success' onClick={() => setToggleCreation(true)}>
            Create New Bucket
          </Button>
        </div>
        {buckets.map((bucket: any) => {
          const { _id, name, location } = bucket;

          return <Bucket key={_id} name={name} location={location} />;
        })}
      </div>
    </Fragment>
  );
};

export default Buckets;
