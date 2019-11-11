import S3 from 'aws-sdk/clients/s3';
import { S3FetchResponse, S3PutResponse } from './types';

const client = new S3({ apiVersion: '2006-03-01', region: 'us-east-1' });

export async function s3FetchObject(Bucket: string, Key: string): S3FetchResponse {
  const getParams: S3.Types.GetObjectRequest = {
    Bucket,
    Key,
  };
  try {
    const { Body, ContentType } = await client.getObject(getParams).promise();
    if (Body) {
      return { success: true, file: Body, contentType: ContentType };
    }
  } catch(e) {
    console.log(e);
  }
  return { success: false };
}

export async function s3PutObject(file: S3.Body, params: S3.PutObjectRequest): S3PutResponse {
  try {
    await client.putObject({
      ...params,
      Body: file,
    }).promise();
    return { success: true };
  } catch (err) {
    console.log(err);
  }
  return { success: false };
}
