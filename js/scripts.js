function numberToRomanNumeral(input) {
  return input.toString();
  //take input
  //convert input into separete digit levels (i.e. 777 => 700 and 70 and 7)
  //Then call on each seperate digit level function to convert each to symbols
  //Then those functions return separete digit levels as symbols
  //Then concat symbols and return to user 
}

function valueToSymbol (input) {
  const symbolArr = ["I", "V", "X", "L", "C", "D", "M", "0 Is not a Roman Numeral"];
  const valueArr = [1, 5, 10, 50, 100, 500, 1000, 0];
  let index = 0;
  let convertsym = [];
  valueArr.forEach(function(element) { 
    if (element === input) {
      convertsym.push(symbolArr[index]);
    }
    index++;
  });
}
  
//   if (input === valueArr[0]) {
//     return symbolArr[0];
//   }
//   else if (input === valueArr[1]) {
//     return symbolArr[1];
//   }
//   else if (input === valueArr[2]) {
//     return symbolArr[2];
//   }
//   else if (input === valueArr[3]) {
//     return symbolArr[3];
//   }
//   else if(input === valueArr[4]) {
//     return symbolArr[4];
//   }
//   else if(input === valueArr[5]) {
//     return symbolArr[5];
//   }
//   else if (input === valueArr[6]) {
//     return symbolArr[6];
//   }
//   else if (input === valueArr[7]) {
//     return symbolArr[7];
//   }
// }

function oneToNine(input) {
  const symbolArr = ["II", "III", "IV", "VI", "VII", "VII", "IX"]
  const valueArr = [2, 3, 4, 6, 7, 8, 9,]
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


valueArr.forEach(element) {
  if (input === valueArr[i]) {
    return symbolArr[]
  }
}