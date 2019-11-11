import { JpegOptions, PngOptions, ResizeOptions, SharpOptions, TiffOptions, WebpOptions } from 'sharp';
import { ConvertOptions } from './types';

export const DEFAULT_SHARP: SharpOptions = {
  pages: 1,
  page: 0,
};
export const DEFAULT_JPEG: JpegOptions = {
  quality: 80,
  progressive: true,
  chromaSubsampling: '4:4:4',
  optimiseScans: true,
};
export const DEFAULT_WEBP: WebpOptions = {
  quality: 80,
  alphaQuality: 80,
  nearLossless: true,
};
export const DEFAULT_PNG: PngOptions = {
  progressive: true,
  compressionLevel: 8,
  adaptiveFiltering: true,
  quality: 90,
};
export const DEFAULT_TIFF: TiffOptions = {
  quality: 90,
  compression: 'lzw',
};
export const DEFAULT_RESIZE: ResizeOptions = {
  fit: 'cover',
  position: 'entropy',
  withoutEnlargement: true,
};
export const DEFAULT_PDF_RESIZE: ResizeOptions = {
  width: 500,
  height: 900,
};
export const outputOptions: Map<string, ConvertOptions> = new Map([
  [ 'jpeg', DEFAULT_JPEG ],
  [ 'webp', DEFAULT_WEBP ],
  [ 'png', DEFAULT_PNG ],
  [ 'tiff', DEFAULT_TIFF ],
]);
