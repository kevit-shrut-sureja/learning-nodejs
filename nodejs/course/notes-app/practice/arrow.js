const obj = {
    name : 'Birthday Party',
    guest : ["Jay", "Shrut", "Het"],
    // printGuestList : function (){
    //     console.log(`Guest List for ${this.name}`); // Guest List for Birthday Party
    // }
    // printGuestList : () => {
    //     console.log(`Guest List for ${this.name}`); // Guest List for undefined
    // }
    // printGuestList(){
    //     console.log(`Guest List for ${this.name}`); // Guest List for Birthday Party
    // }

    // printGuestList(){
    //     console.log(`Guest List for ${this.name}`); // Guest List for Birthday Party
    //     this.guest.forEach(function (guest){
    //         console.log(`Invite ${guest} for ${this.name}`);
    //         // Invite Jay for undefined
    //         // Invite Shrut for undefined
    //         // Invite Het for undefined
    //     })
    // }

    printGuestList(){
        console.log(`Guest List for ${this.name}`); // Guest List for Birthday Party
        this.guest.forEach((guest) => {
            console.log(`Invite ${guest} for ${this.name}`);
            // Invite Jay for Birthday Party
            // Invite Shrut for Birthday Party
            // Invite Het for Birthday Party
        })
    }
}
obj.printGuestList()

//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo(){
        return this.tasks.filter((task) => !task.completed)
    }
}

console.log(tasks.getTasksToDo())