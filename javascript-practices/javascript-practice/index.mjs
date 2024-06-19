import { Statistics } from "./Statistics.mjs";

// 1
let company = 'Coding Academy';
// 2
console.log(company);
// 3
console.log(company.length);
// 4
company = company.toUpperCase();
console.log(company);
// 5
company = company.toLowerCase();
console.log(company);
// 6
company = company.slice(7);
console.log(company);

// 7
// this only works in the browser not in the node 
const str = 'You cannot end a sentence with because because because is a conjunction';
console.log(str.substr(0, 30) + str.substr(54));

// 8
console.log(company.includes('Academy'));

// 9
console.log(company.split(''));

// 10
company = 'Coding Academy';
console.log(company.split(' '));

// 11
const str2 = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(str2.split(', '));

// 12 
console.log(company.replace('Coding', 'Microsoft'));

// 13
console.log(company.charAt(10));

// 14
console.log(company.charCodeAt(7));

// 15 Use indexOf to determine the position of the first occurrence of c in Coding Academy
console.log(company.indexOf('c'));

// 16 Use lastIndexOf to determine the position of the last occurrence of c in Coding Academy.
console.log(company.lastIndexOf('c'));


// 17 Use indexOf to find the position of the first occurrence of the word because in the 
// following sentence:'You cannot end a sentence with because because because is a conjunction'
const str17 = 'You cannot end a sentence with because because because is a conjunction';
console.log(str17.indexOf('because'))

// 18 Use lastIndexOf to find the position of the first occurrence of the word because 
// in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const str18 = 'You cannot end a sentence with because because because is a conjunction';
console.log(str18.lastIndexOf('because'));


// 19 Use search to find the position of the first occurrence of the word because in the following 
// sentence:'You cannot end a sentence with because because because is a conjunction'
const str19 = 'You cannot end a sentence with because because because is a conjunction';
console.log(str19.search('because'));

// 20 Use trim() to remove if there is trailing whitespace at the beginning and the end of a 
// string.E.g ' Coding Academy '.
const str20 = ' Coding Academy ';
console.log(str20);
console.log(str20.trim())

// 21 Use startsWith() method with the string Coding Academy make the result true
console.log(company.startsWith('Cod'));

// 22 Use endsWith() method with the string Coding Academy make the result true
console.log(company.endsWith('y'));

// 23 Use match() method to find all the c’s in Coding Academy
console.log(company.match('c'));

// 24 Use match() to count the number all because's in the following 
// sentence:'You cannot end a sentence with because because because is a conjunction'
const str24 = 'You cannot end a sentence with because because because is a conjunction';
console.log(str24.match('because')) //! Doubt here matchAll will come ??

// 25 Use concat() and merge 'Coding' and 'Academy' to a single string, 'Coding Academy'
console.log('Coding '.concat('Academy'))

// 26 Use repeat() method to print Coding Academy 5 times
console.log(company.repeat(5));

// 27 Calculate the total annual income of the person by extract the numbers from the 
// following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
const str27 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
const numbers27 = str27.match(/\d+/g); //["5000", "10000", "15000"]
console.log(parseInt(numbers27[0])*12 + parseInt(numbers27[1]) + parseInt(numbers27[2]) * 12);

// 28 Write three JavaScript statement which provide truthy value.
const str28 = ";laskdf";
const obj28 = [ 1,2,3,4];
const num28 = 456;
if(str28 && obj28 && num28){
    console.log("all values are truthy.")
}


// 29 Write three JavaScript statement which provide falsy value.
const str29 = "";
const num29 = null;
const obj29 = NaN;
if(!str29 && !num29 && !obj29){
    console.log("all values falsy.")
}

// 30 Use all the following comparison operators to compare the following values: >, < >=, <=, !=, !==,===. 
// Which are true or which are false?
// 4 > 3
// 4 >= 3
// 4 < 3
// 4 <= 3
// 4 == 4
// 4 === 4
// 4 != 4
// 4 !== 4
// 4 != '4'
// 4 == '4'
// 4 === '4'

console.log("4 > 3 : ", (4 > 3));
console.log("4 >= 3 : ", (4 >= 3));
console.log("4 < 3 : ", (4 < 3));
console.log("4 <= 3 : ", (4 <= 3));
console.log("4 == 4 : ", (4 == 4));
console.log("4 === 4 : ", (4 === 4));
console.log("4 != 4 : ", (4 != 4));
console.log("4 !== 4 : ", (4 !== 4));
console.log("4 != '4' : ", (4 != '4'));
console.log("4 == '4' : ", (4 == '4'));
console.log("4 === '4' : ", (4 === '4'));


