// Find the smallest integer in the array : https://www.codewars.com/kata/55a2d7ebe362935a210000b2

class SmallestIntegerFinder {
  findSmallestInt(args) {
    var small = args[0];
    for (let i = 0; i < args.length; i++) {
      if (args[i] <= small) {
        small = args[i];
      }
    }
    return small;
  }
}


