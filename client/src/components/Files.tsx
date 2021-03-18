import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { filesOff } from '../redux/render/actions';
import styled from 'styled-components/macro';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { File } from '../components';

const Files = () => {
  const dispatch = useDispatch();

  return (
    <Fragment>
      <Container>
        <Nav className='mb-3 mt-3'>
          <div>All buckets ()</div>
          <div>
            <Button variant='danger'>Delete Object</Button>
            <Button variant='success'>Upload Object</Button>
          </div>
        </Nav>
        <TableNav>
          <Col>Name</Col>
          <Col>Last Modified</Col>
          <Col>Size</Col>
        </TableNav>
        <File />
        <Border></Border>
        <Button variant='danger' onClick={() => dispatch(filesOff())}>
          Back
        </Button>
      </Container>
    </Fragment>
  );
};

export default Files;

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
