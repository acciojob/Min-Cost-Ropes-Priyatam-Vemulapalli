function mincost(arr) {
  // If there's only one rope, no cost is needed
  if (arr.length <= 1) return 0;

  // Create a min-heap using a priority queue
  const minHeap = arr.slice().sort((a, b) => a - b); // Sort the array to mimic a min-heap
  let totalCost = 0;

  while (minHeap.length > 1) {
    // Extract the two smallest elements
    const first = minHeap.shift();
    const second = minHeap.shift();
    
    // Calculate the cost of connecting these two ropes
    const cost = first + second;
    totalCost += cost;

    // Insert the new rope back in the sorted position to maintain min-heap property
    minHeap.push(cost);
    minHeap.sort((a, b) => a - b);
  }

  return totalCost;
}


// do not edit below this line
module.exports = mincost;
