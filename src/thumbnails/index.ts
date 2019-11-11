import { S3Event } from 'aws-lambda';
import { s3EventParser, s3FetchObject } from '../s3';
import { InputMimes, mimeMap } from '../sharp';
import { THUMB_SIZES } from '../sharp/resizers';

export async function thumbnails(event: S3Event) {
  const { bucket, key } = s3EventParser(event);
  const { success, file, contentType } = await s3FetchObject(bucket, key);
  if (!success) {
    throw new Error('Unable to fetch object');
  }
  const outputType = mimeMap.get(contentType as InputMimes);
  if (!outputType) {
    throw new Error('Invalid mime type');
  }

  for (const size of THUMB_SIZES.entries()) {

  }
}
