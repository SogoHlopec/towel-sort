
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return [];
  }
  let result = [];
  for (i = 0; i < matrix.length; ++i) {
    for (j = 0; j < matrix[i].length; ++j) {
      let idX = i % 2 === 0 ? j : (matrix[i].length - 1 - j);
      result.push(matrix[i][idX]);

    }
  }
  return result;
}
