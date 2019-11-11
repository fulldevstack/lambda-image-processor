import { JpegOptions, PngOptions, ResizeOptions, SharpOptions, TiffOptions, WebpOptions } from 'sharp';

export type ConvertOptions = PngOptions | JpegOptions | WebpOptions | TiffOptions;
export type InputMimes = 'application/pdf'|'image/jpeg'|'image/png'|'image/webp'|'image/gif'|'image/svg+xml';
export type OutputExtensions = 'jpeg'|'png'|'webp'|'tiff';

export interface MimeOutput {
  convert: boolean;
  ext: OutputExtensions
}

export interface WebOptimizeOptions {
  webp?: WebpOptions;
  resize?: ResizeOptions;
}

export interface PdfJpegOptions {
  sharp?: SharpOptions;
  resize?: ResizeOptions;
  jpeg?: JpegOptions;
}

export interface ConverterOptions {
  inMime: InputMimes;
  outExt:  OutputExtensions;
  toOptions?: ConvertOptions;
  sharp?: SharpOptions;
  resize?: ResizeOptions;
}
