const input = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1],
];

function getIslands(ocean) {
  let numberOfIslands = 0;
  let maxSize = 0;
  let islandSize = 0;

  function dfs(i, j) {
    if (
      i >= 0 &&
      j >= 0 &&
      i < ocean.length &&
      j < ocean[i].length &&
      ocean[i][j] === 1
    ) {
      ocean[i][j] = 0;
      islandSize += 1;

      //making calls on all direction
      dfs(i + 1, j);
      dfs(i, j + 1);
      dfs(i - 1, j);
      dfs(i, j - 1);
    }
  }

  for (let i = 0; i < ocean.length; i++) {
    for (let j = 0; j < ocean[i].length; j++) {
      if (ocean[i][j] === 1) {
        numberOfIslands += 1;
        islandSize = 0;
        dfs(i, j);

        maxSize = Math.max(maxSize, islandSize);
      }
    }
  }

  return { numberOfIslands, maxSize };
}

console.log(getIslands(input));
