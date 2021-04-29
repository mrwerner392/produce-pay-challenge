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
      const neighbors = []
      const totalNeighborCount = 0
      let newVal

      // iterate through surrounding indexes and add to list of neighbors
      for (let k = -1; k <= 1; k++) {
        for (let l = -1; l <= 1; l++) {
          if (k === 0 && l === 0) continue // this is the current element, ignore
          const row = i + k
          const col = j + l
          if (!grid[row] || !grid[row][col]) {
            neighbors.push(0)
          } else {
            neighbors.push(grid[row][col])
            totalNeighborCount++
          }
        }
      }
      
      if (!currentVal) {
        if (neighbors.filter(n => n === 2).length === 2) {
          newVal = 1
        } else {
          newVal = 0
        }
      } else if (currentVal === 1) {

      } else if (currentVal === 2) {

      } else if (currentVal === 3) {

      }
    }
  }

  // return new grid
}

module.exports = evolve