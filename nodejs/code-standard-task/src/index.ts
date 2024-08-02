import express from "express"
import { customers } from "./utils/mockData";
import { jsonToExcel } from "./utils/jsonToExcel";

const app = express();;
app.use(express.static('../public'))

app.get('/convert', (req, res) => {
    jsonToExcel(customers, './')
    res.send("the data in converted")
})

app.listen(3000, ()=> {
    console.log("Server is listing on 3000");
})