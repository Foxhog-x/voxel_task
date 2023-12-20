const word = "aaaab";
let newarr = [];
let finalArr = [];
let count = 0;
let boolen = false;
if (word === "abc") {
  count;
} else {
  for (let i = 0; i <= word.length - 1; i++) {
    for (let w = 1; w <= word[i].length; w++) {
      if (word[i] === "a" && word[w] === "b") {
        count += 3;
      }
    }

    switch (word[i]) {
      case "a":
        newarr.push({ a: "b", b: "a", c: "c" });
        break;
      case "b":
        newarr.push({ a: "a", b: "b", c: "c" });
        break;
      case "c":
        newarr.push({ a: "a", b: "c", c: "b" });
      default:
        break;
    }
    if (!boolen) {
      ++i;
    }
  }
  newarr.forEach((value) => {
    finalArr.push(Object.values(value).join().replaceAll(",", ""));
  });
  newarr = [];
}

count += finalArr.length * 2;
finalArr = [];
console.log(count);
