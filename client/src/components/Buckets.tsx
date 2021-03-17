import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBuckets } from '../redux/buckets/actions';
import styled from 'styled-components/macro';
import { Button, Container, Row, Col } from 'react-bootstrap';
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
      <Container>
        {toggleCreation && (
          <CreateBucket setToggleCreation={setToggleCreation} />
        )}
        <Nav className='mb-3 mt-3'>
          <div>All buckets ({buckets.length})</div>
          <div>
            <Button variant='success' onClick={() => setToggleCreation(true)}>
              Create New Bucket
            </Button>
          </div>
        </Nav>
        <TableNav>
          <Col>Name</Col>
          <Col>Location</Col>
        </TableNav>
        <div>
          {buckets.map((bucket: any) => {
            const { _id, name, location } = bucket;

            return <Bucket key={_id} name={name} location={location} />;
          })}
        </div>
        <Border></Border>
      </Container>
    </Fragment>
  );
};

export default Buckets;

const Nav = styled(Row)`
  display: flex;
  justify-content: space-between;
`;

const TableNav = styled(Row)`
  border: black 2px solid;
  background: grey;
`;

const Border = styled(Row)`
  border-bottom: black 2px solid;
`;
