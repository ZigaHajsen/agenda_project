interface BucketProps {
  name: string;
  location: string;
}

const Bucket: React.FC<BucketProps> = ({ name, location }) => {
  return (
    <div>
      {name} {location}
    </div>
  );
};

export default Bucket;
