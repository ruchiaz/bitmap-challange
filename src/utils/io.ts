import * as fs from 'fs';

export const readInput = async (fileName: string): Promise<string> => {
  try {
    // get file content
    return fs.readFileSync(fileName, 'utf-8');
  } catch (error) {
    throw new Error(
      `Could not read from input file ${fileName}. Error=>${error}`
    );
  }
};


