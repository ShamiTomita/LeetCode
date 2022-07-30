/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 */
const mincostToHireWorkers = function(quality, wage, K) {
  const workers = wage
    .map((w, i) => ({ ratio: w / quality[i], quality: quality[i] }))
    .sort((a, b) => b.ratio - a.ratio);

  const pq = new Heap((a, b) => a.quality < b.quality);

  let qualitySum = 0;
  let result = Number.POSITIVE_INFINITY;

  while (workers.length) {
    const worker = workers.pop();
    qualitySum += worker.quality;
    pq.insert(worker);
    if (pq.getLength() > K) {
      qualitySum -= pq.pop().quality;
    }
    if (pq.getLength() === K) {
      result = Math.min(result, worker.ratio * qualitySum);
    }
  }

  return result;
};

class Heap {
  constructor(comparator) {
    this.arr = [];
    this.comparator = comparator;
  }

  siftDown(i) {
    const { arr } = this;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left >= arr.length) return;

    if (right >= arr.length) {
      if (this.comparator(arr[i], arr[left])) this.swap(i, left);
      return;
    }
    if (
      this.comparator(arr[left], arr[i]) &&
      this.comparator(arr[right], arr[i])
    ) {
      return;
    }

    if (this.comparator(arr[right], arr[left])) {
      this.swap(i, left);
      this.siftDown(left);
      return;
    }

    this.swap(i, right);
    this.siftDown(right);
  }

  bubbleUp(i) {
    const parent = Math.floor((i - 1) / 2);
    if (parent !== -1 && this.comparator(this.arr[parent], this.arr[i])) {
      this.swap(i, parent);
      this.bubbleUp(parent);
    }
  }

  insert(value) {
    this.arr.push(value);
    this.bubbleUp(this.arr.length - 1);
  }

  pop() {
    const { arr } = this;
    if (arr.length === 0) return -1;

    const popValue = arr[0];
    arr[0] = arr[arr.length - 1];
    arr.pop();
    this.siftDown(0);
    return popValue;
  }

  getLength() {
    return this.arr.length;
  }

  swap(a, b) {
    [this.arr[a], this.arr[b]] = [this.arr[b], this.arr[a]];
  }

  empty() {
    return this.arr.length === 0;
  }
}