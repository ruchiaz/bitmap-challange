import { processInput, readInput } from './utils';
import { distanceCalculator } from './utils/distance-calculator';
(async () => {
  try {

    const input = await readInput("./input.txt");

    const bitmaps = processInput(input);
    bitmaps.map(bitmap=>{
      const pixels = bitmap.pixels;
      for(let i = 0; i <bitmap.rows;i++){
       const outputRows= pixels.filter(pixel=>pixel.rowIndex===i).map(pixel=>distanceCalculator(bitmap,pixel));

        //console.log('outputRows',outputRows);
        process.stdout.write(outputRows + '\n');
      }
    })
  } catch (error) {
    console.log(error);
  }
})();
