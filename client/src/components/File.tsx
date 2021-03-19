import prettyBytes from 'pretty-bytes';
import styled from 'styled-components/macro';
import { Row, Col } from 'react-bootstrap';
import { FaFileAlt } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

interface FileProps {
  fileId: string;
  name: string;
  size: number;
  lastModified: number;
}

const File: React.FC<FileProps> = ({ fileId, name, size, lastModified }) => {
  const date = new Date(lastModified);
  date.toLocaleDateString();

  const handleClick = (e: any) => {
    console.log('click');
  };

  return (
    <FileRow>
      <Col>
        <FaFileAlt /> {name}
      </Col>
      <Col>{date.toLocaleDateString()}</Col>
      <Col>{prettyBytes(size)}</Col>
      <MdDeleteForever className='mr-3 mt-1' onClick={handleClick} />
    </FileRow>
  );
};

export default File;

const FileRow = styled(Row)`
  border-left: black 2px solid;
  border-right: black 2px solid;
  border-bottom: grey 1px solid;
`;
