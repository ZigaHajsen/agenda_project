import styled from 'styled-components/macro';
import { Row, Col } from 'react-bootstrap';

interface BucketProps {
  name: string;
  location: string;
}

const Bucket: React.FC<BucketProps> = ({ name, location }) => {
  return (
    <BucketRow>
      <Col>{name}</Col>
      <Col>{location}</Col>
    </BucketRow>
  );
};

export default Bucket;

const BucketRow = styled(Row)`
  border-left: black 2px solid;
  border-right: black 2px solid;
`;
