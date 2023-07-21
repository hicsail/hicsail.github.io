export default function Counter(array) {
  var count = {};
  array.forEach((val) => (count[val] = (count[val] || 0) + 1));
  return count;
}
