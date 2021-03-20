import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  filesOff,
  removeBucket,
  bucketDetailsOff,
} from '../redux/render/actions';
import styled from 'styled-components/macro';
import { Button, Container, Row, Modal } from 'react-bootstrap';

const BucketDetails = () => {
  const dispatch = useDispatch();
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
  };
  const handleClick = () => {
    console.log('click');
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
      <Row>Bucket name:</Row>
      <Row>Location:</Row>
      <Row>Storage size:</Row>
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
          <Button variant='danger' type='submit' onClick={handleClick}>
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
