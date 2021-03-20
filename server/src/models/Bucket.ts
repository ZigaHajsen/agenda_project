import mongoose from 'mongoose';

export interface IBucket {
  _id: string;
  name: string;
  location: string;
}

const BucketSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    unique: true,
  },
  location: {
    type: String,
    required: [true, 'Please add a location'],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

BucketSchema.pre('remove', async function (next) {
  await this.model('File').deleteMany({ bucket: this._id });
  next();
});

export default mongoose.model('Bucket', BucketSchema);
