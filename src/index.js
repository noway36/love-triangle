/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let counter = 0;
  for (let i = 0; i < preferences.length; i++){
    if (i + 1 === preferences[preferences[preferences[i] - 1] - 1]){
      counter++;
    }
  }
  return Math.floor(counter/3);
};
