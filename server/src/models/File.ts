import mongoose from 'mongoose';

export interface IFile {
  _id: string;
  name: string;
  size: number;
  lastModified: number;
  bucket: string;
}

const FileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  size: {
    type: Number,
    required: true,
  },
  lastModified: {
    type: Number,
    required: true,
  },
  bucket: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bucket',
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('File', FileSchema);
