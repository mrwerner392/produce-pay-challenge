// handle one single evolution. call repeatedly to get future evolutions
const evolve = grid => {
  // define and build new grid to hold the new values
  const newGrid = []
  for (let i = 0; i < 10; i++) {
    newGrid.push(new Array(10))
  }
  // iterate through each element of nxn the input grid
    // first check value, then check which rule applies for that value (using surrounding input grid values)
    // determine value for new grid
    // update appropriate element in new grid
  // return new grid
}

module.exports = evolve