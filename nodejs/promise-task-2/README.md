# Promise task 2

API to be used is [JSON PLACEHOLDER](https://jsonplaceholder.typicode.com/)

## Sub task - 1

Input Type 
```
{
  username: “any_given_username_from_data”
}
```

Output format
```
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
```

**Approach**

1. Using `username` find the user details like `username`, `email`, `name` and `city`. Also take the `userId` from user details. Endpoint used `https://jsonplaceholder.typicode.com/users`.
2. Using `userId` find all the posts made. Also take all the `postId` in a array. Endpoint used `https://jsonplaceholder.typicode.com/posts`.
3. Using the `postId` array run loop to fetch all the comments for each post at the same time.
4. Waiting for all the comments to return using `Promise.all`
5. Now extracting all the necessary data.

## Sub task - 2

We have the `email` and `title` of the comment but we have to find the `username`, `name` and `email` of the user who has posted that post on which this comment is.

Input type 
```
{
  email: “email_of_any_given_comment”,
  title: “title_of_any_given_comment”
}
```

Output type
```
{ 
  "username": "", 
  "name": "", 
  "email": ""
}
```

**Approach**
1. Find the comment details from endpoint `https://jsonplaceholder.typicode.com/comments` and add the query parameters like this `?email=Blake_Spinka@robyn.info`.
2. Match the title of the comment.
3. Using the `postId` from the comment details find the post details using endpoint `https://jsonplaceholder.typicode.com/posts`  with query parameters `?id=3`.
4. Get the `userId` from the post details and now find the user details using the endpoint `https://jsonplaceholder.typicode.com/users` with query parameters `?id=2`.
5. Extract the necessary data from userdetails.
