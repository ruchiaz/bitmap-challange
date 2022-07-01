import { Bitmap } from '../../src/entity/bitmap';
import { Pixel } from '../../src/entity/pixel';

describe('Unit Test Bitmap Class',()=>{
  const pixels: Pixel[] = [
    new Pixel(0, 0, 1),
    new Pixel(0, 1, 0),
    new Pixel(1, 0, 0)
  ];
  const bitmap:Bitmap=new Bitmap(3, 3, pixels);

  describe('get methods',()=>{
    it('should be able to return the number of rows of the given bitmap', ()=> {
      expect(bitmap.rows).toEqual(3);
    });
    it('should be able to return the number of columns of the given bitmap', ()=> {
      expect(bitmap.cols).toEqual(3);
    });
    it('should be able to return pixels of the given bitmap', ()=> {
      expect(bitmap.pixels).toHaveLength(3);
    });
  })
})
