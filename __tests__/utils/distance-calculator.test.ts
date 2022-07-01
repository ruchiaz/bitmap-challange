import { Pixel } from '../../src/entity/pixel';
import { Bitmap } from '../../src/entity/bitmap';
import { distanceCalculator } from '../../src/utils/distance-calculator';

describe('Unit Test for distanceCalculator',()=>{
  const pixels = [new Pixel(0, 0, 0), new Pixel(0, 1, 0), new Pixel(1, 0, 0), new Pixel(1, 1, 1)];
  const bitmap: Bitmap = new Bitmap(4, 3, pixels);

  it('Should be able to return smallest distance for nearest white pixel',()=>{
    const targetPixel = new Pixel(0,0,0);
    expect(distanceCalculator(bitmap,targetPixel)).toEqual(2);
  });

  it('Should return 0 if given pixel is already white',()=>{
    const targetPixel = new Pixel(1,1,1);
    expect(distanceCalculator(bitmap,targetPixel)).toEqual(0);
  })
});
