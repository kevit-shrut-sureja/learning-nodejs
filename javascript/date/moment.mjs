import moment from "moment"

console.log(moment())// Moment<2024-06-14T14:40:12+05:30>
console.log(moment("1995-12-25").format())// 2024-06-14T14:40:12+05:30
console.log(moment("12-25-2024", "MM-DD-YYYY").format("DD%MM/YYYY")); // 25%12/2024
console.log(moment.utc().format());//2024-06-14T09:17:06Z


console.log(moment().local());
console.log(moment().utcOffset());
console.log(moment().calendar());
