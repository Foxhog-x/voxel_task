let data = "aaaaab";

const newarr = [];
const finalArr = [];
let count = 0;
if (data === "abc") {
  count;
} else {
  console.log(data, "data");
  for (let i = 0; i <= data.length - 1; i++) {
    if (data[i] === "a" && data[i + 1] === "b") {
      count += 1;
    }
    switch (data[i]) {
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
  }
}

newarr.forEach((value) => {
  finalArr.push(Object.values(value).join().replaceAll(",", ""));
});
console.log(finalArr);
console.log((count += finalArr.length * 2));
