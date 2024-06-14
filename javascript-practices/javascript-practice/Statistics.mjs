// code - start
export class Statistics {
    constructor(ages = []) {
        this.ages = ages;
    }
    count(arr = this.ages) {
        return arr.length;
    }
    sum(arr = this.ages) {
        const totalSum = arr.reduce((total, currValue) => total += currValue, 0);
        return totalSum;
    }
    min() {
        return this.ages.reduce((leastValue, currValue) => leastValue > currValue ? currValue : leastValue, Infinity);
    }
    max() {
        return this.ages.reduce((leastValue, currValue) => leastValue < currValue ? currValue : leastValue, -Infinity);
    }
    // range is max - min
    range() {
        return this.max() - this.min();
    }
    // mean is the average of all
    mean(arr = this.ages) {
        return Math.round(this.sum(arr) / this.count(arr));
    }
    // median is middle element in the ascending or decending order 
    median() {
        const sortedAges = [...this.ages].sort(); // making the copy of the ages then sorting it
        const n = this.count();
        console.log(sortedAges, n);
        if (n % 2 === 0) { // even
            return sortedAges.slice((n - 1) / 2, (((n - 1) / 2) + 1) + 1);
        }
        else { //odd
            return sortedAges.slice((n) / 2, ((n) / 2) + 1);
        }
    }
    // mode means the maximum frequency
    mode() {
        const frequency = {};
        // adding them to map
        this.ages.forEach((age) => {
            if (age in frequency) {
                // age already exists then
                frequency[age]++;
            }
            else {
                frequency[age] = 1;
            }
        });
        // finding the max one
        let mode = null;
        let count = null;
        for (const [key, value] of Object.entries(frequency)) {
            if (count == null || count < value) {
                mode = key;
                count = value;
            }
        }
        return { mode, count };
    }
    var() {
        // find mean
        const mean = this.mean();
        // subtract mean from all the values and square them
        const varAges = this.ages.map((age) => {
            return ((age - mean) * (age - mean));
        });
        const variance = (this.sum(varAges) / (this.count(varAges)));
        return variance;
    }
    std() {
        return Math.sqrt(this.var()).toFixed(1);
    }
}
