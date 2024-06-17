// 1 Declare an empty array;
const arr = [];

// 2 Declare an array with more than 5 number of items
const arr2 = [1,2,3,4,5];

// 3 Find the length of your array
console.log("length of arr2 : ",arr2.length);

// 4 Get the first item, the middle item and the last item of the array
console.log("First item : ", arr2[0]);
console.log("Middle item : ", arr2[Math.floor(arr2.length / 2)]);
console.log("Last item : ", arr2[arr2.length - 1]);


// 5 Declare an array called mixedDataTypes, put different data types and in your array and the array size should be greater than 5
const mixedDataTypes = [ 1, true, "Hello World", 5.21, ["inner array"], {name : "shrut"}]


// 6 Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon.
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle","Amazon"];


// 7 Print the array using console.log()
console.log(itCompanies);

// 8 Print the number of companies in the array/
console.log("Number of companies in array : ", itCompanies.length);

// 9 Print the first company, middle and last company
console.log("First Company : ", itCompanies[0]);
console.log("Middle Company : ", itCompanies[Math.floor(itCompanies.length / 2)]);
console.log("Last Company : ", itCompanies[itCompanies.length - 1]);


// 10 Print out each company/
itCompanies.forEach(company => console.log(company))

// 11 Change companies to uppercase and print them out
const upperCaseItCompanies = itCompanies.map(company => company.toUpperCase())
console.log(upperCaseItCompanies);

// 12 Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
let companyString = '';
itCompanies.forEach((value, index) => {
    if(index === itCompanies.length - 1){
        companyString += ' and ' + value;
    }
    else if(index === 0){
        companyString += value; 
    }else {
        companyString += ', ' + value; 
    }
})
console.log(`${companyString} are big IT companies.`);

// 13 Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found.
function doesCompanyExist (company){
    const result = itCompanies.find(value => company.toUpperCase() === value.toUpperCase());
    if(result)return true;
    return false
}
console.log("Kevit : ", doesCompanyExist("kevit"))
console.log("google : ", doesCompanyExist("google"))

// 14 Filter out companies which have more than one 'o' without the filter method
const companiesWithMoreThanOneO = [];
itCompanies.forEach( company =>{
    let count = 0;
    for( letter of company){
        if(letter === 'o' || letter === 'O')count++;
    }
    if(count > 1) companiesWithMoreThanOneO.push(company);
})
console.log(companiesWithMoreThanOneO)

// 15 Sort the array using sort() method
console.log(itCompanies.sort());

// 16 Reverse the array without reverse method

for(let i = 0; i <= (itCompanies.length -1)/2 ; i++){
    [itCompanies[i] , itCompanies[(itCompanies.length -1) - i]] = [itCompanies[(itCompanies.length -1) - i] ,itCompanies[i]] 
}
console.log(itCompanies);

// 17 Reverse the array using reverse() method
itCompanies.sort() // first sorting them
itCompanies.reverse();
console.log(itCompanies);

// 18 Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3));

// 19 Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3));

// 20 Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(Math.floor((itCompanies.length-1)/2) , itCompanies.length % 2 === 0 ? itCompanies.length/2 + 1  :  (itCompanies.length/2) + 1));


// 21 Remove the first IT company from the array
console.log("before : ", itCompanies);
console.log("removed",itCompanies.shift());
console.log("after : ", itCompanies);

// 22 Remove the middle IT company or companies from the array
console.log("before : ", itCompanies);
console.log("removed : ",itCompanies.splice(Math.floor((itCompanies.length-1)/2) , itCompanies.length % 2 === 0 ? 2  :  1))
console.log("after : ", itCompanies);


// 23 Remove the last IT company from the array
console.log("before : ", itCompanies);
console.log("removed : ", itCompanies.pop());
console.log("after : ", itCompanies);

// 24 Remove all IT company
console.log("before : ", itCompanies);
console.log("removed : ", itCompanies.splice(0))
console.log("after : ", itCompanies);
