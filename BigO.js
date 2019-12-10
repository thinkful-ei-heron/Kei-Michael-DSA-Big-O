// 1-1. Because you are only yelling out once, and the call will work no matter how many people there
// are, it is constant time. O(1)
// 1-2. This is linear, because you are doing one operation for each person, which means it grows in 
// linear proportion to the number of people. O(n)
// 2. This is constant because there is only a constant number of operations happening (modullo, this is 
// assuming that modullo is a constant time operation)
// 3. This is O(n*m) because there are two arrays of different lengths (n and m), and we are iterating 
// through one array and at every index of the outer array we are iterating through the entire inner array. 
// 4. This is O(n) because we are iterating once through the given array (length n). 
// 5. This is O(n) because we are iterating once through the given array (best case O(1), worst case O(n), 
// average case O(n))
// 6. This is O(n^2) because there is a pair of nested for loops, although the inner loop will run a smaller
// and smaller number of times on each iteration of the outer loop it still does not decrease the running time
// to hit anything lower than O(n^2).
// 7. This is O(n) because the for loop is simply iterating once (the value of n times), all operations inside
// the for loop are constant time (check value, subtract, or close enough probably (push)).
// 8. Everything inside the while loop runs in constant time. At worst the array will be halved log(n) times,
// so the running time is O(logn).
// 9. Assuming that Math.random is a constant time operation, this is O(1).
// 10. This is O(n) because it is checking every incremental whole number up to n starting at 2 and then doing
// some constant time operation (modullo) within the for loop (finding prime numbers).

//11-1. After 7 recursive calls, the two largest disks are on rod A and the three smallest are on rod B. 
//11-2. For three disks, 7 moves, for four disks, 15 moves, and for five disks, 31 moves.
//11-3. This algorithm takes 2^n -1 moves (based on the number of disks), so it is exponential time O(2^n).

function hanoi(disks, origin, destination, extra){
  if (disks === 1) {
    console.log(`Disc ${disks} moved from ${origin} to ${destination}`);

  } else {
    hanoi(disks-1, origin, extra, destination);
    console.log(`Disc ${disks} moved from ${origin} to ${destination}`);
    hanoi(disks-1, extra, destination, origin);
  }
}

hanoi(5, 'a', 'b', 'c');