// 31 Below is data of language spoken Find Top 5 spoken language
// [{'English':25},{'French':45},{'Arabic':91},{'Spanish':24},{'Russian':9},{'Portuguese':9},{'Dutch':8},
// {'German':7},{'Chinese':5},{'Swahili':4},{'Serbian':4}]

const languages = [{'English':25},{'French':45},{'Arabic':91},{'Spanish':24},{'Russian':9},{'Portuguese':9},{'Dutch':8},{'German':7},{'Chinese':5},{'Swahili':4},{'Serbian':4}]
// sort the array and then slice it 
languages.sort((a, b) => {
    const aNum = parseInt(Object.values(a));
    const bNum = parseInt(Object.values(b));
    return bNum - aNum;
})
console.log(languages.slice(0,5))

// 32 Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode)
//  and measure of variability(range, variance, standard deviation). In addition to those measures find the min,
//  max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics 
// and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.

// input 
let ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const statistics = new Statistics(ages)
// code - end

// test 
console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
// Doubt ?? Formula !!
// console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

/** ---------Result
console.log(statistics.describe())
Count: 25
Sum:  744
Min:  24
Max:  38
Range:  14
Mean:  30
Median:  29
Mode:  (26, 5)
Variance:  17.5
Standard Deviation:  4.2
Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
 */

// 33 Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
// input 
let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
// 1. remove the extra symbol with replace and regex
// 2. split the sentence with space
//  also remove the .
// 3. cal frequency find max

