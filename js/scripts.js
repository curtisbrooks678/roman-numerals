function numberToRomanNumeral(input) {
  return input.toString();
}

function valueToSymbol (input) {
  symbolArr = ["I", "V", "X", "L", "C", "D", "M"]
  valueArr = [1, 5, 10, 50, 100, 500, 1000]
  if (input === valueArr[0]) {
    return symbolArr[0];
  }
  else if (input === valueArr[1]) {
    return symbolArr[1];
  }
  else if (input === valueArr[2]) {
    return symbolArr[2];
  }
  else if (input === valueArr[3]) {
    return symbolArr[3];
  }
  else if(input === valueArr[4]) {
    return symbolArr[4];
  }
  else if(input === valueArr[5]) {
    return symbolArr[5];
  }
  else if (input === valueArr[6]) {
    return symbolArr[6];
  }
}