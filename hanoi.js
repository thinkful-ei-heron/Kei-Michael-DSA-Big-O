let counter = 0;
function hanoi(disks, origin, destination, extra) {
  if (disks === 1) {
    console.log(
      `(${++counter}) Disc ${disks} moved from ${origin} to ${destination}`
    );
  } else {
    hanoi(disks - 1, origin, extra, destination);
    console.log(
      `(${++counter}) Disc ${disks} moved from ${origin} to ${destination}`
    );
    hanoi(disks - 1, extra, destination, origin);
  }
}
counter = 0;
hanoi(2, 'a', 'b', 'c'); //3
console.log('\b');
counter = 0;
hanoi(3, 'a', 'b', 'c'); //7
console.log('\b');
counter = 0;
hanoi(4, 'a', 'b', 'c'); //15
console.log('\b');
counter = 0;
hanoi(5, 'a', 'b', 'c'); //31
