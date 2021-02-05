function Spiral (num) {
  let matrix=[]
  let counter=1
  let startRow=0
  let endRow=num-1
  let startColumn=0
  let endColumn=num-1

  for (let i=0;i<num;i++){
      matrix.push([])
  }
 
  while (startColumn <= endColumn && startRow <= endRow) {
    // Start Row
    for (let i = startColumn; i <= endColumn; i++) {
      matrix[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // End Column
    for (let i = startRow; i <= endRow; i++) {
      matrix[i][endColumn] = counter;
      counter++;
    }
    endColumn--;

    // End Row
    for (let i = endColumn; i >= startColumn; i--) {
      matrix[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // Start Column
    for (let i = endRow; i >= startRow; i--) {
      matrix[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  return matrix;
}

