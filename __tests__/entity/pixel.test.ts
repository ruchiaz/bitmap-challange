import { Pixel } from '../../src/entity/pixel';

describe('Unit Test Pixel Class',()=>{
  const pixel: Pixel = new Pixel(1,0,0);
  describe('get methods',()=>{
    it('should be able to return the row index of the given pixel', ()=> {
      expect(pixel.rowIndex).toEqual(1);
    });
    it('should be able to return the column index of the given pixel', ()=> {
      expect(pixel.colIndex).toEqual(0);
    });
    it('should be able to return the color value of the given pixel', ()=> {
      expect(pixel.color).toEqual(0);
    });
  })
})
