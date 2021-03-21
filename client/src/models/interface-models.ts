export interface RenderModel {
  files: Boolean;
  createNewBucket: Boolean;
  bucket: null | BucketModel;
  bucketDetails: Boolean;
}

export interface BucketModel {
  _id: string;
  name: string;
  location: string;
  date: string;
  __v: number;
}

export interface FileModel {
  _id: string;
  name: string;
  size: number;
  lastModified: number;
  bucket: string;
  date: string;
  __v: number;
}
