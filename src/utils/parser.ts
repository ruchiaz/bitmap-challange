import { Configs } from './configs';
import { Pixel } from '../entity/pixel';
import { Bitmap } from '../entity/bitmap';

/**
 * parse txt input and generate bitmaps
 * @param content
 */
export const processInput = (content: string): Bitmap[] => {
  // split file content by new line and push it to array
  const input: string[] = content
    .split(/\r?\n/)
    .filter((l) => l !== '')
    .map((l) => l.trim());

  let rowIdx = 0;
  const noOfTestCases = stringToNumber(input[rowIdx]);
  if (noOfTestCases < Configs.TEST_CASE_MIN || noOfTestCases > Configs.TEST_CASE_MAX) {
    throw new Error(
      `The number of test cases not in (${Configs.TEST_CASE_MIN}≤t≤${Configs.TEST_CASE_MAX}): t=${noOfTestCases}`
    );
  }
  rowIdx += 1;
  const bitmaps: Bitmap[] = [];
  for (let i = 0; i < noOfTestCases; i++) {
    const [rows, cols] = input[rowIdx].split(' ').map(stringToNumber);

    if (rows < Configs.BITMAP_MIN_SIZE || rows > Configs.BITMAP_MAX_SIZE) {
      throw new Error(`rows count must in range of ${Configs.BITMAP_MIN_SIZE}<=n <=${Configs.BITMAP_MAX_SIZE}: n= ${rows}`);
    } else if (cols < Configs.BITMAP_MIN_SIZE || cols > Configs.BITMAP_MAX_SIZE) {
      throw new Error(`cols count  must in range of ${Configs.BITMAP_MIN_SIZE}<=m<=${Configs.BITMAP_MAX_SIZE}: m= ${cols}`);
    }
    rowIdx += 1;

    const pixels: Pixel[] = [];
    for (let index = 0; index < rows; index++) {
      const element = input[rowIdx].split('').map(stringToNumber);
      for (let j = 0; j < cols; j++) {
        const pixel = new Pixel(index, j, element[j]);
        pixels.push(pixel);
      }

      rowIdx += 1;
    }
    const bitmap = new Bitmap(rows, cols, pixels);
    bitmaps.push(bitmap);
  }
  return bitmaps;
};

/**
 * convert string to number
 * @param str
 * @returns number
 */
export const stringToNumber = (str: string): number => {
  return parseInt(str, 10);
};

