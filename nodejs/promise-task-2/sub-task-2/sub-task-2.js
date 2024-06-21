const writeData = require("../utils");

async function fetchingRequiredData(email, title){
    // since all the emails in the comments have a frequency of 1 we dont need to use the title
    const matchingEmailComments = await (await fetch("https://jsonplaceholder.typicode.com/comments?" + new URLSearchParams({
        email : email
    }))).json();
    if(matchingEmailComments.length === 0){
        return ("No comment with this id email : " + email);
    }

    // matching the title with the email
    const commentDetailsArray = matchingEmailComments.filter(comment => comment.name === title);
    if(commentDetailsArray.length === 0){
        return ("No comment with this id email : " + email + " and title : "+ title);
    }
    const commentDetails = commentDetailsArray[0];

    // fetching posts
    const postDetailsArray = await (await fetch("https://jsonplaceholder.typicode.com/posts?" + new URLSearchParams({
        id : commentDetails.postId
    }))).json()
    if(postDetailsArray.length === 0){
        return "No Post Found"
    }
    const postDetails = postDetailsArray[0]

    // fetching userDetails from post
    const userDetailsArray = await (await fetch("https://jsonplaceholder.typicode.com/users?" + new URLSearchParams({
        id : postDetails.userId
    }))).json();
    if(userDetailsArray.length === 0){
        return "No Post Found"
    }
    const userDetails = userDetailsArray[0]

    const requiredDetails = {
        username : userDetails.username, 
        name : userDetails.name, 
        email: userDetails.email
    };

    writeData("userData.json", requiredDetails);
    console.log(requiredDetails);
}

// fetchingRequiredData("Khalil@emile.co.uk", "porro repellendus aut tempore quis hic");
fetchingRequiredData("Blake_Spinka@robyn.info", "quia commodi molestiae assumenda provident sit incidunt laudantium");
// fetchingRequiredData("Raheem_Heaney@gretchen.biz", "sit et quis");
// fetchingRequiredData("Kenton_Vandervort@friedrich.com", "culpa eius tempora sit consequatur neque iure deserunt");


const findingDummyEmailsFromComments = async() => {
    const allComments = await (await fetch("https://jsonplaceholder.typicode.com/comments")).json();
    const emailFrequency = {};
    allComments.forEach(comment => {
        if(comment.email in emailFrequency){
            emailFrequency[comment.email]++;
        }
        else {
            emailFrequency[comment.email] = 1;
        }
    });
    writeData("commentEmailFrequency.json", emailFrequency)
    console.log(emailFrequency)
}