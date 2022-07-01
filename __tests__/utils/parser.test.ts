import { Bitmap } from '../../src/entity/bitmap';
import { Configs, processInput } from '../../src/utils';

describe('Unit Test for parser', () => {
  const pixelMap = '0001' + '\r\n' + '0011' + '\r\n' + '0110';
  const content = '1' + '\r\n' + '3 4' + '\r\n' +  pixelMap;
  it('Should throw error when invalid number of test cases',()=>{
    const noOfTestCases = Configs.TEST_CASE_MIN -1;
    const testCase = noOfTestCases + '\r\n' + '3 4' + '\r\n' +  pixelMap;
    try {
      processInput(testCase);
    }catch (e){
      expect(e).toEqual(new Error(`The number of test cases not in (${Configs.TEST_CASE_MIN}≤t≤${Configs.TEST_CASE_MAX}): t=${noOfTestCases}`));
    }
  });

  it('Should throw error when number of test cases exceeded',()=>{
    const noOfTestCases = Configs.TEST_CASE_MAX + 1;
    const testCase = noOfTestCases + '\r\n' + '3 4' + '\r\n' +  pixelMap;
    try {
      processInput(testCase);
    }catch (e){
      expect(e).toEqual(new Error(`The number of test cases not in (${Configs.TEST_CASE_MIN}≤t≤${Configs.TEST_CASE_MAX}): t=${noOfTestCases}`));
    }
  });

  it('Should throw error when number of rows less than required number',()=>{
    const rows = Configs.BITMAP_MIN_SIZE - 1;
    const testCase = 1 + '\r\n' + rows+' 4' + '\r\n' +  pixelMap;
    try {
      processInput(testCase);
    }catch (e){
      expect(e).toEqual(new Error(`rows count must in range of ${Configs.BITMAP_MIN_SIZE}<=n <=${Configs.BITMAP_MAX_SIZE}: n= ${rows}`));
    }
  });
  it('Should throw error when number of rows exceeded than required number',()=>{
    const rows = Configs.BITMAP_MAX_SIZE + 1;
    const testCase = 1 + '\r\n' + rows+' 4' + '\r\n' +  pixelMap;
    try {
      processInput(testCase);
    }catch (e){
      expect(e).toEqual(new Error(`rows count must in range of ${Configs.BITMAP_MIN_SIZE}<=n <=${Configs.BITMAP_MAX_SIZE}: n= ${rows}`));
    }
  });

  it('Should throw error when number of columns less than required number',()=>{
    const cols = Configs.BITMAP_MIN_SIZE - 1;
    const testCase = 1 + '\r\n' + '3 '+cols + '\r\n' +  pixelMap;
    try {
      processInput(testCase);
    }catch (e){
      expect(e).toEqual(new Error(`cols count  must in range of ${Configs.BITMAP_MIN_SIZE}<=m<=${Configs.BITMAP_MAX_SIZE}: m= ${cols}`));
    }
  });

  it('Should throw error when number of columns exceeded than required number',()=>{
    const cols = Configs.BITMAP_MAX_SIZE + 1;
    const testCase = 1 + '\r\n' + '3 '+cols + '\r\n' +  pixelMap;
    try {
      processInput(testCase);
    }catch (e){
      expect(e).toEqual(new Error(`cols count  must in range of ${Configs.BITMAP_MIN_SIZE}<=m<=${Configs.BITMAP_MAX_SIZE}: m= ${cols}`));
    }
  });

  it('Should process the content from input file', () => {
    const bitmaps: Bitmap[] = processInput(content);
    expect(bitmaps[0].rows).toEqual(3);
    expect(bitmaps[0].cols).toEqual(4);
    expect(bitmaps[0].pixels).toHaveLength(12);
  });

});
