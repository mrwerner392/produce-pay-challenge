const EVOLUTIONS = 19 // if input is generation 1, this will give generation 20
const GRID = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,1,1,0,0,0,0,0,0],
  [0,0,0,0,2,0,0,0,0,0],
  [0,0,0,1,2,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,1,0,0,0,0,0,0,0],
  [0,2,1,0,0,0,0,0,0,0],
  [0,2,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
]

// handle one single evolution. call repeatedly to get future evolutions
const evolve = grid => {
  // define and build new grid to hold the new values
  const newGrid = []
  for (let i = 0; i < grid.length; i++) {
    newGrid.push(new Array(grid.length))
  }

  // iterate through each element of nxn the input grid
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      // get current grid element value
      const currentVal = grid[i][j]
      // get necessary data about neighbor elements
      const { neighbors, totalNeighborCount } = getNeighborData(grid, i, j)
      // use element value and neighbor data to set the new grid element value
      newGrid[i][j] = getNewVal(currentVal, neighbors, totalNeighborCount)
    }
  }

  // return new grid
  return newGrid
}

// return a list of the neighboring element values as well as the count of existing (non-empty) neighbors
const getNeighborData = (grid, currentRow, currentIndex) => {
  const neighbors = []
  let totalNeighborCount = 0

  // iterate through the +- 1 row/column elements and update neighbor variables accordingly
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

// return the new grid element value
const getNewVal = (currentVal, neighbors, totalNeighborCount) => {
  if (!currentVal) {
    if (neighbors.filter(n => n === 2).length === 2) {
      return 1
    } else {
      return 0
    }
  } else if (currentVal === 1) {
    if (totalNeighborCount >= 5 || totalNeighborCount <= 1) {
      return 0
    } else {
      return 2
    }
  } else if (currentVal === 2) {
    if (totalNeighborCount >= 3 || totalNeighborCount === 0) {
      return 0
    } else {
      return 3
    }
  } else if (currentVal === 3) {
    return 0
  }
}

let result = GRID
for (let i = 1; i <= EVOLUTIONS; i++) {
  result = evolve(result)
}

console.table(result)

module.exports = evolve