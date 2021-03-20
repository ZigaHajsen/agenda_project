import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  filesOff,
  removeBucket,
  bucketDetailsOff,
} from '../redux/render/actions';
import { deleteBucket, getBuckets } from '../redux/buckets/actions';
import styled from 'styled-components/macro';
import { Button, Container, Row, Modal } from 'react-bootstrap';

const BucketDetails = () => {
  const dispatch = useDispatch();
  const bucketId = useSelector((state: any) => state.render.bucket._id);
  const bucketName = useSelector((state: any) => state.render.bucket.name);
  const bucketLocation = useSelector(
    (state: any) => state.render.bucket.location
  );

  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  const handleBackClick = () => {
    dispatch(removeBucket());
    dispatch(filesOff());
    dispatch(bucketDetailsOff());
  };
  const handleDeleteClick = () => {
    dispatch(deleteBucket(bucketId));
    dispatch(getBuckets());
    dispatch(removeBucket());
    dispatch(filesOff());
    dispatch(bucketDetailsOff());
    closeModal();
  };

  return (
    <Container>
      <Row>
        <Button
          variant='success mt-3'
          onClick={() => dispatch(bucketDetailsOff())}
        >
          Files
        </Button>
        <Button variant='success mt-3 disabled'>Details</Button>
      </Row>
      <Nav className='mb-3 mt-3'>
        <div></div>
        <Button variant='danger' onClick={openModal}>
          Delete Bucket
        </Button>
      </Nav>
      <Row>Bucket name: {bucketName}</Row>
      <Row>Location: {bucketLocation}</Row>
      <Row>Storage size: 5GB</Row>
      <Nav>
        <div></div>
        <Button variant='danger' className='mt-3' onClick={handleBackClick}>
          Back
        </Button>
      </Nav>
      <Modal show={open} onHide={closeModal}>
        <Modal.Body>Do you really want to delete this bucket?</Modal.Body>
        <Modal.Footer>
          <Button variant='success' onClick={closeModal}>
            Close
          </Button>
          <Button variant='danger' type='submit' onClick={handleDeleteClick}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default BucketDetails;

const Nav = styled(Row)`
  display: flex;
  justify-content: space-between;
`;
