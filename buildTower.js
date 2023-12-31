// Write a function that takes in a number. It should return a “tower” of *. 
// The tower will be an array of strings.
// The number passed in tells you how many floors the tower should have.
// The first floor should have 1 block, the 2nd should have 3 blocks, the 3rd should have 5 blocks, and so on.
// Each block is represented by a *.
// For example, a tower of 3 floors looks like this (note the spacing):
// [
//     '  *  ',
//     ' *** ',
//     '*****'
// ]
// and a tower of 6 floors looks like this:
// [
//     '     *     ',
//     '    ***    ',
//     '   *****   ',
//     '  *******  ',
//     ' ********* ',
//     '***********'
// ]



function tower (numFloors) {
    towerArr = []
for(let i=0; i<numFloors; i++){
   let spaces = " ".repeat(numFloors-1-i)
   let block = "*".repeat(i*2+1)
 towerArr.push(spaces+block+spaces)

}
 return towerArr
}

console.log(tower(8))