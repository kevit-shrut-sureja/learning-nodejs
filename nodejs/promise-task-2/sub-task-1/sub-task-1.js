const writeData = require('../utils.js')
async function fetchingRequiredData(username){
    const start = Date.now();
    const requiredData = {};
    const userDataResponse = await fetch("https://jsonplaceholder.typicode.com/users?" + new URLSearchParams({
        username : username
    }));
    const userDataArray = await userDataResponse.json();
    
    if(userDataArray.length === 0) {
        return "Username does not exist.";
    }

    const userData = userDataArray[0];

    requiredData.username = userData.username;
    requiredData.name = userData.name;
    requiredData.email = userData.email;
    requiredData.city = userData.address.city;
    requiredData.posts = [];

    const userId = userData.id;

    const usersAllPostsResponse = await fetch("https://jsonplaceholder.typicode.com/posts?" + new URLSearchParams({
        userId : userId
    }));
    const usersAllPostsData = await usersAllPostsResponse.json();

    // all the request at one point from the same time
    const commentsOnAllPostPromises = usersAllPostsData.map( post => fetch("https://jsonplaceholder.typicode.com/comments?" + new URLSearchParams({
        postId : post.id
    })));
    
    const commentsOnAllPostResponse = await Promise.all(commentsOnAllPostPromises);
    // method - 1 
    // const commentsOnAllPostData = (await Promise.all(commentsOnAllPostResponse.map(response => response.json())));
    // usersAllPostsData.forEach((post,index) => {
    //     const requiredCommentsData = commentsOnAllPostData[index].map((comment) => {
    //         return {
    //             name : comment.name,
    //             body : comment.body
    //         }
    //     });
    //     requiredData.posts.push({
    //         title : post.title,
    //         comments : requiredCommentsData
    //     })
    // })
    
    //method - 2
    const commentsOnAllPostData = (await Promise.all(commentsOnAllPostResponse.map(response => response.json()))).flat(1);
    usersAllPostsData.forEach(post => {
        const commentsOnEachPost = commentsOnAllPostData.filter(comment => post.id === comment.postId);
        const requiredCommentsData = commentsOnEachPost.map((comment) => {
            return {
                name : comment.name,
                body : comment.body
            }
        });
        requiredData.posts.push({
            title : post.title,
            comments : requiredCommentsData
        })
    })

    console.log(`Time taken : ${Date.now() - start}ms`)
    writeData("comments.json", commentsOnAllPostData)
    writeData("data.json", requiredData)
    console.log(requiredData);
}

fetchingRequiredData("Bret")

/**
Required Data format

{
   "username":"",
   "name":"",
   "email":"",
   "city":"",
   "posts":[
      {
         "title":"",
         "comments":[
            {
               "name":"",
               "body":""
            }
         ]
      }
   ]
}
 */