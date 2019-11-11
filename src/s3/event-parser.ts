import { S3Event } from 'aws-lambda';
//
// Extract bucket name and object key from event
//
export function s3EventParser(event: S3Event): { bucket: string; key: string } {
  const evt = event.Records[0].s3;
  console.log('Parsing Event:');
  console.log(evt);
  const bucket = evt.bucket.name;
  const key = evt.object.key;
  console.log(`Bucket: ${bucket}, Key: ${key}`);
  return { bucket, key };
}
