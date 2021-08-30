// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
  }

  for (i = 0; i < matrix.length; i++) {
    if (i % 2) {
      matrix[i].reverse();
    }
  }
  return matrix.join().split(",");
};

