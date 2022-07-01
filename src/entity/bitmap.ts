import { Pixel } from './pixel';

/**
 * Class Bitmap
 */
export class Bitmap {
  private readonly _rows: number;
  private readonly _cols: number;
  private readonly _pixels: Pixel[];

  /**
   * Constructor
   * @param rows number of rows of the bitmap
   * @param cols number of columns of the bitmap
   * @param pixels pixel matrix
   */
  constructor(rows: number, cols: number, pixels: Pixel[]) {
    this._rows = rows;
    this._cols = cols;
    this._pixels = pixels;
  }

  get rows(): number {
    return this._rows;
  }

  get cols(): number {
    return this._cols;
  }

  get pixels(): Pixel[] {
    return this._pixels;
  }



}
