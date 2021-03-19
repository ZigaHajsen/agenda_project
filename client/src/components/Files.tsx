import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filesOff, removeBucket } from '../redux/render/actions';
import { uploadFile, getFiles } from '../redux/files/actions';
import styled from 'styled-components/macro';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { File } from '../components';

const Files = () => {
  const dispatch = useDispatch();
  const bucketId = useSelector((state: any) => state.render.bucket);
  const files = useSelector((state: any) => state.files);

  const handleClick = (e: any) => {
    dispatch(removeBucket());
    dispatch(filesOff());
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, size, lastModified } = e.target.files![0];

    dispatch(uploadFile(name, size, lastModified, bucketId));
  };

  useEffect(() => {
    dispatch(getFiles(bucketId));
  }, [dispatch, bucketId]);

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
        <div>
          {files.map((file: any) => {
            const { _id, name, size, lastModified } = file;

            return (
              <File
                key={_id}
                fileId={_id}
                name={name}
                size={size}
                lastModified={lastModified}
              />
            );
          })}
        </div>
        <Border></Border>
        <Button variant='danger' onClick={handleClick}>
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
