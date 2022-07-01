import * as fs from 'fs';
import { readInput } from '../../src/utils';

describe('Unit test Read input',()=>{

  let fd:number;
  const fileName = Math.random().toString(36).slice(2,6);
  const filePath = `./${fileName}.txt`;
  const content = '1'+"\r\n"+"3 4"+"\r\n"+"0001"+"\r\n"+"0011"+"\r\n"+"0110";

  beforeEach(()=>{
    fd = fs.openSync(filePath,'a+');
    fs.writeSync(fd,content);
  });

  afterEach(() => {
    fs.closeSync(fd);
    fs.unlinkSync(filePath);
  });

  it('should read from the input file',()=>{
    expect.assertions(1);
    expect(readInput(filePath)).resolves.toBe(content);
  })

})
