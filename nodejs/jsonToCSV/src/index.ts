import express from 'express';
import { json2csv } from 'json-2-csv';
import { customer } from './utils/customers';
import { writeFile } from 'fs/promises';
import path from 'path';
import { logger } from './utils/logger';

const app = express();

/**
 * This path lets the client download the CSV file of the customer data
 * @returns {csv file}
 */
app.get('/getCSV', async (req, res) => {
	const result = json2csv(customer);
	await writeFile('./public/test.csv', result);
	logger.info('File converted successfully');
	res.download(path.join(__dirname, '../public', 'test.csv'));
});

/** Servers starts here*/
app.listen(3000, () => {
	logger.info(`[server] : listining on port 3000`);
});
