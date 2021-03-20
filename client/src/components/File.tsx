import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteFile } from '../redux/files/actions';
import prettyBytes from 'pretty-bytes';
import styled from 'styled-components/macro';
import { Row, Col, Modal, Button } from 'react-bootstrap';
import { FaFileAlt } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

interface FileProps {
  fileId: string;
  bucketId: string;
  name: string;
  size: number;
  lastModified: number;
}

const File: React.FC<FileProps> = ({
  fileId,
  bucketId,
  name,
  size,
  lastModified,
}) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  const handleClick = () => {
    dispatch(deleteFile(fileId, bucketId));
    closeModal();
  };

  const date = new Date(lastModified);
  date.toLocaleDateString();

  return (
    <FileRow>
      <Col>
        <FaFileAlt /> {name}
      </Col>
      <Col>{date.toLocaleDateString()}</Col>
      <Col>{prettyBytes(size)}</Col>
      <MdDeleteForever className='mr-3 mt-1' onClick={openModal} />
      <Modal show={open} onHide={closeModal}>
        <Modal.Body>Do you really want to delete this object?</Modal.Body>
        <Modal.Footer>
          <Button variant='success' onClick={closeModal}>
            Close
          </Button>
          <Button variant='danger' type='submit' onClick={handleClick}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </FileRow>
  );
};

export default File;

const FileRow = styled(Row)`
  border-left: black 2px solid;
  border-right: black 2px solid;
  border-bottom: grey 1px solid;
`;
