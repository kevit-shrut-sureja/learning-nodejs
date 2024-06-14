const date = new Date();
console.log("date => ", date, typeof date); //2024-06-14T06:34:32.338Z bbject
console.log("date.getDate => ", date.getDate(), typeof date.getDate()); //14  number
console.log("date.getDay => ", date.getDay() ,typeof date.getDay()) //5 number this is the day of the week from the where Sunday - Saturday : 0 - 6
// similar one getUTCDay same sunday = 0 
console.log("date.getFullYear => ", date.getFullYear(),typeof date.getFullYear()) //2024 number
console.log("date.getHours => ", date.getHours() ,typeof date.getHours()) //12 number
console.log("date.getMilliseconds => ", date.getMilliseconds() ,typeof date.getMilliseconds())//338 number
console.log("date.getTime => ", date.getTime() ,typeof date.getTime())// 1718346872338 number
console.log("date.getTimezoneOffset => ", date.getTimezoneOffset() ,typeof date.getTimezoneOffset()) // -330 number
console.log("date.getUTCDate => ", date.getUTCDate() ,typeof date.getUTCDate()) //14 number
console.log("date.toString => ", date.toString(), typeof date.toString()); //Fri Jun 14 2024 12:04:32 GMT+0530 (India Standard Time) string
console.log("date.toDateString => ", date.toDateString() ,typeof date.toDateString()) // Fri Jun 14 2024  string
console.log("date.toUTCString => ", date.toUTCString(), typeof date.toUTCString()) //Fri, 14 Jun 2024 06:34:32 GMT string
console.log("date.toTimeString => ", date.toTimeString() ,typeof date.toTimeString()) // 12:04:32 GMT+0530 (India Standard Time) string
console.log("date.toLocalString => ", date.toLocaleString() ,typeof date.toLocaleString()) //14/6/2024, 12:04:32 pm string
//in the ISO string and the JSON string the time gets converted to the UTC in the ISO format
console.log("date.toISOString => ", date.toISOString() ,typeof date.toISOString()) // 2024-06-14T06:34:32.338Z string 
console.log("date.toJSON => ", date.toJSON(), typeof date.toJSON()) // 2024-06-14T06:34:32.338Z string

// the only difference in the toISO and toJSON is that we can customize the output like this 
Date.prototype.toJSON = function() {
    return this.toISOString().slice(0, 10); // Custom behavior to only return the date portion
}

const date1 = new Date();
console.log(date1.toJSON()); //2024-06-14


// to get the seconds
console.log(Math.floor(Date.now()/1000)) // 1718349921
console.log(Math.floor(Date.now()))      // 1718349921787

// set date Practice
console.log("set date time practice")
const event1 = new Date('August 19, 2024 23:15:30 GMT-3:00');

console.log(event1.getUTCDate());//20
// Expected output: 20
event1.setUTCDate(19);
console.log(event1.getUTCDate()); // 19

// setMinutes() Format
// setMinutes(minutesValue)
// setMinutes(minutesValue, secondsValue)
// setMinutes(minutesValue, secondsValue, msValue)
const event2 = new Date('August 19, 2024 23:15:30');
event2.setMinutes(45);
console.log(event2.getMinutes()); // 45
console.log(event2); // 2024-08-19T18:15:30.000Z
