//write a method to return all subsets of a set

function powerSet(ray) {
  let subset = [];
  function recursive(currSet, remainingSet) {
    subset.push(currSet); // [[]]
    for (let i = 0; i < remainingSet.length; i++) {
      recursive(currSet.concat([remainingSet[i]]), remainingSet.slice(i + 1));
    }
  }
  recursive([], ray);
  return subset;
}

let array = [1, 2, 3, 4];
console.log(powerSet(array));
