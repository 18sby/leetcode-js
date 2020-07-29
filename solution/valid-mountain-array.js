var validMountainArray = function (A) {
  if (A.length < 3) return false;

  let n = A.length, uphill = true;

  for (let i = 1; i < n; i++) {
    let curr = A[i], last = A[i - 1];

    if (curr === last) return false;

    if (i === 1 && curr < last) return false;

    if (curr < last && uphill) {
      uphill = false;
      continue;
    }

    if (!uphill && curr > last) return false;
  }

  return uphill === false;
};