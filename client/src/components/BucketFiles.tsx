import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  filesOff,
  removeBucket,
  bucketDetailsOn,
} from '../redux/render/actions';
import { uploadFile, getFiles } from '../redux/files/actions';
import { RenderModel, FileModel } from '../models/interface-models';
import styled from 'styled-components/macro';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { File } from '.';

interface RenderState {
  render: RenderModel;
}

interface FilesState {
  files: FileModel[];
}

const Files = () => {
  const dispatch = useDispatch();
  const bucketId = useSelector(
    (state: RenderState) => state.render.bucket!._id
  );
  const files = useSelector((state: FilesState) => state.files);

  const handleClick = () => {
    dispatch(removeBucket());
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
          <Button variant='success mt-3 disabled'>Files</Button>
          <Button
            variant='success mt-3'
            onClick={() => dispatch(bucketDetailsOn())}
          >
            Details
          </Button>
        </Row>
        <Nav className='mb-3 mt-3'>
          <div>All files ({files.length})</div>
          <div>
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
          {files.map((file) => {
            const { _id, name, size, lastModified } = file;

            return (
              <File
                key={_id}
                fileId={_id}
                bucketId={bucketId}
                name={name}
                size={size}
                lastModified={lastModified}
              />
            );
          })}
        </div>
        <Border></Border>
        <Nav>
          <div></div>
          <Button variant='danger' className='mt-3' onClick={handleClick}>
            Back
          </Button>
        </Nav>
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
