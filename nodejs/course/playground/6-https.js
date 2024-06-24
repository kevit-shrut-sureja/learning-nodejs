const https = require('https')

const url = 'https://jsonplaceholder.typicode.com/comments?postId=1'

const request = https.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data += chunk.toString();
        console.log(data  );
        console.log("---------------");
    });

    response.on('end', () => {
        console.log("End");
        // console.log(data);
    })
});

request.on('error', (error) => {
    console.log('An error', error)
})
request.end()