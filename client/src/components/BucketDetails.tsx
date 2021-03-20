import { useDispatch } from 'react-redux';
import {
  filesOff,
  removeBucket,
  bucketDetailsOff,
} from '../redux/render/actions';
import styled from 'styled-components/macro';
import { Button, Container, Row, Col } from 'react-bootstrap';

const BucketDetails = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeBucket());
    dispatch(filesOff());
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
        <Button variant='danger'>Delete Bucket</Button>
      </Nav>
      <TableNav>
        <Col>Name</Col>
        <Col>Last Modified</Col>
        <Col>Size</Col>
      </TableNav>
      <Border></Border>
      <Nav>
        <div></div>
        <Button variant='danger' className='mt-3' onClick={handleClick}>
          Back
        </Button>
      </Nav>
    </Container>
  );
};

export default BucketDetails;

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
