// handle one single evolution. call repeatedly to get future evolutions
const evolve = grid => {
  // define and build new grid to hold the new values
  const newGrid = []
  for (let i = 0; i < grid.length; i++) {
    newGrid.push(new Array(grid.length))
  }

  // iterate through each element of nxn the input grid
    // first check value, then check which rule applies for that value (using surrounding input grid values)
    // determine value for new grid
    // update appropriate element in new grid
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      const currentVal = grid[i][j]
      const { neighbors, totalNeighborCount } = getNeighborData(grid, i, j)
      let newVal
      
      if (!currentVal) {
        if (neighbors.filter(n => n === 2).length === 2) {
          newVal = 1
        } else {
          newVal = 0
        }
      } else if (currentVal === 1) {
        if (totalNeighborCount >= 5 || totalNeighborCount <= 1) {
          newVal = 0
        } else {
          newVal = 2
        }
      } else if (currentVal === 2) {
        if (totalNeighborCount >= 3 || totalNeighborCount === 0) {
          newVal = 0
        } else {
          newVal = 3
        }
      } else if (currentVal === 3) {
        newVal = 0
      }

      newGrid[i][j] = newVal
    }
  }

  // return new grid
  return newGrid
}

const getNeighborData = (grid, currentRow, currentIndex) => {
  const neighbors = []
  let totalNeighborCount = 0

  // iterate through surrounding indexes and add to list of neighbors
  for (let k = -1; k <= 1; k++) {
    for (let l = -1; l <= 1; l++) {
      if (k === 0 && l === 0) continue // this is the current element, ignore
      const row = currentRow + k
      const col = currentIndex + l
      if (!grid[row] || !grid[row][col]) {
        neighbors.push(0)
      } else {
        neighbors.push(grid[row][col])
        totalNeighborCount++
      }
    }
  }

  return { neighbors, totalNeighborCount }
}

module.exports = evolve