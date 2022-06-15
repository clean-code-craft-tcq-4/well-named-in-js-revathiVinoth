import {
  getColorFromPairNumber,
  getPairNumberFromColor,
} from "./colorCoderHelper.js";
import { ColorPair } from "./colorPair.js";

function convertNumbertoColor(
  colorPairNumber,
  expectedMajorColor,
  expectedMinorColor
) {
  let actualColorPair = getColorFromPairNumber(colorPairNumber);
  console.log(
    `[In]Pair Number: ${colorPairNumber},[Out] Colors:${actualColorPair}`
  );
  console.assert(actualColorPair.majorColor == expectedMajorColor);
  console.assert(actualColorPair.minorColor == expectedMinorColor);
}

function convertColortoNumber(majorColor, minorColor, expectedPairNumber) {
  let colorPair = new ColorPair();
  colorPair.majorColor = majorColor;
  colorPair.minorColor = minorColor;
  let actualPairNumber = getPairNumberFromColor(colorPair);
  console.log(
    `[In]Colors: ${colorPair}, [Out] PairNumber: ${actualPairNumber}`
  );
  console.assert(actualPairNumber == expectedPairNumber);
}

function test() {
  convertNumbertoColor(4, "WHITE", "BROWN");
  convertNumbertoColor(5, "WHITE", "SLATE");
  convertNumbertoColor(23, "VIOLET", "GREEN");
  convertColortoNumber("YELLOW", "GREEN", 18);
  convertColortoNumber("RED", "BLUE", 6);
}
test();
