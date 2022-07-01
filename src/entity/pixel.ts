/**
 * Class Pixel. This class will manage individual pixel information
 */
export class Pixel {
  private readonly _rowIndex: number;
  private readonly _colIndex: number;
  private _color: number;

  /**
   * Pixel constructor
   * @param rowIndex row index (i)
   * @param colIndex column index (j)
   * @param color color of the pixel (Black or White)=> (0 or 1)
   */
  constructor(rowIndex: number, colIndex: number, color: number) {
    this._rowIndex = rowIndex;
    this._colIndex = colIndex;
    this._color = color;
  }

  get rowIndex(): number {
    return this._rowIndex;
  }

  get colIndex(): number {
    return this._colIndex;
  }

  get color(): number {
    return this._color;
  }

  set color(value: number) {
    this._color = value;
  }

}
