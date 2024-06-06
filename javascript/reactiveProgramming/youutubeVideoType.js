class Video {
    constructor(title){
        this.title = title;
    }
}

class Channel {
    constructor(name, subs = []){
        this.name = name;
        this.subs = subs;
        this.videos= [];
    }

    // Method for handling subscription
    subscribe(user) {
        this.subs.push(user);

        const userIndex = this.subs.length - 1;

        const unsubscribe = () => {
            this.subs.splice(userIndex, 1);
          };

        return unsubscribe;
    }

    // for uploading a video
    publish(video){
        this.videos.push(video);
        this.subs.forEach((user) => {
            //  Notify the user event will be here
            user.notify(`${this.name} has uploaded new video named => ${video.title}`);
        })
    }
}

class User {
    constructor(email, subscribedChannel = []){
        this.email = email;
        this.subscribedChannel = subscribedChannel; // this will hold the function if unsubscription
    }
    notify(message){
        console.log(`User : ${this.email} \nNotification : ${message}\n`);
    }
}

function main(){
    // creatng new users
    const naman = new User("Naman");
    const shrut = new User("Shrut");
    const jay = new User("Jay");
    const het = new User("Het");
    // creating a new channel
    const codingChannel = new Channel("Coding");

    // Now adding new videos to the channel
    const subscriptions = [naman, shrut, het].map((user) => {
        return codingChannel.subscribe(user);
    });
    
    const newVideo = new Video("What is reactive programming ?")
    codingChannel.publish(newVideo);

    const unSubscribeNaman = subscriptions[0];
    unSubscribeNaman();

    const yetAnotherVideo = new Video("What are Pomises in JS !! ");
    codingChannel.publish(yetAnotherVideo);
    
}

main();

/*
Output :

User : Naman 
Notification : Coding has uploaded new video named => What is reactive programming ?

User : Shrut 
Notification : Coding has uploaded new video named => What is reactive programming ?

User : Het 
Notification : Coding has uploaded new video named => What is reactive programming ?

User : Shrut 
Notification : Coding has uploaded new video named => What are Pomises in JS !! 

User : Het 
Notification : Coding has uploaded new video named => What are Pomises in JS !! 

 */