import sharp, { Sharp } from 'sharp';
import { DEFAULT_JPEG, DEFAULT_PDF_RESIZE, DEFAULT_SHARP, DEFAULT_WEBP, outputOptions } from './options';
import { ConverterOptions, PdfJpegOptions, WebOptimizeOptions } from './types';
import { mimeMap } from './mime-map';

//
// Creates Optimized webp format and optionally resize
//
export function webOptimize(file: Buffer, options: WebOptimizeOptions = {}): Sharp {
  let pipeline = sharp(file);
  if (options.resize) {
    pipeline.resize(null, null, options.resize);
  }
  return pipeline.toFormat('webp', { ...DEFAULT_WEBP, ...options.webp });
}
//
// Convert PDF to jpeg
//
export function pdfJpeg(file: Buffer, options: PdfJpegOptions = {},): Sharp {
  return sharp(file, { ...DEFAULT_SHARP, ...options.sharp })
    .resize(null, null, { ...DEFAULT_PDF_RESIZE, ...options.resize })
    .toFormat('jpeg', { ...DEFAULT_JPEG, ...options.jpeg });
}
//
// Convert to different format and optionally resize
//
export function convert(file: Buffer, options: ConverterOptions): Sharp {
  if (!mimeMap.has(options.inMime)) {
    throw new Error('Invalid mime type');
  }
  const defaultOptions = outputOptions.get(options.outExt);
  if (!defaultOptions) {
    throw new Error('Invalid output type');
  }
  let pipeline: Sharp = sharp({ ...DEFAULT_SHARP, ...options.sharp });
  if (options.resize) {
    pipeline.resize(null, null, options.resize);
  }
  return pipeline.toFormat(options.outExt, { ...defaultOptions, ...options.toOptions });
}

