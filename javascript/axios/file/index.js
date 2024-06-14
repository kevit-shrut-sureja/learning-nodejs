import axios from 'axios';
import fs from 'fs'
const url = 'https://api.escuelajs.co/api/v1/files/upload';

async function uploadFile() {
    const result = await axios(url , {
        method : "POST",
        headers : {
            "Content-Type" : "multipart/form-data"
        },
        data : {
            file : fs.createReadStream('./1.jpg') 
        }
    });
    console.log()
    return result;
}




async function getFile(url) {
    const result = await axios(url);
    console.log(result)
    return result;
}

const result = uploadFile();
    
result.then((response ) => {
    
    console.log(typeof response.data);
    const getfile = getFile(response.data.location);

    getfile.then((response) => {
        const filename = "shrut.jpg"
        // Doubt : the download way is not write
        const writeFileResult = fs.writeFile(filename, Buffer.from(response.data), "utf-8", (err) => {
            if(err) console.log(err);
            else console.log("data is written in the file : ", filename)

        });

        console.log(writeFileResult)

    })
})