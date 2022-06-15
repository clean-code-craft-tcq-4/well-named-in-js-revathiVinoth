import { ColorPair, MajorColorNames, MinorColorNames } from "./colorPair.js";

function getColorFromPairNumber(pairNumber) {
  let minorColorSize = MajorColorNames.length;
  let majorColorSize = MinorColorNames.length;

  if (pairNumber < 1 || pairNumber > minorColorSize * majorColorSize) {
    throw `Argument PairNumber:${pairNumber} is outside the allowed range`;
  }
  let zeroBasedPairNumber = pairNumber - 1;
  let majorColorIndex = parseInt(zeroBasedPairNumber / minorColorSize);
  let minorColorIndex = parseInt(zeroBasedPairNumber % minorColorSize);
  let colorPair = new ColorPair();
  colorPair.majorColor = MajorColorNames[majorColorIndex];
  colorPair.minorColor = MinorColorNames[minorColorIndex];
  return colorPair;
}

function getPairNumberFromColor(pair) {
  let majorColorIndex = -1;
  for (let i = 0; i < MajorColorNames.length; i++) {
    if (MajorColorNames[i] == pair.majorColor) {
      majorColorIndex = i;
      break;
    }
  }

  let minorColorIndex = -1;
  for (let i = 0; i < MinorColorNames.length; i++) {
    if (MinorColorNames[i] == pair.minorColor) {
      minorColorIndex = i;
      break;
    }
  }

  if (majorColorIndex == -1 || minorColorIndex == -1) {
    throw `Unknown Colors:${pair.toString()}`;
  }

  return majorColorIndex * MinorColorNames.length + (minorColorIndex + 1);
}
export { getPairNumberFromColor, getColorFromPairNumber };
