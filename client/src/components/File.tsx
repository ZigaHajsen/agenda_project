import styled from 'styled-components/macro';
import { Row, Col } from 'react-bootstrap';

interface FileProps {
  fileId: string;
  name: string;
  size: number;
  lastModified: number;
}

const File: React.FC<FileProps> = ({ fileId, name, size, lastModified }) => {
  return (
    <FileRow>
      <Col>{name}</Col>
      <Col>{lastModified}</Col>
      <Col>{size}</Col>
    </FileRow>
  );
};

export default File;

const FileRow = styled(Row)`
  border-left: black 2px solid;
  border-right: black 2px solid;
  border-bottom: grey 1px solid;
`;
