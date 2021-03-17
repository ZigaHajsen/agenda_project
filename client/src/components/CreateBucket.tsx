import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { createBucket } from '../redux/buckets/actions';
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
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Control placeholder='Name' type='text' ref={name} />
        </Col>
        <Col>
          <Form.Control placeholder='Location' type='text' ref={location} />
        </Col>
      </Row>
      <Button variant='success' type='submit'>
        Create Bucket
      </Button>
    </Form>
  );
};

export default CreateBucket;