const regex = /[!@#$%^&*?;,.]/g
const cleanSentence = sentence.replace(regex, '');
const words = cleanSentence.split(' ');
const frequency = {}

words.forEach(word => {
    if( word in frequency ) frequency[word]++;
    else frequency[word] = 1;
})
const sortedFrequency = Object.entries(frequency).sort((a,b) => {
    return b[1] - a[1]
}).slice(0,3);
const result = sortedFrequency.map((value) => {
    return {word : value[0], count : value[1]}
})
console.log(result)

/*
Output 
  [{word:'I', count:3}, {word:'teaching', count:2}, {word:'teacher', count:2}]

*/

// 34 Write a function named shuffle, it takes an array parameter and it returns a shuffled array.
function shuffle(arr = []){
    let n = arr.length;
    while(n){
        const i = Math.floor(Math.random() * n--);
        [arr[n], arr[i]] = [arr[i], arr[n]];
    }

    return arr;
}
// let n = arr.length;
// 		while (n) {
// 			const i = Math.floor(Math.random() * n--);
// 			[arr[n], arr[i]] = [arr[i], arr[n]];
// 		}
// 		return arr;
const arr = [ 1, 2, 3, 4, 5, 6, 7];
console.log(shuffle(arr))


// 35 Write a function which filter users who has scoresGreaterThan85, Write a 	function which addUser to
//  the user array only if the user does not 	exist. Write a function which addUserSkill which can add skill
//  to a user only if the user exist. Write a function which editUser if the user exist in the users array.

const users = [
    {
        name:'Brook', 
        scores:75,
        skills:['HTM', 'CSS', 'JS'],
        age:16
    },
    {
        name:'Alex', 
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    }, 
    {
        name:'David', 
        scores:75,
        skills:['HTM', 'CSS'],
        age:22
    }, 
    {
        name:'John', 
        scores:85,
        skills:['HTM'],
        age:25
    },
    {
        name:'Sara',
        scores:95,
        skills:['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name:'Martha', 
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    },
    {
        name:'Thomas',
        scores:90,
        skills:['HTM', 'CSS', 'JS'],
        age:20
    }
    ];

class que35{
    constructor(users = []){
        this.users = users;
    }
    scoresGreaterThan85(){
        return this.users.filter((value) => value.scores > 85);
    }
    addUser(newUser){
        const doesUserExist = this.users.find((value) => value.name === newUser.name);
        if(doesUserExist) return false;
        else {
            this.users = [...this.users, newUser];
            return this.users
        }
    }
    addUserSkill(userName, skill){
        let isSkillAdded = false;
        this.users.forEach((value) => {
            if(value.name === userName){
                value.skills = [...value.skills, skill] 
                isSkillAdded = true;
            }
        });
        return isSkillAdded
    }
    editUser(userDetails){
        let isUserAdded = false;
        this.users.forEach((value) => {
            if(value.name === userDetails.name){
                value = userDetails 
                isUserAdded = true;
            }
        });
        return isUserAdded
    }
    printUserDetails(){
        console.log(this.users)
    }
}
const obj = new que35(users);
console.log(obj.scoresGreaterThan85());
console.log(obj.addUser({
    name:'Thomas',
    scores:90,
    skills:['HTM', 'CSS', 'JS'],
    age:20
}));
console.log(obj.addUser({
    name:'Shrut',
    scores:90,
    skills:['HTM', 'CSS', 'JS'],
    age:20
}));

console.log(obj.addUserSkill('Shrut', "NextJS"));
console.log(obj.addUserSkill('Jay', "NextJS"));
obj.printUserDetails();
console.log(obj.editUser({
    name:'Shrut',
    scores:1000,
    skills:['JS'],
    age:21
}))

console.log(obj.editUser({
    name:'Jay',
    scores:1000,
    skills:['JS'],
    age:21
}))
obj.printUserDetails()


// 36 Create an empty object called dog

const dog = {};

// 37 Print the the dog object on the console
console.log(dog);

// 38 Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name="tommy";
dog.legs = 4;
dog.color = 'black'
dog.age = 7;
dog.bark = () => 'woof woof';

// 39 Get name, legs, color, age and bark value from the dog object

console.log(dog);

// 40 Set new properties the dog object: breed, getDogInfo
dog.breed = "labrador"
dog.getDogInfo = function(){
    return dog;
}


// 41 Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has 
// totalIncome, totalExpense, accountInfo, addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and
//  its description and the same for expenses.

const personAccount = {
    firstName : "shrut", 
    lastName: "sureja", 
    incomes : { 
        salary : 10000,
        stockMarket : 1000,
        tution : 500
    }, 
    expenses : { 
        travel : 600, 
        food : 5000 
    },
    totalIncome(){
        let total = 0;
        for (const [keys, values] of Object.entries(this.incomes)){
            total+=values;
        }
        return total;
    },
    totalExpense(){
        let total = 0;
        for (const [keys, values] of Object.entries(this.expenses)){
            total+=values;
        }
        return total;
    },
    accountInfo(){
        return {
            firstName : this.firstName,
            lastName : this.lastName
        }
    },
    addIncome(incomeName, incomeValue){
        this.incomes[incomeName] = incomeValue
        return this.incomes;
    },
    addExpense(expenseName, expenseValue){
        this.incomes[expenseName] = expenseValue
        return this.expenses
    },
    accountBalance(){
        return this.totalIncome() - this.totalExpense()
    }
};
console.log(personAccount.totalIncome());
console.log(personAccount.accountInfo());
console.log(personAccount.totalExpense());
console.log(personAccount.accountBalance());
console.log(personAccount.addIncome("extra", 5000));
console.log(personAccount.addExpense("extra", 5000));

// 42 Count logged in users,count users having greater than equal to 50 points from the following object.
const users2 = [
    {
        name:'Brook', 
        scores:75,
        skills:['HTM', 'CSS', 'JS'],
        age:16
    },
    {
        name:'Alex', 
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    }, 
    {
        name:'David', 
        scores:75,
        skills:['HTM', 'CSS'],
        age:22
    }, 
    {
        name:'John', 
        scores:85,
        skills:['HTM'],
        age:25
    },
    {
        name:'Sara',
        scores:95,
        skills:['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name:'Martha', 
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    },
    {
        name:'Thomas',
        scores:90,
        skills:['HTM', 'CSS', 'JS'],
        age:20
    }
    ];
console.log("logged in users : ", users2.length);
console.log(users2.filter((value) => value.scores >= 50).length);

// 43 Set your name in the users object without modifying the original users object
const newUsersArr = [...users2];
console.log("before users : ", users2);
newUsersArr.push({name: "shrut",
    score :100,
    skills:["NODE"],
    age : 21
})
console.log("after users : ", users2);
console.log("After newUsers :", newUsersArr);

// 44 Get all keys or properties of users object
console.log(Object.keys(users2[0]));

// 45 Get all the values of users object
console.log(Object.values(users2[0]));


// 46 Change skills array to JSON using JSON.stringify(). 
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
console.log(JSON.stringify({skills}))

// 47 Stringify the age variable. 
let age = 250; 
console.log(JSON.stringify({age}));

// 48 Stringify the isMarried variable. 
let isMarried = true;
console.log(JSON.stringify({isMarried}));

// 49 Stringify the student object.
const student = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}

console.log(JSON.stringify(student));

// 50 Stringify the above students object with only firstName, lastName and skills properties.
console.log(JSON.stringify({firstName : student.firstName, lastName : student.lastName, skills : student.skills}));