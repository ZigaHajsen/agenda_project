import { Fragment, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { createNewBucketOff } from '../redux/render/actions';
import { createBucket } from '../redux/buckets/actions';
import styled from 'styled-components/macro';
import { Button, Form, Row, Col } from 'react-bootstrap';

const CreateBucket: React.FC<any> = () => {
  const name = useRef<HTMLInputElement>(null);
  const location = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(createBucket(name.current!.value, location.current!.value));
  };

  return (
    <Fragment>
      <Nav>
        <Spacer />
      </Nav>
      <Form onSubmit={handleSubmit} className='mb-3 mt-3'>
        <Row>
          <Col>
            <Form.Control placeholder='Name' type='text' ref={name} required />
          </Col>
          <Col>
            <Form.Control
              placeholder='Location'
              type='text'
              ref={location}
              required
            />
          </Col>
        </Row>
        <Nav>
          <Button variant='success' type='submit' className='mt-3'>
            Create Bucket
          </Button>

          <Button
            variant='danger'
            className='mt-3'
            onClick={() => dispatch(createNewBucketOff())}
          >
            Cancel
          </Button>
        </Nav>
      </Form>
      <Nav>
        <Spacer />
      </Nav>
    </Fragment>
  );
};

export default CreateBucket;

const Nav = styled(Row)`
  display: flex;
  justify-content: space-between;
`;

const Spacer = styled.div`
  height: 2rem;
  background: lightgrey;
  width: 100%;
`;
