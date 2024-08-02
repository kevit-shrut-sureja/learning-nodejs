import { mkConfig, generateCsv, asString } from "export-to-csv";
import { writeFileSync } from "fs";
/**
 * This function converts data form json to excel and store it in a public file
 * @param {*} data - data that is to be stored in he file 
 * @param {string} path - path where i want to store the file
*/
function jsonToExcel(data : any, path : string) {
  
  const csvConfig = mkConfig({ useKeysAsHeaders: true });
  // Converts your Array<Object> to a CsvOutput string based on the configs
  const csv = generateCsv(csvConfig)(data);
  const filename = `${csvConfig.filename}.csv`;
  const csvBuffer = new Uint8Array(Buffer.from(asString(csv)));

  try {
    writeFileSync(path, csvBuffer)
  } catch (error) {
    throw new Error("Error in writting the json data to excel")
  }
}

export { jsonToExcel }