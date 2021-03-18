import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { createBucket } from '../redux/buckets/actions';
import styled from 'styled-components/macro';
import { Button, Form, Row, Col } from 'react-bootstrap';

const CreateBucket: React.FC<any> = ({ setToggleCreation }) => {
  const name = useRef<HTMLInputElement>(null);
  const location = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(createBucket(name.current!.value, location.current!.value));
    setToggleCreation(false);
  };

  return (
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
          onClick={() => setToggleCreation(false)}
        >
          Cancel
        </Button>
      </Nav>
    </Form>
  );
};

export default CreateBucket;

const Nav = styled(Row)`
  display: flex;
  justify-content: space-between;
`;