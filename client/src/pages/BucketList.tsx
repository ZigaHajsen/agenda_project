import { Fragment } from 'react';
import { Buckets } from '../components';
import { Navbar } from 'react-bootstrap';

const BucketList = () => {
  return (
    <Fragment>
      <Navbar bg='dark'>
        <Navbar.Brand>Secure cloud storage</Navbar.Brand>
      </Navbar>
      <Buckets />
    </Fragment>
  );
};

export default BucketList;
