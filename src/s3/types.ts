import S3 from 'aws-sdk/clients/s3';

export type S3FetchResponse = Promise<{ success: boolean; file?: S3.Body; contentType?: string; }>;
export type S3PutResponse = Promise<{ success: boolean; }>
