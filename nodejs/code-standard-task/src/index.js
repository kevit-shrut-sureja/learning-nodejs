"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mockData_1 = require("./utils/mockData");
const jsonToExcel_1 = require("./utils/jsonToExcel");
const app = (0, express_1.default)();
;
app.use(express_1.default.static('../public'));
app.get('/convert', (req, res) => {
    (0, jsonToExcel_1.jsonToExcel)(mockData_1.customers, './');
    res.send("the data in converted");
});
app.listen(3000, () => {
    console.log("Server is listing on 3000");
});
