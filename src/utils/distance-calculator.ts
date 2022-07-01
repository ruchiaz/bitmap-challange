import { Bitmap } from '../entity/bitmap';
import { Pixel } from '../entity/pixel';
import { Configs } from './configs';

/**
 * Distance calculator
 * @param bitmap selected bitmap
 * @param pixel pixel information
 * @returns number
 */
export const distanceCalculator = (bitmap:Bitmap,pixel:Pixel):number => {
  if(pixel.color===Configs.PIXEL_COLOR_WHITE) return 0;
  return bitmap.pixels.filter(p=>p.color===Configs.PIXEL_COLOR_WHITE).reduce((nearest:number, current:Pixel)=>{
    const newDistance = Math.abs((current.rowIndex-pixel.rowIndex))+Math.abs(current.colIndex-pixel.colIndex);
    nearest = Math.min(nearest,newDistance);
    return nearest
  }, Math.max(bitmap.rows,bitmap.cols))

};

