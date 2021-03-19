import prettyBytes from 'pretty-bytes';
import styled from 'styled-components/macro';
import { Row, Col } from 'react-bootstrap';

interface FileProps {
  fileId: string;
  name: string;
  size: number;
  lastModified: number;
}

const File: React.FC<FileProps> = ({ fileId, name, size, lastModified }) => {
  const date = new Date(lastModified);
  date.toLocaleDateString();

  return (
    <FileRow>
      <Col>{name}</Col>
      <Col>{date.toLocaleDateString()}</Col>
      <Col>{prettyBytes(size)}</Col>
    </FileRow>
  );
};

export default File;

const FileRow = styled(Row)`
  border-left: black 2px solid;
  border-right: black 2px solid;
  border-bottom: grey 1px solid;
`;
