import {
  getColorFromPairNumber,
  getPairNumberFromColor,
} from "./colorCoderHelper";
import { ColorPair } from "./colorPair";

function testNumberToPair(pairNumber, expectedMajorColor, expectedMinorColor) {
  let testPair = getColorFromPairNumber(pairNumber);
  console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair}`);
  console.assert(testPair.majorColor == expectedMajorColor);
  console.assert(testPair.minorColor == expectedMinorColor);
}

function testPairToNumber(majorColor, minorColor, expectedPairNumber) {
  let testPair = new ColorPair();
  testPair.majorColor = majorColor;
  testPair.minorColor = minorColor;
  let pairNumber = getPairNumberFromColor(testPair);
  console.log(`[In]Colors: ${testPair}, [Out] PairNumber: ${pairNumber}`);
  console.assert(pairNumber == expectedPairNumber);
}

function test() {
  testNumberToPair(4, "WHITE", "BROWN");
  testNumberToPair(5, "WHITE", "SLATE");
  testNumberToPair(23, "VIOLET", "GREEN");
  testPairToNumber("YELLOW", "GREEN", 18);
  testPairToNumber("RED", "BLUE", 6);
}
test();
