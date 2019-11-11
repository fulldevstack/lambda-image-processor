import { ResizeOptions, Sharp } from 'sharp';
import sharp from 'sharp';
import { DEFAULT_RESIZE } from './options';

export const THUMB_SIZES: Map<string, {width: number; height: number;}> = new Map([
  [ 'xs', { width: 75, height: 75 } ],
  [ 'sm', { width: 125, height: 125 } ],
  [ 'md', { width: 250, height: 250 } ],
  [ 'lg', { width: 500, height: 500 } ],
]);

export function resize(file: Buffer, options: ResizeOptions): Sharp {
  if (!options.width && !options.height) {
    throw new Error('A width or height must be specified');
  }
  return sharp(file).resize(null, null, { ...DEFAULT_RESIZE, ...options });
}
