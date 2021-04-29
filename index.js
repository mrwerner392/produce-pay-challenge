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
      let newVal
      if (!currentVal) {

      } else if (currentVal === 1) {

      } else if (currentVal === 2) {

      } else if (currentVal === 3) {

      }
    }
  }

  // return new grid
}

module.exports = evolve