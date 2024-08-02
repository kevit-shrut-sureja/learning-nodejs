"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonToExcel = jsonToExcel;
const export_to_csv_1 = require("export-to-csv");
const fs_1 = require("fs");
/**
 * This function converts data form json to excel and store it in a public file
 * @param {*} data - data that is to be stored in he file
 * @param {string} path - path where i want to store the file
*/
function jsonToExcel(data, path) {
    const csvConfig = (0, export_to_csv_1.mkConfig)({ useKeysAsHeaders: true });
    // Converts your Array<Object> to a CsvOutput string based on the configs
    const csv = (0, export_to_csv_1.generateCsv)(csvConfig)(data);
    const filename = `${csvConfig.filename}.csv`;
    const csvBuffer = new Uint8Array(Buffer.from((0, export_to_csv_1.asString)(csv)));
    try {
        (0, fs_1.writeFileSync)(path, csvBuffer);
    }
    catch (error) {
        throw new Error("Error in writting the json data to excel");
    }
}
