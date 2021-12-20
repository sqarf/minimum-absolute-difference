const minimumAbsDifference = (arr) => {
  arr.sort((a, b) => a - b);

  const ans = [];
  let minDiff = Infinity;

  for (let i = 1; i < arr.length; i++)
    minDiff = Math.min(minDiff, arr[i] - arr[i - 1]);

  for (let i = 1; i < arr.length; i++)
    if (arr[i] - arr[i - 1] === minDiff) ans.push([arr[i - 1], arr[i]]);

  return ans;
};

// Ex.1
console.log(
  minimumAbsDifference([4, 2, 1, 3])
)

// Ex.2
console.log(
  minimumAbsDifference([1, 3, 6, 10, 15])
)

// Ex.3
console.log(
  minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27])
)
