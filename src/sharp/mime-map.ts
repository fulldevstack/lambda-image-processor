import { InputMimes, MimeOutput, OutputExtensions } from './types';

export const mimeMap: Map<InputMimes, MimeOutput> = new Map([
  [ 'application/pdf', {convert: true, ext: 'jpeg' } ],
  [ 'image/jpeg', { convert: false, ext: 'jpeg' } ],
  [ 'image/png', { convert: false, ext: 'png' } ],
  [ 'image/webp', { convert: false, ext: 'webp' } ],
  [ 'image/gif', { convert: true, ext: 'png' } ],
  [ 'image/svg+xml', { convert: true, ext: 'webp' } ],
]);
