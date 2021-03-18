import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { filesOff } from '../redux/render/actions';
import styled from 'styled-components/macro';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { File } from '../components';

const Files = () => {
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    console.log(e.target.files[0]);
  };

  return (
    <Fragment>
      <Container>
        <Row>
          <Button variant='success mt-3'>Delete Object</Button>
          <Button variant='primary mt-3'>Upload Object</Button>
        </Row>
        <Nav className='mb-3 mt-3'>
          <div>All buckets ()</div>
          <div>
            <Button variant='danger'>Delete Object</Button>
            <input
              type='file'
              id='file'
              style={{ display: 'none' }}
              onChange={handleChange}
            />
            <label htmlFor='file' className='btn btn-success mb-0'>
              Upload Object
            </label>
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
