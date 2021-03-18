import styled from 'styled-components/macro';
import { Row, Col } from 'react-bootstrap';

interface BucketProps {
  bucketId: string;
  name: string;
  location: string;
}

const Bucket: React.FC<BucketProps> = ({ bucketId, name, location }) => {
  return (
    <BucketRow>
      <Col>
        <span onClick={() => console.log(bucketId)}>{name}</span>
      </Col>
      <Col>{location}</Col>
    </BucketRow>
  );
};

export default Bucket;

const BucketRow = styled(Row)`
  border-left: black 2px solid;
  border-right: black 2px solid;
`;
